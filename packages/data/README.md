# Data

Package holding `reverse-djed` custom on-chain data types.

TODO (test before marking as complete):

- [x] Pool datum (the datum stored in the UTxO that holds the `DjedStableCoinNFT` token).
- [x] Pool UTxO spend redeemer.
- [x] Order datum (the datum stored in UTxOs that hold a `DjedOrderTicket` token).
- [x] Order UTxO spend redeemer.
- [x] `DjedOrderTicket` token mint redeemer.
- [x] Oracle datum (the datum stored in the UTxO that holds the `DjedOracleNFT` token).
- [ ] Figure out what unknown fields mean in the various datum.
- [ ] Support mint both and burn both (`actionFields` and potentially redeemer?).
- [ ] Support enterprise addresses (no stake credential).
- [ ] Support script addresses (?).
- [ ] Backtest against real data (?).
