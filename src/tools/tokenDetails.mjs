import axios from 'axios'
import { z } from 'zod'
import dotenv from 'dotenv'

dotenv.config()
const MORALIS_API_KEY = process.env.MORALIS_API_KEY
const HEADERS = { 
    'accept': 'application/json',
    'X-API-Key': MORALIS_API_KEY
 }


function prepareGetData( { item, userParams } ) {
    const { url: root } = item

    const url = Object
        .entries( item['input']['variables'] )
        .reduce( ( acc, [ name, _var ], index, arr ) => {
            const { required } = _var
            if( required ) {
                !Object.hasOwn( userParams, name ) ? console.error( `Missing required parameter: ${name}` ) : null
                acc = acc.replace( `:${name}`, userParams[ name ] )
            }
            if( Object.hasOwn( userParams, name ) ) {
                acc = acc.replace( `:{${name}}`, userParams[ name ] )
            }

            if( index === arr.length - 1 ) {
                const q = Object
                    .entries( item['input']['query'] )
                    .reduce( ( abb, [ name, query ], index, _arr ) => {
                        const { required } = query
                        if( required ) {
                            !Object.hasOwn( userParams, name ) ? console.error( `Missing required parameter: ${name}` ) : null
                        }
                        if( Object.hasOwn( userParams, name ) ) {
                            abb[ name ] = userParams[ name ]
                        }

                        if( index === arr.length - 1 ) {
                            if( Object.keys( abb ).length === 0 ) { return abb }
                            let str = ''
                            str += '?'
                            str += new URLSearchParams( abb ).toString()
                            acc += str
                        }

                        return abb
                    }, {} )                
            }

            return acc
        }, root )

    return { url }
}


async function getData( { userParams, item } ) {
    let struct = {
        'status': true,
        'messages': [],
        'data': null,
    }

    const { method } = item

    switch( method ) {
        case 'GET':
            const { url } = prepareGetData( { userParams, item } )
            try {
                const response = await axios.get( url, { headers: HEADERS } )
                const { data } = response
                struct['data'] = data
            } catch( e ) {
                struct['status'] = false
                struct['messages'].push( e.message )
            }
            break;
        case 'POST':
            struct['status'] = false
            struct['messages'].push( 'POST method not implemented yet' )
            break;
        default:
            struct['status'] = false
            struct['messages'].push( 'Unknown method:', method )
            console.warn('Unknown method:', method)
    }

    return struct
}


function createInterface( { name, item, server } ) {
    const { description, input } = item

    const a = Object.entries( input['query'] )
    const b = Object.entries( input['variables'] )
    const zodSchema = [ ...a, ...b ]
        .reduce((acc, [ key, value ] ) => {

            const { type: _type, enum: _enum, required, description } = value;

            let schema;
            switch( _type ) {
                case 'number':
                    schema = z.number()
                    break
                case 'string':
                    if (Array.isArray(_enum) && _enum.length > 0) {
                        schema = z.enum([..._enum])
                    } else {
                        schema = z.string()
                    }
                    break
                case 'boolean':
                    schema = z.boolean()
                    break;
                default:
                    console.warn('> Unknown type:', _type)
                    schema = z.any()
            }
        
            if( description ) { schema = schema.describe(description) }
            if (required) {
                schema = schema
            } else {
                schema = schema.optional()
            }
        
            acc[key] = schema
            return acc
        }, {} )

    server.tool(
        name, 
        description, 
        zodSchema, 
        async ( userParams ) => {
            const { status, messages, data } = await getData( { userParams, item } )
            if( status ) {
                return { content: [{ type: "text", text: JSON.stringify(data) }] }
            } else {
                return { content: [{ type: "text", text: `Error(s): ${messages.join(', ')}` }] }
            }

        }
    )

    return true
}


function createTokenMetadataTool( server, item ) {
    const { url, category } = item
    let name = ''
    name += `${category.toLowerCase()}--`
    name += url
        .replace( 'https://deep-index.moralis.io/api/v2.2/', '' )
        .split( '/' )
        .map( word => word.toLowerCase().replace(':', '') )
        .join( '-' )
    createInterface( { name, item, server } )
}


export { createTokenMetadataTool }