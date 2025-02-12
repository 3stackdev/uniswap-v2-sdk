import { Percent } from '@uniswap/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0xbA831e62ac14d8500cEF0367b14F383d7b1B1b0A' // '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export const INIT_CODE_HASH = '0xeefbb4c3f56b837de48a6b913e2ef96d35bd565243e835b9d18f1b9bff43b494' // '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)
