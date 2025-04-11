import fs from 'fs'


const raw = fs.readFileSync( './src/data/moralis-endpoints.json', 'utf-8' )
const json = JSON.parse( raw )

console.log( json )

const test = json
    .reduce( ( acc, item, index, arr ) => {
        const { category, description, url } = item
        if( !Object.hasOwn( acc, category ) ) {
            acc[ category ] = []
        }
        acc[ category ].push( { url, description, 'enable': false } )

        return acc
    }, {} )

fs.writeFileSync( 
    './src/data/active-endpoints-new.json', 
    JSON.stringify( test, null, 4 ) 
)