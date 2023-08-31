---
title: 2. Download Diva
hide_table_of_contents: false
---

# Download Diva package

Type the following commands in the CLI of a UNIX based system to clone this repository to your local machine:

   ```bash
   # Clone the repository
   git clone https://github.com/shamirlabs/diva-alpha-net

   # Change directory
   cd diva-alpha-net/
   ```

To run a Diva node autonomously, you need to connect the Diva docker container to an execution client, a consensus client and a validator. Depending on your current setup, continue to one of the following options:

- If you already have Ethereum clients running in the Goerli testnet, continue to [Option 1: Run with your existing ETH clients](prepare/own-clients).
- If you don't have Ethereum clients running in the Goerli testnet, continue to [Option 2: Run the all-in-one Diva client + ETH clients](prepare/new-clients).

Take into account that both options contain telemetry images to help us monitor and improve the testnet.
