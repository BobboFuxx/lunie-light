export default {
  id: 'prysm-devnet-1', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Prysm Hub',
  description:
    'Prysm is an Interchain Security Hub.',
  logo: `logo.svg`,
  website: 'https://prysm.network',
  apiURL: 'https://prysm-testnet-api.polkachu.com', // use `npx lcp --proxyUrl http://https://prysm-testnet-api.polkachu.com:1317`
  rpcURL: 'https://prysm-testnet-rpc.polkachu.com',
  stakingDenom: 'uprysm',
  coinLookup: [
    {
      viewDenom: 'PRYSM',
      chainDenom: 'uprysm',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/prysm.png`,
    },
  ],
  addressPrefix: 'prysm',
  validatorAddressPrefix: 'prysmvaloper',
  validatorConsensusaddressPrefix: 'prysmvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `21 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'PRYSM',
          amount: 0.001,
        },
      ],
    },
  },
  icon: ``,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
