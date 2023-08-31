---
title: Known bugs
hide_table_of_contents: false
---

# Known bugs

## Stuck at "Fetching your node identity"

When using the file `docker-compose-with-clients-metrics.yml` or `docker-compose-with-clients.yml`, the Diva client will wait until the Ethereum nodes are synced without being able to start. If that happens, the Diva Operator UI might show a `Fetching your node identity...` message that never resolves. Please, restart the Diva client after your Ethereum clients are synced to solve the issue.

## Not receiving any validator key shares

The current Diva version doesn't require any collateral to receive validator key shares. You will start receiving them simply by remaining online. As new ETH is staked into Diva, validators will be created and you will have a chance to randomly receive some of the new key shares.

You can see the currently network stats at [Divascan.io](https://divascan.io/).

However, as of Aug 21st, there is [a concurrency issue preventing the creation of new validators](https://discord.com/channels/1041618287500460083/1139972545144160256/1142489182023991307).

A new Diva client release will be released soon fixing this bug. Please follow [#testnet-announcements on Discord](https://discord.com/channels/1041618287500460083/1139972545144160256) to know once the new release is out!


## Report other issues

Please, report any other bugs in the [testnet Github repository](https://github.com/shamirlabs/diva-alpha-net/issues) or [in our Discord](https://discord.com/invite/diva).
