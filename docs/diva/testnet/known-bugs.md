---
title: Known bugs
hide_table_of_contents: false
---

# Known bugs

## Stuck at "Fetching your node identity"

When using the file `docker-compose-with-clients-metrics.yml` or `docker-compose-with-clients.yml`, the Diva client will wait until the Ethereum nodes are synced without being able to start. If that happens, the Diva Operator UI might show a `Fetching your node identity...` message that never resolves. Please, restart the Diva client after your Ethereum clients are synced to solve the issue.

## Not receiving any validator key shares

The current Diva version doesn't require any collateral to receive validator key shares. You will start receiving them simply by remaining online. As new ETHs are staked into Diva, validators will be created, and you will have a chance to receive some of the new randomly assigned key shares.

You can see the current network stats at [Divascan.io](https://divascan.io/).


## Report other issues

Please, report any other bugs in the [testnet Github repository](https://github.com/shamirlabs/diva-alpha-net/issues) or [in our Discord](https://discord.gg/nektarnetwork).
