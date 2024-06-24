import { buildConfig, NetworkConfig } from '../../network/network.utils';

export namespace ApeswapConfig {
  export const config: NetworkConfig = buildConfig(
    'apeswap',
    ['AMM'],
    [{ chain: 'binance-smart-chain', networks: ['mainnet'] }],
    'EVM'
  );
}
