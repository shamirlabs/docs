---
title: Known bugs
hide_table_of_contents: false
---

# Known bugs

## Stuck at "Fetching your node identity"

When using the file `docker-compose-with-clients-metrics.yml` or `docker-compose-with-clients.yml`, the Diva client will wait until the Ethereum nodes are synced without being able to start. If that happens, the Diva Operator UI might show a `Fetching your node identity...` message that never resolves. Please, restart the Diva client after your Ethereum clients are synced to solve the issue.

## Not receiving any validator key shares

The current Diva version doesn't require any collateral to receive validator key shares. You will start receiving them simply by remaining online. As new ETHs are staked into Diva, validators will be created, and you will have a chance to receive some of the new randomly assigned key shares.

You can see the currently network stats at [Divascan.io](https://divascan.io/).

However, as of Aug 21st, there is [a concurrency issue preventing the creation of new validators](https://discord.com/channels/1041618287500460083/1139972545144160256/1142489182023991307).

A new Diva client release will be released soon fixing this bug. Please follow [#testnet-announcements on Discord](https://discord.com/channels/1041618287500460083/1139972545144160256) to know once the new release is out!

## Port issues 

After the installation of the Diva Client is complete, some issues with ports may occur, especially those related to ports 30000 and 5050. 
For more information, please refer to the following link [Diva Client installation and configuration documentation](https://docs.shamirlabs.org/diva/testnet/install/manual/configure/).

## "Not-registered" errors message on the Operator UI 

![notregistered](https://github.com/BitcoinVida/DivaDocs/blob/nikomybranch/docs/img/notregistered.png)


If your node status appears as 'not-registered', it indicates that the node is still syncing. Please wait for the process to complete.
This process may take up to 24 hours.

## Switch to the correct account

![switchaccount](https://github.com/BitcoinVida/DivaDocs/blob/nikomybranch/docs/img/switchaccount.png)


Your Node is still syncing, a process that typically may take up to 24 hours. After that, this message will disappear.

## Negative rewards 

![negativerewards](https://github.com/BitcoinVida/DivaDocs/blob/nikomybranch/docs/img/negativerewards.png)

Negative rewards occur because many nodes are down, which consequently leads to the downtime of numerous validators.
For more information and to follow their performance, visit [Divascan.io](https://divascan.io/).

## Repository Entity Already Exists 

![repositoryexists](https://github.com/BitcoinVida/DivaDocs/blob/nikomybranch/docs/img/repositoryexists.png)

When reinstalling the node, operators may encounter conflicts or issues due to the previous installation.
To resolve this issue, it is necessary to delete all directories and start the installation process from scratch. 
**Important:** Be sure to backup your node identity before proceeding. Without this backup, you will not be able to restore your node.

## Report other issues

Please, report any other bugs in the [testnet Github repository](https://github.com/shamirlabs/diva-alpha-net/issues) or [in our Discord](https://discord.com/invite/diva).
