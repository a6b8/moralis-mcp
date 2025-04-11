# Moralis Web3 API - MCP

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A Model Context Protocol (MCP) server implementation for interacting with the Moralis Web3 API, providing access to blockchain data across multiple networks through a structured API interface.

## Features:
- Access to 100+ blockchain API endpoints through a unified MCP interface
- Multi-chain support for Ethereum, Polygon, BSC, Avalanche, and more
- Comprehensive tools for querying NFT data, token information, and wallet analytics
- Modular architecture with dynamically loaded endpoints
- Built on the Model Context Protocol for standardized data exchange

## Quickstart

### Installation

```bash
# Install dependencies
npm install
```

### Claude Configuration

To use this server with Claude, add the following configuration to your Claude config file:

```json
{
  "globalShortcut": "",
  "mcpServers": {
    "crypto-moralis": {
      "command": "node",
      "args": [
        "...yourpath-to-the-folder/moralis-mcp"
      ],
      "env": {
        "MORALIS_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}
```

## Table of Contents
- [Moralis Web3 API - MCP](#moralis-web3-api---mcp)
  - [Features:](#features)
  - [Quickstart](#quickstart)
    - [Installation](#installation)
    - [Claude Configuration](#claude-configuration)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Available Endpoints](#available-endpoints)
    - [Blockchain API](#blockchain-api)
    - [NFT API](#nft-api)
    - [Token API](#token-api)
    - [Wallet API](#wallet-api)
    - [DeFi API](#defi-api)
    - [Utils](#utils)
  - [License](#license)

## Overview

The Moralis Web3 API MCP server acts as a bridge between the Model Context Protocol and the Moralis Web3 API. It dynamically loads and registers all active endpoints defined in the `activeEndpoints.mjs` file as MCP tools, making them available for consumption by MCP clients.

## Available Endpoints

The server provides access to the following categories of endpoints:

### Blockchain API
- Get block contents by block hash
- Convert date to block
- Get transaction details
- Get latest block number
- Get native transactions

### NFT API
- Get NFT collection data
- Get NFT metadata
- Get collection stats
- Get floor prices
- Get NFT traits
- Get NFT owners

### Token API
- Get token prices
- Get token metadata
- Get token holders and owners
- Get token transfers
- Get top gainers and losers
- Get trending tokens
- Get liquidity reserves

### Wallet API
- Get wallet chains
- Get wallet profitability
- Get wallet stats
- Resolve wallet domains (ENS, Unstoppable)

### DeFi API
- Get wallet DeFi positions

### Utils
- Review contracts for spam

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.