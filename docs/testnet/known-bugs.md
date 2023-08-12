---
title: Known bugs
hide_table_of_contents: false
---

# Known bugs

- When using the file `docker-compose-with-clients-metrics.yml` or `docker-compose-with-clients.yml`, the Diva client will wait until the Ethereum nodes are synced without being able to start. If that happens, the Diva Operator UI might show a `Fetching your node identity...` message that never resolves. Please, restart the Diva client after your Ethereum clients are synced to solve the issue.

Please, report any other bugs in the [testnet Github repository](https://github.com/shamirlabs/diva-alpha-net/issues) or [in our Discord](https://discord.com/invite/diva).
