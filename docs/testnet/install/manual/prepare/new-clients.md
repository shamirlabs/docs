---
title: "Option 2: All-in-one Diva with ETH clients"
hide_table_of_contents: false
---

# Run Diva with Ethereum clients and metrics from scratch

If you don't have Ethereum clients running in the Goerli testnet yet, this option is for you.

It is simpler to set up, although it will take a few hours for your Ethereum clients to sync.

## Setup

First, you rename the file `.env.example` to `.env` and change the following values of the file:

```bash
COMPOSE_PROFILES=clients,metrics,telemetry

EXECUTION_CLIENT_URL=ws://geth:8546
CONSENSUS_CLIENT_URL=http://beacon:3500
BEACON_RPC_PROVIDER=beacon:4000
```

This file is preconfigured to install the necessary Ethereum clients as dependencies. It contains:

- [Diva client](https://hub.docker.com/r/diva/diva) written in Golang
- [Reloader script](https://hub.docker.com/r/diva/reloader) service that syncs the public keys between the validator client and Diva
- [Diva Operator](https://hub.docker.com/r/diva/operator-ui) web UI for the Diva client API
- [Geth](https://github.com/ethereum/go-ethereum) execution client
- [Prysm](https://github.com/prysmaticlabs/prysm) consensus and validator clients
- [Prometheus](https://prometheus.io/), [Grafana](https://grafana.com/), [Jaeger](https://www.jaegertracing.io/) and [Vector](https://vector.dev/) for monitoring the testnet.

You **SHOULD** first change the recommended values described in [Option 1: Run with you own ETH clients](own-clients) in the `.env` file (you don't need to change the endpoints configuration). Continue configuring your node in [Configure ports and run](../configure).

If you are running your node inside a local network (e.g. you are a home staker), you **SHOULD** make sure to forward the P2P ports of the Execution and Consensus clients to your host machine. For Geth and Prysm, you should forward the ports `30303/tcp`, `30303/udp`, and `13000/tcp`. This is in addition to forwarding the Diva port `5050/tcp`. This is not relevant for cloud servers.
