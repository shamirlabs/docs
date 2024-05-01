---
title: Testnet instructions
description: This introduction details the process of how to participate in the Diva Alpha testnet
hide_table_of_contents: false
---

:::caution Important Security Notice
This testnet runs on Docker containers, which may expose your machine's ports to the public. Please be aware that this setup does not implement any security measures. Running this testnet in an unprotected environment may expose your systems and data to potential risks. Deploying Diva in a secure and controlled network environment is strongly recommended.
:::

The Diva Operator testnet allows you to:

- Run your own Diva node to participate in the creation of Distributed Validators.
- Test different client combinations and the performance of validators.
- Help stress test the system in preparation for Mainnet.

Before you get started, be sure to check the [Hardware requirements](hardware/intro). If your hardware is compatible, you can continue following the instructions to [Run a node](install/download).

If you face any issues, check the [known bugs](known-bugs) or ask in the `#operator-testnet` channel of the [Diva community Discord](https://discord.gg/nektarnetwork).

### How does it work?

The Diva Testnet repository is located at https://github.com/shamirlabs/diva-alpha-net.

This repository contains the necessary compose files to participate in the Diva alpha testnet using the docker images available at https://hub.docker.com/u/diva.
