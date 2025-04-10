import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

import { moralisEndpoints } from './data/moralisEndpoints.mjs'
import { activeEndpoints } from './data/activeEndpoints.mjs'
import { createTokenMetadataTool } from './tools/tokenDetails.mjs'



const server = new McpServer( {
  name: 'Crypto Moralis MCP',
  description: 'A collection of tools to get data about crypto tokens.',
  version: '1.0.0',
} )


const doubles = new Set()
Object
  .entries( activeEndpoints )
  .forEach( ( [ category, endpoints ] ) => {
    endpoints
      .forEach( ( struct ) => {
        const { url } = struct
        if( doubles.has( url ) ) {
          // console.warn( 'Duplicate URL:', url )
        } else {
          doubles.add( url )
          const item = moralisEndpoints
            .find( ( item ) => item.url === struct.url )
          createTokenMetadataTool( server, item )
        }
      } )

  } )






async function startServer() {
  const transport = new StdioServerTransport()
  try {
    await server.connect(transport)
  } catch (err) {
    console.error( 'Failed to start server:', err )
  }
}

await startServer();
