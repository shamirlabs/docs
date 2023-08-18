---
title: 1. Install Docker
hide_table_of_contents: false
---

#  Install docker

The [testnet Github repository](https://github.com/shamirlabs/diva-alpha-net) contains docker compose files that can be run using [docker](https://www.docker.com/). Keep in mind that currently we provide only `linux/amd64` images.

If you're still deciding which operating system to use, Ubuntu server 22.04 LTS is a common choice.

In order to install Docker, choose an option:

### Option 1: Follow the official Docker instructions

[Follow the official Docker instructions](https://docs.docker.com/engine/install/), available for multiple systems.

### Option 2: Command-line Docker installation

You can also use the following commands to install Docker in a Linux machine like Ubuntu:

```bash
#!/bin/bash

sudo apt update -y
sudo apt upgrade -y

sudo apt-get install ca-certificates curl gnupg -y

sudo install -m 0755 -d /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update -y

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

sudo groupadd docker
sudo usermod -aG docker $USER
```