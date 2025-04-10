const activeEndpoints = {
    "Blockchain-API": [
        {
            "url": "https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash",
            "description": "Get the contents of a block given the block hash.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/dateToBlock",
            "description": "Get the closest block given the date.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash/verbose",
            "description": "Get the contents of a transaction by the given transaction hash.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/verbose",
            "description": "Get native transactions and logs ordered by block number in descending order.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/latestBlockNumber/:chain",
            "description": "Returns the latest block number for the given chain.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash",
            "description": "Get the contents of a transaction by the given transaction hash.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address",
            "description": "Get native transactions ordered by block number in descending order.",
            "enable": true
        }
    ],
    "DeFi-API": [
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/:protocol/positions",
            "description": "Get the detailed defi positions by protocol for a wallet address.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/positions",
            "description": "Get the positions summary of a wallet address.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/summary",
            "description": "Get the defi summary of a wallet address.",
            "enable": false
        }
    ],
    "Entity-API": [
        {
            "url": "https://deep-index.moralis.io/api/v2.2/entities/categories/:categoryId",
            "description": "Get Entities By Category",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/entities/:entityId",
            "description": "Retrieve detailed information about a specific entity by its ID",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/entities/categories",
            "description": "Get Entity Categories",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/entities/search",
            "description": "Search for entities, addresses and categories",
            "enable": false
        }
    ],
    "Get-Trending-NFTs": [
        {
            "url": "",
            "description": "",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/market-data/nfts/top-collections",
            "description": "Get the top NFT collections by market cap",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/market-data/nfts/hottest-collections",
            "description": "Get the top NFT collections by trading volume",
            "enable": true
        }
    ],
    "NFT-API": [
        {
            "url": "",
            "description": "",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address",
            "description": "Get NFTs for a given contract address, including metadata for all NFTs (where available).",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/getMultipleNFTs",
            "description": "Returns an array of NFTs specified in the request.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/stats",
            "description": "Get the stats for a nft collection address.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/metadata",
            "description": "Get the collection / contract level metadata for a given contract (name, symbol, base token URI).",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/price",
            "description": "Get the sold price for an NFT contract for the last x days (only trades paid in ETH).",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/transfers",
            "description": "Get transfers of NFTs for a given contract and other parameters.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price",
            "description": "Get floor price for a given contract.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/floor-price",
            "description": "Get floor price for a given token.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price/historical",
            "description": "Get historical floor price for a given contract.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id",
            "description": "Get NFT data, including metadata (where available), for the given NFT token ID and contract address.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/owners",
            "description": "Get owners of NFTs for a given contract.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price",
            "description": "Get the sold price for an NFT token for the last x days (only trades paid in ETH).",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/owners",
            "description": "Get owners of a specific NFT given the contract address and token ID.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/trades",
            "description": "Get trades of NFTs for a given contract and token ID.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts/trades",
            "description": "Get trades of NFTs for a given wallet.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/trades",
            "description": "Get trades of NFTs for a given contract and marketplace.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/traits/paginate",
            "description": "Get NFT traits for a given collection",
            "enable": false,
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/traits",
            "description": "Get NFT traits for a given collection",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/transfers",
            "description": "Get transfers of an NFT given a contract address and token ID.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/nfts-by-traits",
            "description": "Get NFTs by traits for a given contract.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/nft/collections",
            "description": "Get NFT collections owned by a given wallet address.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/nft/transfers",
            "description": "Get transfers of NFTs given the wallet and other parameters.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/nft",
            "description": "Get NFTs owned by a given address.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/metadata/resync",
            "description": "Resync the metadata for an NFT",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/traits/resync",
            "description": "Resync the NFT Trait for a given contract",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/sync",
            "description": "Initiates a sync of a previously non synced contract.",
            "enable": false
        }
    ],
    "Price-API": [
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/prices",
            "description": "Returns an array of token prices denominated in the blockchain's native token and USD for a given token contract address",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/price",
            "description": "Get the sold price for an NFT contract for the last x days (only trades paid in ETH).",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price",
            "description": "Get floor price for a given contract.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/floor-price",
            "description": "Get floor price for a given token.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price/historical",
            "description": "Get historical floor price for a given contract.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price",
            "description": "Get the sold price for an NFT token for the last x days (only trades paid in ETH).",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/pairs/:address/ohlcv",
            "description": "Get the OHLCV candle stick by using pair address",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/price",
            "description": "Get the token price denominated in the blockchain's native token and USD. View supported exchanges here",
            "enable": true
        }
    ],
    "Token-API": [
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/:token_address/pairs/stats",
            "description": "Get aggregated statistics across supported pairs of a token.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/discovery/tokens",
            "description": "Returns filtered tokens based on specified metrics and criteria.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/holders/historical",
            "description": "Get historical holder statistics for a specific ERC20 token address over a date range",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/tokens/analytics",
            "description": "Returns analytics data for multiple token addresses across different chains",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/prices",
            "description": "Returns an array of token prices denominated in the blockchain's native token and USD for a given token contract address",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/pairs/:address/ohlcv",
            "description": "Get the OHLCV candle stick by using pair address",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddress",
            "description": "Fetch the pair data of the provided token0+token1 combination.\nThe token0 and token1 options are interchangable (ie. there is no different outcome in \"token0=WETH and token1=USDT\" or \"token0=USDT and token1=WETH\")",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:pair_address/reserves",
            "description": "Get the liquidity reserves for a given pair address. Only Uniswap V2 based exchanges supported at the moment.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/pairs/:address/snipers",
            "description": "Get all snipers (wallets that quickly buy and sell tokens) for a specific token pair address.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/pairs/:address/swaps",
            "description": "Get all swap related transactions (buy, sell, add liquidity & remove liquidity)",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/swaps",
            "description": "Get all swap related transactions (buy, sell)",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/swaps",
            "description": "Get all swap related transactions (buy, sell)",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/volume/timeseries/:categoryId",
            "description": "Returns historical buy and sell volume data for a specific token category in time intervals",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/volume/timeseries",
            "description": "Returns historical volume data for chains in time intervals",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/tokens/analytics/timeseries",
            "description": "Retrieve timeseries volume data by token addresses",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics",
            "description": "Get analytics for a token by token address",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/discovery/token",
            "description": "Get token details",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/holders",
            "description": "Get token holder summary",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/:token_address/owners",
            "description": "Identify the major holders of an ERC20 token and understand their ownership percentages",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/metadata/symbols",
            "description": "Get the metadata for a list of token symbols (name, symbol, decimals, logo).",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/metadata",
            "description": "Get the metadata for a given token contract address (name, symbol, decimals, logo).",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/pairs/:address/stats",
            "description": "Get the pair stats by using pair address",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/:token_address/pairs",
            "description": "Get the supported pairs for a specific token address.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/price",
            "description": "Get the token price denominated in the blockchain's native token and USD. View supported exchanges here",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/stats",
            "description": "Get the stats for a erc20 token",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/transfers",
            "description": "Get ERC20 token transactions from a contract ordered by block number in descending order.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/discovery/tokens/top-gainers",
            "description": "Get tokens with top gainers",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/discovery/tokens/top-losers",
            "description": "Get tokens with top losers",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/market-data/erc20s/top-tokens",
            "description": "Get the top ERC20 tokens by market cap",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/erc20/:address/top-gainers",
            "description": "Retrieves a list of the top profitable wallets for a specific ERC20 token.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/tokens/trending",
            "description": "Get trending tokens",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/volume/categories",
            "description": "Returns volume statistics, buyer/seller counts, and transaction counts for token categories on a specific chain",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/volume/chains",
            "description": "Returns volume statistics, active wallets, and total transactions for supported blockchain networks",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/approvals",
            "description": "Retrieve active ERC20 token approvals for the specified wallet address",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens",
            "description": "Get token balances for a specific wallet address and their token prices in USD.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/erc20",
            "description": "Get token balances for a specific wallet address.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers",
            "description": "Get ERC20 token transactions ordered by block number in descending order.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/tokens/search",
            "description": "Search for tokens based on contract address, token name or token symbol. Premium endpoint available as an add-on. Please contact support for access details.",
            "enable": false
        }
    ],
    "Utils": [
        {
            "url": "https://deep-index.moralis.io/api/v2.2/contracts-review",
            "description": "Review contracts as spam or not spam",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/info/endpointWeights",
            "description": "Get the cost and rate limit for each API endpoint.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/web3/version",
            "description": "Get the current version of the Moralis Web3 API.",
            "enable": false
        }
    ],
    "Wallet-API": [
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/chains",
            "description": "Get the active chains for a wallet address.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/verbose",
            "description": "Get native transactions and logs ordered by block number in descending order.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/:protocol/positions",
            "description": "Get the detailed defi positions by protocol for a wallet address.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/positions",
            "description": "Get the positions summary of a wallet address.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/summary",
            "description": "Get the defi summary of a wallet address.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/balance",
            "description": "Get the native balance for a specific wallet address.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/balances",
            "description": "Get the native balances for a set of specific addresses",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/nft/collections",
            "description": "Get NFT collections owned by a given wallet address.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts/trades",
            "description": "Get trades of NFTs for a given wallet.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/nft",
            "description": "Get NFTs owned by a given address.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/swaps",
            "description": "Get all swap related transactions (buy, sell)",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/erc20",
            "description": "Get token balances for a specific wallet address.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address",
            "description": "Get native transactions ordered by block number in descending order.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/history",
            "description": "Retrieve the full transaction history of a specified wallet address, including sends, receives, token and NFT transfers, and contract interactions.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/net-worth",
            "description": "Get the net worth of a wallet in USD. We recommend to filter out spam tokens and unverified contracts to get a more accurate result.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/nft/transfers",
            "description": "Get transfers of NFTs given the wallet and other parameters.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/profitability/summary",
            "description": "Retrieves a summary of wallet profitability based on specified parameters including optional token addresses.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/profitability",
            "description": "Retrieves profitability information for a specific wallet address. Can be filtered by one or more tokens.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/stats",
            "description": "Get the stats for a wallet address.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/approvals",
            "description": "Retrieve active ERC20 token approvals for the specified wallet address",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens",
            "description": "Get token balances for a specific wallet address and their token prices in USD.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers",
            "description": "Get ERC20 token transactions ordered by block number in descending order.",
            "enable": false
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/resolve/:address/domain",
            "description": "Resolve a specific address to its Unstoppable domain",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/resolve/:address/reverse",
            "description": "Reverse resolve a given ETH address to its ENS domain.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/resolve/:domain",
            "description": "Resolve a specific Unstoppable domain to its address.",
            "enable": true
        },
        {
            "url": "https://deep-index.moralis.io/api/v2.2/resolve/ens/:domain",
            "description": "Resolve a specific ENS domain to its address.",
            "enable": true
        }
    ]
}


export { activeEndpoints };