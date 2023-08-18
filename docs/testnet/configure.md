---
title: 4. Configure ports & run
hide_table_of_contents: false
---

# Configure ports and run

:::caution Important Security Notice
Docker may expose ports of your machine to the public. Please be aware that this setup does not implement any security measures. Running this testnet in an unprotected environment may expose your systems and data to potential risks. It is strongly recommended to deploy Diva in a secure and controlled network environment.
:::


### Configure ports

Your Diva client needs to talk to other nodes in order to perform signatures, receive duties, and find peers. For that reason:

- The port `5050` is used for P2P communication and **MUST** be open and exposed in your machine.
- The port `30000` is used to access the swagger API of your node and you **SHOULD** keep it open if you want to use the Operator UI.
- The port `80` is used by the Operator UI and you **SHOULD** open it if you want to serve the Operator UI.

You could also run the Operator UI locally on your laptop and connect to the port `30000` of your Diva client using a VPN, keeping access to your node as constrained as possible.

### Run Diva with Docker compose
Finally, to run your node, execute the following command:

```bash
# Run the docker compose file
docker compose up -d
```

Your node should be up and running, ready to continue the setup using the Operator UI as described in [Register your node](/testnet/setup).
