---
title: Install Docker
hide_table_of_contents: false
---

#  Install docker

The [testnet Github repository](https://github.com/shamirlabs/diva-alpha-net) contains Docker compose files that can be run using [Docker](https://www.docker.com/). Keep in mind that currently we provide only `linux/amd64` images.

If you're still deciding which operating system to use, Ubuntu server 22.04 LTS is a common choice.

In order to install Docker, choose an option:

### Option 1: Follow the official Docker instructions

[Follow the official Docker instructions](https://docs.docker.com/engine/install/), available for multiple systems.

### Option 2: Command-line Docker installation

You can also use the following commands to install Docker in a Linux machine like Ubuntu|Debian|CentOS|Fedora:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

sudo groupadd docker
sudo usermod -aG docker $USER
```
