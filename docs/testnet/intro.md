---
title: Testnet instructions
description: This introduction details the process of how to participate in the Diva Alpha testnet
hide_table_of_contents: false
---

The Diva Operator testnet allows you to:

- Run your own Diva node to perform Distributed Validation.
- Test different client combinations and edge cases.
- Help stress test the system in preparation for Mainnet.

Before you get started:

- [Read the general Diva docs](https://docs.staking.foundation/) (external)
- [Read the Operator docs](https://docs.staking.foundation/operators) (external)

Once you're ready, you can set up your node by:

0. [Choosing your hardware](hardware/intro)
1. [Install Docker](install-docker)
2. [Install Diva](prepare)
3. [Secure your setup](secure)
3. [Configure ports & run](configure)
4. [Register your node](setup)

If you're having any issues, check the [known bugs](known-bugs) or [join us on Discord for live support](https://discord.gg/diva)!

### How does it work?

The Diva Testnet repository is hosted in https://github.com/shamirlabs/diva-alpha-net.

This repository contains the necessary compose files to participate in the Diva alpha testnet using the docker images available at https://hub.docker.com/u/diva.

:::caution Important Security Notice
Docker may expose ports of your machine to the public. Please be aware that this setup does not implement any security measures. Running this testnet in an unprotected environment may expose your systems and data to potential risks. It is strongly recommended to deploy Diva in a secure and controlled network environment.
:::
