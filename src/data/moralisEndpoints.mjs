const moralisEndpoints = [
    {
        "description": "Get the contents of a block given the block hash.",
        "category": "Blockchain-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "include": {
                    "description": "If the result should contain the internal transactions.",
                    "type": "string",
                    "enum": [
                        "internal_transactions"
                    ],
                    "required": false
                }
            },
            "variables": {
                "block_number_or_hash": {
                    "description": "The block number or block hash",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the closest block given the date.",
        "category": "Blockchain-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/dateToBlock",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "date": {
                    "description": "Unix date in seconds or a datestring (any format that is accepted by momentjs)",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Get the contents of a transaction by the given transaction hash.",
        "category": "Blockchain-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash/verbose",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "include": {
                    "description": "If the result should contain the internal transactions.",
                    "type": "string",
                    "enum": [
                        "internal_transactions"
                    ],
                    "required": false
                }
            },
            "variables": {
                "transaction_hash": {
                    "description": "The transaction hash",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get native transactions and logs ordered by block number in descending order.",
        "category": "Blockchain-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/verbose",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transactionsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The maximum block number from which to get the transactions.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The start date from which to get the transactions (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get the transactions up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "include": {
                    "description": "If the result should contain the internal transactions.",
                    "type": "string",
                    "enum": [
                        "internal_transactions"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the wallet",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Returns the latest block number for the given chain.",
        "category": "Blockchain-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/latestBlockNumber/:chain",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                }
            }
        }
    },
    {
        "description": "Get the contents of a transaction by the given transaction hash.",
        "category": "Blockchain-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "include": {
                    "description": "If the result should contain the internal transactions.",
                    "type": "string",
                    "enum": [
                        "internal_transactions"
                    ],
                    "required": false
                }
            },
            "variables": {
                "transaction_hash": {
                    "description": "The transaction hash",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get native transactions ordered by block number in descending order.",
        "category": "Blockchain-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transactionsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The maximum block number from which to get the transactions.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The start date from which to get the transactions (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get the transactions up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "include": {
                    "description": "If the result should contain the internal transactions.",
                    "type": "string",
                    "enum": [
                        "internal_transactions"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the wallet",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the detailed defi positions by protocol for a wallet address.",
        "category": "DeFi-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/:protocol/positions",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "holesky",
                        "0x4268",
                        "polygon amoy",
                        "0x13882",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "linea sepolia",
                        "0xe705"
                    ],
                    "required": false
                }
            },
            "variables": {
                "addressprotocol": {
                    "description": "Wallet addressThe protocol to query",
                    "type": "stringstring",
                    "enum": [
                        "uniswap-v2",
                        "uniswap-v3",
                        "pancakeswap-v2",
                        "pancakeswap-v3",
                        "quickswap-v2",
                        "sushiswap-v2",
                        "aave-v2",
                        "aave-v3",
                        "fraxswap-v1",
                        "fraxswap-v2",
                        "lido",
                        "makerdao",
                        "eigenlayer"
                    ],
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the positions summary of a wallet address.",
        "category": "DeFi-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/positions",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "holesky",
                        "0x4268",
                        "polygon amoy",
                        "0x13882",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "linea sepolia",
                        "0xe705"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "Wallet address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the defi summary of a wallet address.",
        "category": "DeFi-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/summary",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "holesky",
                        "0x4268",
                        "polygon amoy",
                        "0x13882",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "linea sepolia",
                        "0xe705"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "Wallet address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get Entities By Category",
        "category": "Entity-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/entities/categories/:categoryId",
        "spamDetection": false,
        "input": {
            "query": {
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "categoryId": {
                    "description": "",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Retrieve detailed information about a specific entity by its ID",
        "category": "Entity-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/entities/:entityId",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {
                "entityId": {
                    "description": "The ID of the entity",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get Entity Categories",
        "category": "Entity-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/entities/categories",
        "spamDetection": false,
        "input": {
            "query": {
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Search for entities, addresses and categories",
        "category": "Entity-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/entities/search",
        "spamDetection": false,
        "input": {
            "query": {
                "query": {
                    "description": "The search query",
                    "type": "string",
                    "enum": null,
                    "required": true
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {}
        }
    },
    {
        "description": "",
        "category": "Get-Trending-NFTs",
        "method": "",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {}
        }
    },
    {
        "description": "Get the top NFT collections by market cap",
        "category": "Get-Trending-NFTs",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/market-data/nfts/top-collections",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {}
        }
    },
    {
        "description": "Get the top NFT collections by trading volume",
        "category": "Get-Trending-NFTs",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/market-data/nfts/hottest-collections",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {}
        }
    },
    {
        "description": "",
        "category": "NFT-API",
        "method": "",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {}
        }
    },
    {
        "description": "Get NFTs for a given contract address, including metadata for all NFTs (where available).",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "format": {
                    "description": "The format of the token ID",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "totalRanges": {
                    "description": "The number of subranges to split the results into",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "range": {
                    "description": "The desired subrange to query",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "normalizeMetadata": {
                    "description": "Should normalized metadata be returned?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "media_items": {
                    "description": "Should preview media data be returned?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "include_prices": {
                    "description": "Should NFT last sale prices be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Returns an array of NFTs specified in the request.",
        "category": "NFT-API",
        "method": "POST",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/getMultipleNFTs",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Get the stats for a nft collection address.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/stats",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT collection",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the collection / contract level metadata for a given contract (name, symbol, base token URI).",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/metadata",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "include_prices": {
                    "description": "Should NFT last sale prices be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the sold price for an NFT contract for the last x days (only trades paid in ETH).",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/price",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "arbitrum",
                        "0xa4b1",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa"
                    ],
                    "required": false
                },
                "days": {
                    "description": "The number of days to look back to find the lowest price\nIf not provided 7 days will be the default and 365 is the maximum",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT collection",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get transfers of NFTs for a given contract and other parameters.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/transfers",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from where to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The maximum block number from where to get the transfers.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The date from where to get the transfers (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get transfers up until this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "format": {
                    "description": "The format of the token ID",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC).",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "include_prices": {
                    "description": "Should NFT last sale prices be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get floor price for a given contract.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "base",
                        "0x2105"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get floor price for a given token.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/floor-price",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "base",
                        "0x2105"
                    ],
                    "required": false
                }
            },
            "variables": {
                "addresstoken_id": {
                    "description": "The address of the NFT contractThe token ID of the NFT",
                    "type": "stringstring",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get historical floor price for a given contract.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price/historical",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "base",
                        "0x2105"
                    ],
                    "required": false
                },
                "interval": {
                    "description": "The duration to query",
                    "type": "string",
                    "enum": [
                        "1d",
                        "7d",
                        "30d",
                        "60d",
                        "90d",
                        "1y",
                        "all"
                    ],
                    "required": true
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get NFT data, including metadata (where available), for the given NFT token ID and contract address.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "format": {
                    "description": "The format of the token ID",
                    "type": "string",
                    "enum": [
                        "decimal",
                        "hex"
                    ],
                    "required": false
                },
                "normalizeMetadata": {
                    "description": "The option to enable metadata normalization. Learn more about metadata normalization here.",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "media_items": {
                    "description": "Should preview media data be returned? Learn more about media items here.",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "include_prices": {
                    "description": "Should NFT last sale prices be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "addresstoken_id": {
                    "description": "The address of the NFT contractThe ID of the token",
                    "type": "stringstring",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get owners of NFTs for a given contract.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/owners",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "format": {
                    "description": "The format of the token ID",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "normalizeMetadata": {
                    "description": "Should normalized metadata be returned?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "media_items": {
                    "description": "Should preview media data be returned?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the sold price for an NFT token for the last x days (only trades paid in ETH).",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "arbitrum",
                        "0xa4b1",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa"
                    ],
                    "required": false
                },
                "days": {
                    "description": "The number of days to look back to find the lowest price\nIf not provided 7 days will be the default and 365 is the maximum",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "addresstoken_id": {
                    "description": "The address of the NFT collectionThe token id of the NFT collection",
                    "type": "stringstring",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get owners of a specific NFT given the contract address and token ID.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/owners",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "format": {
                    "description": "The format of the token ID",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "normalizeMetadata": {
                    "description": "Should normalized metadata be returned?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "media_items": {
                    "description": "Should preview media data be returned?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "addresstoken_id": {
                    "description": "The address of the NFT contractThe ID of the token",
                    "type": "stringstring",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get trades of NFTs for a given contract and token ID.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/trades",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "arbitrum",
                        "0xa4b1",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa"
                    ],
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The block number to get the trades from",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The start date from which to get the transfers (format in seconds or datestring accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "The end date from which to get the transfers (format in seconds or datestring accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "nft_metadata": {
                    "description": "Should NFT metadata be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "addresstoken_id": {
                    "description": "The address of the NFT contractThe token ID of the NFT contract",
                    "type": "stringstring",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get trades of NFTs for a given wallet.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts/trades",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "arbitrum",
                        "0xa4b1",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa"
                    ],
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The block number to get the trades from",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The start date from which to get the transfers (format in seconds or datestring accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "The end date from which to get the transfers (format in seconds or datestring accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "nft_metadata": {
                    "description": "Should NFT metadata be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The owner wallet address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get trades of NFTs for a given contract and marketplace.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/trades",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The block number to get the trades from",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The start date from which to get the transfers (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "The end date from which to get the transfers (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "marketplace": {
                    "description": "Marketplace from which to get the trades (only OpenSea is supported at the moment)",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "nft_metadata": {
                    "description": "Should NFT metadata be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get NFT traits for a given collection",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/traits/paginate",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get NFT traits for a given collection",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/traits",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get transfers of an NFT given a contract address and token ID.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/transfers",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "format": {
                    "description": "The format of the token ID",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "include_prices": {
                    "description": "Should NFT last sale prices be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "addresstoken_id": {
                    "description": "The address of the NFT contractThe ID of the token",
                    "type": "stringstring",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get NFTs by traits for a given contract.",
        "category": "NFT-API",
        "method": "POST",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/nfts-by-traits",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "format": {
                    "description": "The format of the token ID",
                    "type": "string",
                    "enum": [
                        "decimal",
                        "hex"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "normalizeMetadata": {
                    "description": "The option to enable metadata normalization. Learn more about metadata normalization here.",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "media_items": {
                    "description": "Should preview media data be returned? Learn more about media items here.",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get NFT collections owned by a given wallet address.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/nft/collections",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "token_counts": {
                    "description": "Should token counts per collection be included in the response?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "exclude_spam": {
                    "description": "Should spam NFTs be excluded from the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "include_prices": {
                    "description": "Should NFT last sale prices be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The wallet address of the owner of NFTs in the collections",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get transfers of NFTs given the wallet and other parameters.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/nft/transfers",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "contract_addresses": {
                    "description": "List of contract addresses of transfers",
                    "type": "array",
                    "enum": null,
                    "required": false
                },
                "format": {
                    "description": "The format of the token ID",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "To get the reserves at this block number",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The date from where to get the transfers (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get transfers up until this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "include_prices": {
                    "description": "Should NFT last sale prices be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The wallet address of the sender or recipient of the transfers",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get NFTs owned by a given address.",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/nft",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "format": {
                    "description": "The format of the token ID",
                    "type": "string",
                    "enum": [
                        "decimal",
                        "hex"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "exclude_spam": {
                    "description": "Should spam NFTs be excluded from the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "token_addresses": {
                    "description": "The non-fungible token (NFT) addresses to get balances for",
                    "type": "array",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "normalizeMetadata": {
                    "description": "The option to enable metadata normalization. Learn more about metadata normalization here.",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "media_items": {
                    "description": "Should preview media data be returned? Learn more about media items here.",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "include_prices": {
                    "description": "Should NFT last sale prices be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the wallet",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Resync the metadata for an NFT",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/metadata/resync",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "flag": {
                    "description": "The type of resync to operate",
                    "type": "string",
                    "enum": [
                        "uri",
                        "metadata"
                    ],
                    "required": false
                },
                "mode": {
                    "description": "To define the behaviour of the endpoint",
                    "type": "string",
                    "enum": [
                        "sync",
                        "async"
                    ],
                    "required": false
                }
            },
            "variables": {
                "addresstoken_id": {
                    "description": "The address of the NFT contractThe ID of the token",
                    "type": "stringstring",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Resync the NFT Trait for a given contract",
        "category": "NFT-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/traits/resync",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Initiates a sync of a previously non synced contract.",
        "category": "NFT-API",
        "method": "PUT",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/sync",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Returns an array of token prices denominated in the blockchain's native token and USD for a given token contract address",
        "category": "Price-API",
        "method": "POST",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/prices",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "chiliz",
                        "0x15b38",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "ronin",
                        "0x7e4",
                        "lisk",
                        "0x46f",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "include": {
                    "description": "If the result should contain the 24hr percent change",
                    "type": "string",
                    "enum": [
                        "percent_change"
                    ],
                    "required": false
                },
                "max_token_inactivity": {
                    "description": "Exclude tokens inactive for more than the given amount of days",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "min_pair_side_liquidity_usd": {
                    "description": "Exclude tokens with liquidity less than the specified amount in USD. This parameter refers to the liquidity on a single side of the pair.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Get the sold price for an NFT contract for the last x days (only trades paid in ETH).",
        "category": "Price-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/price",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "arbitrum",
                        "0xa4b1",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa"
                    ],
                    "required": false
                },
                "days": {
                    "description": "The number of days to look back to find the lowest price\nIf not provided 7 days will be the default and 365 is the maximum",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT collection",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get floor price for a given contract.",
        "category": "Price-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "base",
                        "0x2105"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get floor price for a given token.",
        "category": "Price-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/floor-price",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "base",
                        "0x2105"
                    ],
                    "required": false
                }
            },
            "variables": {
                "addresstoken_id": {
                    "description": "The address of the NFT contractThe token ID of the NFT",
                    "type": "stringstring",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get historical floor price for a given contract.",
        "category": "Price-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price/historical",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "base",
                        "0x2105"
                    ],
                    "required": false
                },
                "interval": {
                    "description": "The duration to query",
                    "type": "string",
                    "enum": [
                        "1d",
                        "7d",
                        "30d",
                        "60d",
                        "90d",
                        "1y",
                        "all"
                    ],
                    "required": true
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the NFT contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the sold price for an NFT token for the last x days (only trades paid in ETH).",
        "category": "Price-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "arbitrum",
                        "0xa4b1",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa"
                    ],
                    "required": false
                },
                "days": {
                    "description": "The number of days to look back to find the lowest price\nIf not provided 7 days will be the default and 365 is the maximum",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "addresstoken_id": {
                    "description": "The address of the NFT collectionThe token id of the NFT collection",
                    "type": "stringstring",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the OHLCV candle stick by using pair address",
        "category": "Price-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/pairs/:address/ohlcv",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "timeframe": {
                    "description": "The timeframe",
                    "type": "string",
                    "enum": [
                        "1s",
                        "10s",
                        "30s",
                        "1min",
                        "5min",
                        "10min",
                        "30min",
                        "1h",
                        "4h",
                        "12h",
                        "1d",
                        "1w",
                        "1M"
                    ],
                    "required": true
                },
                "currency": {
                    "description": "The currency",
                    "type": "string",
                    "enum": [
                        "usd",
                        "native"
                    ],
                    "required": true
                },
                "fromDate": {
                    "description": "The starting date (format in seconds or datestring accepted by momentjs)Provide the param 'fromBlock' or 'fromDate'If 'fromDate' and 'fromBlock' are provided, 'fromBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": true
                },
                "toDate": {
                    "description": "The ending date (format in seconds or datestring accepted by momentjs)Provide the param 'toBlock' or 'toDate'If 'toDate' and 'toBlock' are provided, 'toBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": true
                },
                "limit": {
                    "description": "The number of results to return",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page)",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The pair address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the token price denominated in the blockchain's native token and USD. View supported exchanges here",
        "category": "Price-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/price",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "chiliz",
                        "0x15b38",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "ronin",
                        "0x7e4",
                        "lisk",
                        "0x46f",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "include": {
                    "description": "If the result should contain the 24hr percent change",
                    "type": "string",
                    "enum": [
                        "percent_change"
                    ],
                    "required": false
                },
                "exchange": {
                    "description": "The factory name or address of the token exchange. View supported exchanges here",
                    "type": "string",
                    "enum": [
                        "uniswapv2",
                        "uniswapv3",
                        "sushiswapv2",
                        "pancakeswapv1",
                        "pancakeswapv2",
                        "pancakeswapv3",
                        "quickswap",
                        "quickswapv2",
                        "traderjoe",
                        "pangolin",
                        "spookyswap",
                        "vvs",
                        "mm finance",
                        "crodex",
                        "camelotv2"
                    ],
                    "required": false
                },
                "to_block": {
                    "description": "The block number from which the token price should be checked",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "max_token_inactivity": {
                    "description": "Exclude tokens inactive for more than the given amount of days",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "min_pair_side_liquidity_usd": {
                    "description": "Exclude tokens with liquidity less than the specified amount in USD. This parameter refers to the liquidity on a single side of the pair.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the token contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get aggregated statistics across supported pairs of a token.",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/:token_address/pairs/stats",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                }
            },
            "variables": {
                "token_address": {
                    "description": "The address of the token contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Returns filtered tokens based on specified metrics and criteria.",
        "category": "Token-API",
        "method": "POST",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/discovery/tokens",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {}
        }
    },
    {
        "description": "Get historical holder statistics for a specific ERC20 token address over a date range",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/holders/historical",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "ronin",
                        "0x7e4",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "fromDate": {
                    "description": "The starting date (format in seconds or datestring accepted by momentjs)",
                    "type": "string",
                    "enum": null,
                    "required": true
                },
                "toDate": {
                    "description": "The ending date (format in seconds or datestring accepted by momentjs)",
                    "type": "string",
                    "enum": null,
                    "required": true
                },
                "timeFrame": {
                    "description": "The timeframe",
                    "type": "string",
                    "enum": [
                        "1min",
                        "5min",
                        "10min",
                        "30min",
                        "1h",
                        "4h",
                        "12h",
                        "1d",
                        "1w",
                        "1M"
                    ],
                    "required": true
                }
            },
            "variables": {
                "address": {
                    "description": "The token contract address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Returns analytics data for multiple token addresses across different chains",
        "category": "Token-API",
        "method": "POST",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/tokens/analytics",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {}
        }
    },
    {
        "description": "Returns an array of token prices denominated in the blockchain's native token and USD for a given token contract address",
        "category": "Token-API",
        "method": "POST",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/prices",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "chiliz",
                        "0x15b38",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "ronin",
                        "0x7e4",
                        "lisk",
                        "0x46f",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "include": {
                    "description": "If the result should contain the 24hr percent change",
                    "type": "string",
                    "enum": [
                        "percent_change"
                    ],
                    "required": false
                },
                "max_token_inactivity": {
                    "description": "Exclude tokens inactive for more than the given amount of days",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "min_pair_side_liquidity_usd": {
                    "description": "Exclude tokens with liquidity less than the specified amount in USD. This parameter refers to the liquidity on a single side of the pair.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Get the OHLCV candle stick by using pair address",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/pairs/:address/ohlcv",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "timeframe": {
                    "description": "The timeframe",
                    "type": "string",
                    "enum": [
                        "1s",
                        "10s",
                        "30s",
                        "1min",
                        "5min",
                        "10min",
                        "30min",
                        "1h",
                        "4h",
                        "12h",
                        "1d",
                        "1w",
                        "1M"
                    ],
                    "required": true
                },
                "currency": {
                    "description": "The currency",
                    "type": "string",
                    "enum": [
                        "usd",
                        "native"
                    ],
                    "required": true
                },
                "fromDate": {
                    "description": "The starting date (format in seconds or datestring accepted by momentjs)Provide the param 'fromBlock' or 'fromDate'If 'fromDate' and 'fromBlock' are provided, 'fromBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": true
                },
                "toDate": {
                    "description": "The ending date (format in seconds or datestring accepted by momentjs)Provide the param 'toBlock' or 'toDate'If 'toDate' and 'toBlock' are provided, 'toBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": true
                },
                "limit": {
                    "description": "The number of results to return",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page)",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The pair address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Fetch the pair data of the provided token0+token1 combination.\nThe token0 and token1 options are interchangable (ie. there is no different outcome in \"token0=WETH and token1=USDT\" or \"token0=USDT and token1=WETH\")",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddress",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "chiliz",
                        "0x15b38",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507"
                    ],
                    "required": false
                },
                "to_block": {
                    "description": "The block number to get the reserves from",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get the reserves up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "exchange": {
                    "description": "The factory name or address of the token exchange",
                    "type": "string",
                    "enum": [
                        "uniswapv2",
                        "uniswapv3",
                        "sushiswapv2",
                        "pancakeswapv1",
                        "pancakeswapv2",
                        "quickswap",
                        "quickswapv2",
                        "traderjoe",
                        "pangolin",
                        "spookyswap",
                        "vvs",
                        "camelotv2"
                    ],
                    "required": true
                }
            },
            "variables": {
                "token0_addresstoken1_address": {
                    "description": "The token0 addressThe token1 address",
                    "type": "stringstring",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the liquidity reserves for a given pair address. Only Uniswap V2 based exchanges supported at the moment.",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:pair_address/reserves",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "chiliz",
                        "0x15b38",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507"
                    ],
                    "required": false
                },
                "to_block": {
                    "description": "The block number to get the reserves from",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get the reserves up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "pair_address": {
                    "description": "The liquidity pair address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get all snipers (wallets that quickly buy and sell tokens) for a specific token pair address.",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/pairs/:address/snipers",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query.",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "ronin",
                        "0x7e4",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "blocksAfterCreation": {
                    "description": "The number of blocks after the token pair creation to consider for sniper activity.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The pair address for which snipers are to be retrieved.",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get all swap related transactions (buy, sell, add liquidity & remove liquidity)",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/pairs/:address/swaps",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page)",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The number of results to return",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "fromBlock": {
                    "description": "The minimum block number from which to get the token transactionsProvide the param 'fromBlock' or 'fromDate'If 'fromDate' and 'fromBlock' are provided, 'fromBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "toBlock": {
                    "description": "The block number up to which you want to get the token transactions from",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "fromDate": {
                    "description": "The starting date (format in seconds or datestring accepted by momentjs)Provide the param 'fromBlock' or 'fromDate'If 'fromDate' and 'fromBlock' are provided, 'fromBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "toDate": {
                    "description": "The ending date (format in seconds or datestring accepted by momentjs)Provide the param 'toBlock' or 'toDate'If 'toDate' and 'toBlock' are provided, 'toBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                },
                "transactionTypes": {
                    "description": "Array of transaction types. Allowed values are 'buy', 'sell', 'addLiquidity', 'removeLiquidity'.",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The pair address token-transactions are to be retrieved for.",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get all swap related transactions (buy, sell)",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/swaps",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page)",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The number of results to return",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                },
                "fromBlock": {
                    "description": "The minimum block number from which to get the token transactionsProvide the param 'fromBlock' or 'fromDate'If 'fromDate' and 'fromBlock' are provided, 'fromBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "toBlock": {
                    "description": "The block number up to which you want to get the token transactions from",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "fromDate": {
                    "description": "The starting date (format in seconds or datestring accepted by momentjs)Provide the param 'fromBlock' or 'fromDate'If 'fromDate' and 'fromBlock' are provided, 'fromBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "toDate": {
                    "description": "The ending date (format in seconds or datestring accepted by momentjs)Provide the param 'toBlock' or 'toDate'If 'toDate' and 'toBlock' are provided, 'toBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "transactionTypes": {
                    "description": "Array of transaction types. Allowed values are 'buy', 'sell'",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The token address to get transaction for",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get all swap related transactions (buy, sell)",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/swaps",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page)",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The number of results to return",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "fromBlock": {
                    "description": "The minimum block number from which to get the token transactionsProvide the param 'fromBlock' or 'fromDate'If 'fromDate' and 'fromBlock' are provided, 'fromBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "toBlock": {
                    "description": "The block number up to which you want to get the token transactions from",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "fromDate": {
                    "description": "The starting date (format in seconds or datestring accepted by momentjs)Provide the param 'fromBlock' or 'fromDate'If 'fromDate' and 'fromBlock' are provided, 'fromBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "toDate": {
                    "description": "The ending date (format in seconds or datestring accepted by momentjs)Provide the param 'toBlock' or 'toDate'If 'toDate' and 'toBlock' are provided, 'toBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                },
                "transactionTypes": {
                    "description": "Array of transaction types. Allowed values are 'buy', 'sell'",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The wallet address token-transactions are to be retrieved for.",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Returns historical buy and sell volume data for a specific token category in time intervals",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/volume/timeseries/:categoryId",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "ronin",
                        "0x7e4",
                        "pulse",
                        "0x171",
                        "solana"
                    ],
                    "required": false
                },
                "timeframe": {
                    "description": "The time interval for data points",
                    "type": "string",
                    "enum": [
                        "1d",
                        "7d",
                        "30d"
                    ],
                    "required": true
                }
            },
            "variables": {
                "categoryId": {
                    "description": "The category identifier",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Returns historical volume data for chains in time intervals",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/volume/timeseries",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "ronin",
                        "0x7e4",
                        "pulse",
                        "0x171",
                        "solana"
                    ],
                    "required": false
                },
                "timeframe": {
                    "description": "The time interval for data points",
                    "type": "string",
                    "enum": [
                        "1d",
                        "7d",
                        "30d"
                    ],
                    "required": true
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Retrieve timeseries volume data by token addresses",
        "category": "Token-API",
        "method": "POST",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/tokens/analytics/timeseries",
        "spamDetection": false,
        "input": {
            "query": {
                "timeframe": {
                    "description": "The timeframe to query",
                    "type": "string",
                    "enum": [
                        "1d",
                        "7d",
                        "30d"
                    ],
                    "required": true
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Get analytics for a token by token address",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "ronin",
                        "0x7e4",
                        "pulse",
                        "0x171",
                        "solana"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The token address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get token details",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/discovery/token",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "mainnet",
                        "0x1",
                        "matic",
                        "0x89",
                        "polygon",
                        "bsc",
                        "binance",
                        "0x38",
                        "fantom",
                        "ftm",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "optimism",
                        "0xa",
                        "pulsechain",
                        "0x171",
                        "base",
                        "0x2105"
                    ],
                    "required": true
                },
                "token_address": {
                    "description": "The address of the token",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Get token holder summary",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/holders",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "ronin",
                        "0x7e4",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The token contract address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Identify the major holders of an ERC20 token and understand their ownership percentages",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/:token_address/owners",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                }
            },
            "variables": {
                "token_address": {
                    "description": "The address of the token contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the metadata for a list of token symbols (name, symbol, decimals, logo).",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/metadata/symbols",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "symbols": {
                    "description": "The symbols to get metadata for",
                    "type": "array",
                    "enum": null,
                    "required": true
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Get the metadata for a given token contract address (name, symbol, decimals, logo).",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/metadata",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "addresses": {
                    "description": "The addresses to get metadata for",
                    "type": "array",
                    "enum": null,
                    "required": true
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Get the pair stats by using pair address",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/pairs/:address/stats",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The pair address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the supported pairs for a specific token address.",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/:token_address/pairs",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "token_address": {
                    "description": "The address of the token contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the token price denominated in the blockchain's native token and USD. View supported exchanges here",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/price",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "chiliz",
                        "0x15b38",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "ronin",
                        "0x7e4",
                        "lisk",
                        "0x46f",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "include": {
                    "description": "If the result should contain the 24hr percent change",
                    "type": "string",
                    "enum": [
                        "percent_change"
                    ],
                    "required": false
                },
                "exchange": {
                    "description": "The factory name or address of the token exchange. View supported exchanges here",
                    "type": "string",
                    "enum": [
                        "uniswapv2",
                        "uniswapv3",
                        "sushiswapv2",
                        "pancakeswapv1",
                        "pancakeswapv2",
                        "pancakeswapv3",
                        "quickswap",
                        "quickswapv2",
                        "traderjoe",
                        "pangolin",
                        "spookyswap",
                        "vvs",
                        "mm finance",
                        "crodex",
                        "camelotv2"
                    ],
                    "required": false
                },
                "to_block": {
                    "description": "The block number from which the token price should be checked",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "max_token_inactivity": {
                    "description": "Exclude tokens inactive for more than the given amount of days",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "min_pair_side_liquidity_usd": {
                    "description": "Exclude tokens with liquidity less than the specified amount in USD. This parameter refers to the liquidity on a single side of the pair.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the token contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the stats for a erc20 token",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/stats",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the erc20 token",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get ERC20 token transactions from a contract ordered by block number in descending order.",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/transfers",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The maximum block number from which to get the transfers.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The start date from which to get the transfers (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get transfers up until this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the token contract",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get tokens with top gainers",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/discovery/tokens/top-gainers",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "mainnet",
                        "0x1",
                        "matic",
                        "0x89",
                        "polygon",
                        "bsc",
                        "binance",
                        "0x38",
                        "fantom",
                        "ftm",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "optimism",
                        "0xa",
                        "pulsechain",
                        "0x171",
                        "base",
                        "0x2105"
                    ],
                    "required": false
                },
                "min_market_cap": {
                    "description": "The minimum market cap in usd of a token",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "security_score": {
                    "description": "The minimum security score of a token",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "time_frame": {
                    "description": "The time frame used for price percent change ordering in response",
                    "type": "string",
                    "enum": [
                        "1h",
                        "1d",
                        "1w",
                        "1M"
                    ],
                    "required": false
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Get tokens with top losers",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/discovery/tokens/top-losers",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "mainnet",
                        "0x1",
                        "matic",
                        "0x89",
                        "polygon",
                        "bsc",
                        "binance",
                        "0x38",
                        "fantom",
                        "ftm",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "optimism",
                        "0xa",
                        "pulsechain",
                        "0x171",
                        "base",
                        "0x2105"
                    ],
                    "required": false
                },
                "min_market_cap": {
                    "description": "The minimum market cap in usd of a token",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "security_score": {
                    "description": "The minimum security score of a token",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "time_frame": {
                    "description": "The time frame used for price percent change ordering in response",
                    "type": "string",
                    "enum": [
                        "1h",
                        "1d",
                        "1w",
                        "1M"
                    ],
                    "required": false
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Get the top ERC20 tokens by market cap",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/market-data/erc20s/top-tokens",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {}
        }
    },
    {
        "description": "Retrieves a list of the top profitable wallets for a specific ERC20 token.",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/top-gainers",
        "spamDetection": false,
        "input": {
            "query": {
                "days": {
                    "description": "Timeframe in days for the profitability summary. Options include 'all', '7', '30', '60', '90' default is 'all'",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "mainnet",
                        "0x1",
                        "matic",
                        "0x89",
                        "polygon",
                        "bsc",
                        "binance",
                        "0x38",
                        "fantom",
                        "ftm",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "optimism",
                        "0xa",
                        "pulsechain",
                        "0x171",
                        "base",
                        "0x2105",
                        "linea",
                        "0xe708"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The ERC20 token address.",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get trending tokens",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/tokens/trending",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "fantom",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "optimism",
                        "0xa",
                        "pulsechain",
                        "0x171",
                        "base",
                        "0x2105",
                        "ronin",
                        "0x7e4",
                        "solana"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Returns volume statistics, buyer/seller counts, and transaction counts for token categories on a specific chain",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/volume/categories",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "ronin",
                        "0x7e4",
                        "pulse",
                        "0x171",
                        "solana"
                    ],
                    "required": false
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Returns volume statistics, active wallets, and total transactions for supported blockchain networks",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/volume/chains",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {}
        }
    },
    {
        "description": "Retrieve active ERC20 token approvals for the specified wallet address",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/approvals",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "he wallet address from which to retrieve active ERC20 token approvals",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get token balances for a specific wallet address and their token prices in USD.",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "to_block": {
                    "description": "The block number up to which the balances will be checked.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "token_addresses": {
                    "description": "The addresses to get balances for (optional)",
                    "type": "array",
                    "enum": null,
                    "required": false
                },
                "exclude_spam": {
                    "description": "Exclude spam tokens from the result",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "exclude_unverified_contracts": {
                    "description": "Exclude unverified contracts from the result",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "exclude_native": {
                    "description": "Exclude native balance from the result",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "max_token_inactivity": {
                    "description": "Exclude tokens inactive for more than the given amount of days",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "min_pair_side_liquidity_usd": {
                    "description": "Exclude tokens with liquidity less than the specified amount in USD. This parameter refers to the liquidity on a single side of the pair.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address from which token balances will be checked",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get token balances for a specific wallet address.",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/erc20",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "to_block": {
                    "description": "The block number from which the balances should be checked",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "token_addresses": {
                    "description": "The addresses to get balances for (optional)",
                    "type": "array",
                    "enum": null,
                    "required": false
                },
                "exclude_spam": {
                    "description": "Exclude spam tokens from the result",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address from which token balances will be checked",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get ERC20 token transactions ordered by block number in descending order.",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "contract_addresses": {
                    "description": "List of contract addresses of transfers",
                    "type": "array",
                    "enum": null,
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transactionsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The maximum block number from which to get the transactions.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The start date from which to get the transactions (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get the transactions up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the wallet",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Search for tokens based on contract address, token name or token symbol. Premium endpoint available as an add-on. Please contact support for access details.",
        "category": "Token-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/tokens/search",
        "spamDetection": false,
        "input": {
            "query": {
                "query": {
                    "description": "Search query - can be token address, token name or token symbol",
                    "type": "string",
                    "enum": null,
                    "required": true
                },
                "chains": {
                    "description": "The chain(s) to query",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Review contracts as spam or not spam",
        "category": "Utils",
        "method": "POST",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/contracts-review",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Get the cost and rate limit for each API endpoint.",
        "category": "Utils",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/info/endpointWeights",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {}
        }
    },
    {
        "description": "Get the current version of the Moralis Web3 API.",
        "category": "Utils",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/web3/version",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {}
        }
    },
    {
        "description": "Get the active chains for a wallet address.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/chains",
        "spamDetection": false,
        "input": {
            "query": {
                "chains": {
                    "description": "The chains to query.",
                    "type": "array",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "Wallet address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get native transactions and logs ordered by block number in descending order.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/verbose",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transactionsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The maximum block number from which to get the transactions.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The start date from which to get the transactions (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get the transactions up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "include": {
                    "description": "If the result should contain the internal transactions.",
                    "type": "string",
                    "enum": [
                        "internal_transactions"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the wallet",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the detailed defi positions by protocol for a wallet address.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/:protocol/positions",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "holesky",
                        "0x4268",
                        "polygon amoy",
                        "0x13882",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "linea sepolia",
                        "0xe705"
                    ],
                    "required": false
                }
            },
            "variables": {
                "addressprotocol": {
                    "description": "Wallet addressThe protocol to query",
                    "type": "stringstring",
                    "enum": [
                        "uniswap-v2",
                        "uniswap-v3",
                        "pancakeswap-v2",
                        "pancakeswap-v3",
                        "quickswap-v2",
                        "sushiswap-v2",
                        "aave-v2",
                        "aave-v3",
                        "fraxswap-v1",
                        "fraxswap-v2",
                        "lido",
                        "makerdao",
                        "eigenlayer"
                    ],
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the positions summary of a wallet address.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/positions",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "holesky",
                        "0x4268",
                        "polygon amoy",
                        "0x13882",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "linea sepolia",
                        "0xe705"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "Wallet address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the defi summary of a wallet address.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/summary",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "holesky",
                        "0x4268",
                        "polygon amoy",
                        "0x13882",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "linea sepolia",
                        "0xe705"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "Wallet address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the native balance for a specific wallet address.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/balance",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "to_block": {
                    "description": "The block number from which the balances should be checked",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address from which the native balance will be checked",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the native balances for a set of specific addresses",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/balances",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "to_block": {
                    "description": "The block number on which the balances should be checked",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "wallet_addresses": {
                    "description": "The addresses to get metadata for (max 25 addresses)",
                    "type": "array",
                    "enum": null,
                    "required": true
                }
            },
            "variables": {}
        }
    },
    {
        "description": "Get NFT collections owned by a given wallet address.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/nft/collections",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "token_counts": {
                    "description": "Should token counts per collection be included in the response?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "exclude_spam": {
                    "description": "Should spam NFTs be excluded from the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "include_prices": {
                    "description": "Should NFT last sale prices be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The wallet address of the owner of NFTs in the collections",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get trades of NFTs for a given wallet.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts/trades",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "arbitrum",
                        "0xa4b1",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa"
                    ],
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The block number to get the trades from",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The start date from which to get the transfers (format in seconds or datestring accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "The end date from which to get the transfers (format in seconds or datestring accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "nft_metadata": {
                    "description": "Should NFT metadata be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The owner wallet address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get NFTs owned by a given address.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/nft",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "format": {
                    "description": "The format of the token ID",
                    "type": "string",
                    "enum": [
                        "decimal",
                        "hex"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "exclude_spam": {
                    "description": "Should spam NFTs be excluded from the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "token_addresses": {
                    "description": "The non-fungible token (NFT) addresses to get balances for",
                    "type": "array",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "normalizeMetadata": {
                    "description": "The option to enable metadata normalization. Learn more about metadata normalization here.",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "media_items": {
                    "description": "Should preview media data be returned? Learn more about media items here.",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "include_prices": {
                    "description": "Should NFT last sale prices be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the wallet",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get all swap related transactions (buy, sell)",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/swaps",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page)",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The number of results to return",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "fromBlock": {
                    "description": "The minimum block number from which to get the token transactionsProvide the param 'fromBlock' or 'fromDate'If 'fromDate' and 'fromBlock' are provided, 'fromBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "toBlock": {
                    "description": "The block number up to which you want to get the token transactions from",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "fromDate": {
                    "description": "The starting date (format in seconds or datestring accepted by momentjs)Provide the param 'fromBlock' or 'fromDate'If 'fromDate' and 'fromBlock' are provided, 'fromBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "toDate": {
                    "description": "The ending date (format in seconds or datestring accepted by momentjs)Provide the param 'toBlock' or 'toDate'If 'toDate' and 'toBlock' are provided, 'toBlock' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                },
                "transactionTypes": {
                    "description": "Array of transaction types. Allowed values are 'buy', 'sell'",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The wallet address token-transactions are to be retrieved for.",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get token balances for a specific wallet address.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/erc20",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "to_block": {
                    "description": "The block number from which the balances should be checked",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "token_addresses": {
                    "description": "The addresses to get balances for (optional)",
                    "type": "array",
                    "enum": null,
                    "required": false
                },
                "exclude_spam": {
                    "description": "Exclude spam tokens from the result",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address from which token balances will be checked",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get native transactions ordered by block number in descending order.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transactionsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The maximum block number from which to get the transactions.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The start date from which to get the transactions (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get the transactions up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "include": {
                    "description": "If the result should contain the internal transactions.",
                    "type": "string",
                    "enum": [
                        "internal_transactions"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the wallet",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Retrieve the full transaction history of a specified wallet address, including sends, receives, token and NFT transfers, and contract interactions.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/history",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "polygon",
                        "0x89",
                        "bsc",
                        "0x38",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "chiliz",
                        "0x15b38",
                        "gnosis",
                        "0x64",
                        "base",
                        "0x2105",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "flow",
                        "0x2eb",
                        "ronin",
                        "0x7e4",
                        "lisk",
                        "0x46f",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transactionsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The maximum block number from which to get the transactions.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The start date from which to get the transactions (format in seconds or datestring accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get the transactions up to this date (format in seconds or datestring accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "include_internal_transactions": {
                    "description": "If the result should contain the internal transactions.",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "nft_metadata": {
                    "description": "If the result should contain the nft metadata.",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the wallet",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the net worth of a wallet in USD. We recommend to filter out spam tokens and unverified contracts to get a more accurate result.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/net-worth",
        "spamDetection": false,
        "input": {
            "query": {
                "chains": {
                    "description": "The chains to query.",
                    "type": "array",
                    "enum": null,
                    "required": false
                },
                "exclude_spam": {
                    "description": "Exclude spam tokens from the result",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "exclude_unverified_contracts": {
                    "description": "Exclude unverified contracts from the result",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "max_token_inactivity": {
                    "description": "Exclude tokens inactive for more than the given amount of days",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "min_pair_side_liquidity_usd": {
                    "description": "Exclude tokens with liquidity less than the specified amount in USD. This parameter refers to the liquidity on a single side of the pair.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The wallet address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get transfers of NFTs given the wallet and other parameters.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/nft/transfers",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a"
                    ],
                    "required": false
                },
                "contract_addresses": {
                    "description": "List of contract addresses of transfers",
                    "type": "array",
                    "enum": null,
                    "required": false
                },
                "format": {
                    "description": "The format of the token ID",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transfersProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "To get the reserves at this block number",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The date from where to get the transfers (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get transfers up until this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "include_prices": {
                    "description": "Should NFT last sale prices be included in the result?",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The wallet address of the sender or recipient of the transfers",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Retrieves a summary of wallet profitability based on specified parameters including optional token addresses.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/profitability/summary",
        "spamDetection": false,
        "input": {
            "query": {
                "days": {
                    "description": "Timeframe in days for the profitability summary. Options include 'all', '7', '30', '60', '90' default is 'all'.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "mainnet",
                        "0x1",
                        "matic",
                        "0x89",
                        "polygon",
                        "bsc",
                        "binance",
                        "0x38",
                        "fantom",
                        "ftm",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "optimism",
                        "0xa",
                        "pulsechain",
                        "0x171",
                        "base",
                        "0x2105",
                        "linea",
                        "0xe708"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The wallet address for which profitability summary is to be retrieved.",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Retrieves profitability information for a specific wallet address. Can be filtered by one or more tokens.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/profitability",
        "spamDetection": false,
        "input": {
            "query": {
                "days": {
                    "description": "Timeframe in days for which profitability is calculated, Options include 'all', '7', '30', '60', '90' default is 'all'.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "mainnet",
                        "0x1",
                        "matic",
                        "0x89",
                        "polygon",
                        "bsc",
                        "binance",
                        "0x38",
                        "fantom",
                        "ftm",
                        "0xfa",
                        "arbitrum",
                        "0xa4b1",
                        "optimism",
                        "0xa",
                        "pulsechain",
                        "0x171",
                        "base",
                        "0x2105",
                        "linea",
                        "0xe708"
                    ],
                    "required": false
                },
                "token_addresses": {
                    "description": "The token addresses list to filter the result with",
                    "type": "array",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The wallet address for which profitability is to be retrieved.",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get the stats for a wallet address.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/stats",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "Wallet address",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Retrieve active ERC20 token approvals for the specified wallet address",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/approvals",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "he wallet address from which to retrieve active ERC20 token approvals",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get token balances for a specific wallet address and their token prices in USD.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "to_block": {
                    "description": "The block number up to which the balances will be checked.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "token_addresses": {
                    "description": "The addresses to get balances for (optional)",
                    "type": "array",
                    "enum": null,
                    "required": false
                },
                "exclude_spam": {
                    "description": "Exclude spam tokens from the result",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "exclude_unverified_contracts": {
                    "description": "Exclude unverified contracts from the result",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page).",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "exclude_native": {
                    "description": "Exclude native balance from the result",
                    "type": "boolean",
                    "enum": [
                        "false",
                        "true"
                    ],
                    "required": false
                },
                "max_token_inactivity": {
                    "description": "Exclude tokens inactive for more than the given amount of days",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "min_pair_side_liquidity_usd": {
                    "description": "Exclude tokens with liquidity less than the specified amount in USD. This parameter refers to the liquidity on a single side of the pair.",
                    "type": "number",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address from which token balances will be checked",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Get ERC20 token transactions ordered by block number in descending order.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers",
        "spamDetection": false,
        "input": {
            "query": {
                "chain": {
                    "description": "The chain to query",
                    "type": "string",
                    "enum": [
                        "eth",
                        "0x1",
                        "sepolia",
                        "0xaa36a7",
                        "holesky",
                        "0x4268",
                        "polygon",
                        "0x89",
                        "polygon amoy",
                        "0x13882",
                        "bsc",
                        "0x38",
                        "bsc testnet",
                        "0x61",
                        "avalanche",
                        "0xa86a",
                        "fantom",
                        "0xfa",
                        "palm",
                        "0x2a15c308d",
                        "cronos",
                        "0x19",
                        "arbitrum",
                        "0xa4b1",
                        "gnosis",
                        "0x64",
                        "gnosis testnet",
                        "0x27d8",
                        "chiliz",
                        "0x15b38",
                        "chiliz testnet",
                        "0x15b32",
                        "base",
                        "0x2105",
                        "base sepolia",
                        "0x14a34",
                        "optimism",
                        "0xa",
                        "linea",
                        "0xe708",
                        "linea sepolia",
                        "0xe705",
                        "moonbeam",
                        "0x504",
                        "moonriver",
                        "0x505",
                        "moonbase",
                        "0x507",
                        "flow",
                        "0x2eb",
                        "flow-testnet",
                        "0x221",
                        "ronin",
                        "0x7e4",
                        "ronin-testnet",
                        "0x7e5",
                        "lisk",
                        "0x46f",
                        "lisk-sepolia",
                        "0x106a",
                        "pulse",
                        "0x171"
                    ],
                    "required": false
                },
                "contract_addresses": {
                    "description": "List of contract addresses of transfers",
                    "type": "array",
                    "enum": null,
                    "required": false
                },
                "from_block": {
                    "description": "The minimum block number from which to get the transactionsProvide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "to_block": {
                    "description": "The maximum block number from which to get the transactions.Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "from_date": {
                    "description": "The start date from which to get the transactions (any format that is accepted by momentjs)Provide the param 'from_block' or 'from_date'If 'from_date' and 'from_block' are provided, 'from_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "to_date": {
                    "description": "Get the transactions up to this date (any format that is accepted by momentjs)Provide the param 'to_block' or 'to_date'If 'to_date' and 'to_block' are provided, 'to_block' will be used.",
                    "type": "string",
                    "enum": null,
                    "required": false
                },
                "limit": {
                    "description": "The desired page size of the result.",
                    "type": "number",
                    "enum": null,
                    "required": false
                },
                "order": {
                    "description": "The order of the result, in ascending (ASC) or descending (DESC)",
                    "type": "string",
                    "enum": [
                        "ASC",
                        "DESC"
                    ],
                    "required": false
                },
                "cursor": {
                    "description": "The cursor returned in the previous response (used for getting the next page). Learn more on cursor pagination here.",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "address": {
                    "description": "The address of the wallet",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Resolve a specific address to its Unstoppable domain",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/resolve/:address/domain",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {
                "address": {
                    "description": "The address to be resolved",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Reverse resolve a given ETH address to its ENS domain.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/resolve/:address/reverse",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {
                "address": {
                    "description": "The address to be resolved",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Resolve a specific Unstoppable domain to its address.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/resolve/:domain",
        "spamDetection": false,
        "input": {
            "query": {
                "currency": {
                    "description": "The currency to query",
                    "type": "string",
                    "enum": null,
                    "required": false
                }
            },
            "variables": {
                "domain": {
                    "description": "The domain to be resolved",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    },
    {
        "description": "Resolve a specific ENS domain to its address.",
        "category": "Wallet-API",
        "method": "GET",
        "reference": "https://docs.moralis.io/web3-data-api/evm/reference/get-decoded-wallet-transaction",
        "url": "https://deep-index.moralis.io/api/v2.2/resolve/ens/:domain",
        "spamDetection": false,
        "input": {
            "query": {},
            "variables": {
                "domain": {
                    "description": "The domain to be resolved",
                    "type": "string",
                    "enum": null,
                    "required": true
                }
            }
        }
    }
]


export { moralisEndpoints }