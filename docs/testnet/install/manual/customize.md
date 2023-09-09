---
title: Customize your setup
hide_table_of_contents: false
---

# Customize your setup

:::info
These steps are optional in testnet, but highly recommended.
:::

To securely configure the Diva client, you **SHOULD** change the following values of the `.env` file as well.

### DIVA_API_KEY

Your Diva API key is the password you'll use to log into your Diva node API. You can choose any password you'd like.

Replace the value `changeThis` of the `DIVA_API_KEY` with the password that you want to use.

```bash
DIVA_API_KEY=changeThis # Change this (API key for the operator UI)
```

### DIVA_VAULT_PASSWORD

This password is used to encrypt the database of your node and could be useful to restore your node in the future.

Be aware that once this parameter is set during the bootstraping of the node, you won't be able to change it until such functionality is implemented. For that reason we recommend that you back it up in a safe place.

Replace the value `vaultPassword` of the `DIVA_VAULT_PASSWORD` with the password you'd like to use.

```bash
DIVA_VAULT_PASSWORD=vaultPassword # Change this (password for the encrypted vault)
```

### TESTNET_USERNAME

Configuring a username for the logs helps developers debug issues you might find. You can choose any username you'd like, but we recommend you use the Discord username so we can reach out to you more efficiently if necessary..

Replace the value `discordusername-operatoraddress` of the `TESTNET_USERNAME` with the discord username that you want to use in the testnet and your operator address (for instance, `prada-0x0000000000000000000000000000000000000000`). This information is only available to the Shamir Labs development team and is not publicly available. It could be used to contact testnet participants if the team needs debugging information (such as logs), a database file, or to communicate an important patch/update.

Your username has no functional importance and is purely to label your node with a human-readable name.

```bash
TESTNET_USERNAME=discordusername-operatoraddress # Change this (recommended to discord username and ethereum address of the operator)
```

