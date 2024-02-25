// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import '../libraries/Tick.sol';

contract TickEchidnaTest {
    function checkTickSpacingToParametersInvariants(int24 tickSpacing) external pure {
        require(tickSpacing <= TickMath.MAX_TICK);
        require(tickSpacing > 0);

        int24 minTick = (TickMath.MIN_TICK / tickSpacing) * tickSpacing;
        int24 maxTick = (TickMath.MAX_TICK / tickSpacing) * tickSpacing;

        uint128 maxLiquidityPerTick = Tick.tickSpacingToMaxLiquidityPerTick(tickSpacing);

        // symmetry around 0 tick
        assert(maxTick == -minTick);
        // positive max tick
        assert(maxTick > 0);
        // divisibility
        assert((maxTick - minTick) % tickSpacing == 0);

        int256 numTicksInt256 = int256((maxTick - minTick) / tickSpacing) + 1;
        // max liquidity at every tick is less than the cap
        require(numTicksInt256 > 0, 'Number of ticks must be positive');
        uint256 numTicks = uint256(numTicksInt256);
        assert(uint256(maxLiquidityPerTick) * numTicks <= type(uint128).max);
    }
}
