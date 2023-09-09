---
title: Install Diva
hide_table_of_contents: false
---

# Install Diva

Run the installation script by executing:

```bash
cd ~/diva-alpha-net
./run.sh
```

inside the `diva-alpha-net` folder, and select option `1. Install Diva`:

<div style={{textAlign: 'center'}}>
    <img src={require("./img/menu.png").default}  width="300"/>
</div>

If asked about overwriting the `.env` file, select `Yes`:

<div style={{textAlign: 'center'}}>
    <img src={require("./img/env.png").default}  width="360"/>
</div>

When asked about running your own Ethereum clients in this machine, select `Yes`:

<div style={{textAlign: 'center'}}>
    <img src={require("./img/clients.png").default}  width="270"/>
</div>

When asked about running grafana with prometheus, select `Yes`:

<div style={{textAlign: 'center'}}>
    <img src={require("./img/grafana.png").default}  width="270"/>
</div>

When asked, type the password that you will use to connect to your node:

<div style={{textAlign: 'center'}}>
    <img src={require("./img/password.png").default}  width="360"/>
</div>

When asked, your Discord username and your operator (testnet) address in the format `discordusername-operatoraddress`:

<div style={{textAlign: 'center'}}>
    <img src={require("./img/username.png").default}  width="360"/>
</div>

If everything goes well, you should see the following outcome:

<div style={{textAlign: 'center'}}>
    <img src={require("./img/running.png").default}  width="500"/>
</div>

## Register your node

You are ready to continue [here with the registration of your node](../register) using the Operator UI.
