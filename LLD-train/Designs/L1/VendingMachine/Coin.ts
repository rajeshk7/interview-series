import CoinType from './CoinType';

class Coin {
    private static coinValueMap = new Map<CoinType, number>();
    private coinType: CoinType;

    constructor(coinType: CoinType) {
        Coin.coinValueMap.set(CoinType.PENNY, 1);
        Coin.coinValueMap.set(CoinType.NICKEL, 5);
        Coin.coinValueMap.set(CoinType.DIME, 10);
        Coin.coinValueMap.set(CoinType.QUARTER, 25);

        this.coinType = coinType;
    }

    getValue() {
        return this.coinType ? Coin.coinValueMap.get(this.coinType) : 0;
    }
}

export default Coin;