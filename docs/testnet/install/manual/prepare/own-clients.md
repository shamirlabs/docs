---
title: "Option 1: Run Diva using your existing ETH clients"
hide_table_of_contents: false
---

# Run Diva and connect it to your Ethereum clients

If you already have an Ethereum client setup, this option is the recommended one for you.

If you're new to Ethereum validation, we recommend you start with the [all-in-one Diva with clients mode](new-clients), which will install the needed dependencies automatically.

## Configure Consensus and Execution endpoints

First, you **MUST** rename the file `.env.example` to `.env` and change the following values of the file:

Replace the value `ws://HOST_IP:PORT` of `EXECUTION_CLIENT_URL` with the WebSocket endpoint of your execution client.

```bash
EXECUTION_CLIENT_URL=ws://HOST_IP:PORT:PORT  # Change this (execution RPC WebSocket, geth example: ws://HOST_IP:PORT:8546)
```

Replace the value `http://HOST_IP:PORT` of `CONSENSUS_CLIENT_URL` with the REST API provider endpoint of your consensus client.

```bash
CONSENSUS_CLIENT_URL=http://HOST_IP:PORT  # Change this (consensus REST API, prysm example: http://HOST_IP:3500)
```

Replace the value `HOST_IP:PORT` of the `BEACON_RPC_PROVIDER` with the RPC provider endpoint of your consensus client.

```bash
BEACON_RPC_PROVIDER=HOST_IP:PORT # Change this (consensus RPC, prysm example: http://HOST_IP:4000)
```

### COMPOSE_FILE

The Diva Testnet repository comes with a few examples of docker compose files.

Replace the value `docker-compose.yml` of the `COMPOSE_FILE` with the name of the docker compose file that you want to use).

```bash
COMPOSE_FILE=docker-compose.yml # Change this (docker compose file name)
```

Once you have changed all the above values, continue configuring your node in [Secure your setup](../secure).
