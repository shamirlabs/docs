---
title: "Option 2: Run with you own ETH clients"
hide_table_of_contents: false
---

# Run Diva and connect it to your Ethereum clients

To configure the consensus and execution clients, you **MUST** rename the file `.env.example` to `.env` and change the following values of the file:

- Replace the value `ws://HOST_IP:PORT` of `EXECUTION_CLIENT_URL` with the WebSocket endpoint of your execution client.
  ```bash
  EXECUTION_CLIENT_URL=ws://HOST_IP:PORT:PORT  # Change this (execution RPC WebSocket, geth example: ws://HOST_IP:PORT:8546)
  ```

- Replace the value `http://HOST_IP:PORT` of `CONSENSUS_CLIENT_URL` with the REST API provider endpoint of your consensus client.

  ```bash
  CONSENSUS_CLIENT_URL=http://HOST_IP:PORT  # Change this (consensus REST API, prysm example: http://HOST_IP:3500)
  ```

- Replace the value `HOST_IP:PORT` of the `BEACON_RPC_PROVIDER` with the RPC provider endpoint of your consensus client.

  ```bash
  BEACON_RPC_PROVIDER=HOST_IP:PORT # Change this (consensus RPC, prysm example: http://HOST_IP:4000)
  ```

To securely configure the Diva client, you **SHOULD** change the following values of the `.env` file  as well (these steps are optional in testnet, but highly recommended):

- Replace the value `changeThis` of the `DIVA_API_KEY` with the password that you want to use to login to your Diva node API. You must use this password later when accessing the Operator UI.

  ```bash
  DIVA_API_KEY=changeThis  # Change this (API key for the operator UI)
  ```

- Replace the value `vaultPassword` of the `DIVA_VAULT_PASSWORD` with the password that you want to use to login to your Diva node API. This password is used to encrypt the database of your node and could be useful to restore your node in the future. Be aware that once this parameter is set during the bootstraping of the node, you won't be able to change it until such functionality is implemented.

  ```bash
  DIVA_VAULT_PASSWORD=vaultPassword # Change this (password for the encrypted vault)
  ```

- Replace the value `username-address` of the `TESTNET_USERNAME` with the user ID that you want to use in the testnet (for instance, `prada-0x0000000000000000000000000000000000000000`).

  ```bash
  TESTNET_USERNAME=username-address  # Change this (recommended to username of the operator and ethereum address)
  ```
  
- Replace the value `docker-compose.yml` of the `COMPOSE_FILE` with the name of the docker compose file that you want to use).

  ```bash
  COMPOSE_FILE=docker-compose.yml # Change this (docker compose file name)
  ```

Once you have changed all the above values, continue configuring your node in [Configure ports and run](configure).
