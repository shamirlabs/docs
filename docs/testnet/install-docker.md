---
title: Install docker
hide_table_of_contents: false
---

#  Install docker

The [testnet Github repository](https://github.com/shamirlabs/diva-alpha-net) contains docker compose files that can be run using [docker](https://www.docker.com/). Please, [install docker](https://docs.docker.com/engine/install/) first if you want to join the Diva alpha net. Keep in mind that currently we provide only `linux/amd64` images.

You can also use the following commands to install docker in a linux machine:

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