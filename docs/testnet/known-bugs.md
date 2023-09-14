---
title: Known bugs
hide_table_of_contents: false
---

# Known bugs

## DVT consensus resiliency isn't fully implemented

The current version of Diva testnet don't implement the full consensus protections, which means distributed validators aren't as resilient as they should be, making them more prone to issues like slashing.

Full functionality is coming in future releases.

## Not receiving any validator key shares

The current Diva version doesn't require any collateral to receive validator key shares. You will start receiving them simply by remaining online. As new ETHs are staked into Diva, validators will be created, and you will have a chance to receive some of the new randomly assigned key shares.

You can see the currently network stats at [Divascan.io](https://divascan.io/). The amount "Buffered ETH" shows how many ETH are waiting to be staked into new validators, which will generate new key shares that your node might randomly receive.

If you'd like the network to create more validators, [deposit more ETH](https://stake.diva.community/#/) in the testnet!

## Report other issues

Please, report any other bugs in the [testnet Github repository](https://github.com/shamirlabs/diva-alpha-net/issues) or [in our Discord](https://discord.com/invite/diva).
