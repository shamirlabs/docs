---
title: Update Diva
hide_table_of_contents: false
---

#  Update Diva manually

 Manual migration/update is always a useful option for any version of diva-alpha-net. For the earliest versions of the diva-alpha-net it is needed for the upload since automatic scripts are not backward compatible. 

### 1. Get the new version of diva-alpha-net 

Stop the current docker-compose file from the original diva folder:

```bash
cd ~/diva-alpha-net
docker compose down 
```

If other file than 'docker-compose.yml' was used, as 'docker-compose-with-clients-metrics.yml' it can be specified as bellow: 

```bash
docker compose -f docker-compose-with-clients-metrics.yml down 
```

Create a backup for the whole directory where the diva-alpha-net was running from:
```bash
mv ~/diva-alpha-net ~/diva-alpha-net-bak
```

And then create a fresh diva-aplha-net folder:

```bash
cd ~
git clone https://github.com/shamirlabs/diva-alpha-net/  
```

Start diva so a new .env file is generate
```bash
cd ~/diva-alpha-net
docker compose up -d
```

### 2. Migrate the data

Copy the .diva folder from the diva-alpha-net-bak folder and paste it in the new one

```bash
cp -r ./diva-alpha-net-bak/.diva ./diva-alpha-net/.diva
```

Look for the value of the ``DIVA_VAULT_PASSWORD`` and paste it in the ``.env`` file in the new folder

The ``DIVA_VAULT_PASSWORD`` depending on the version used can be in:
 - The docker compose file, as environment variable within the diva service, it could any of the following:
        - docker-compose.yml
        - docker-compose-with-clients.yml
        - docker-compose-with-clients-metrics.yml
- In latest versions, it can be found in the ``.env`` file

Optionally the /geth and /prysm folders can be copied from the original folder to the new one so Ethereum clients will remain in the same syncing state for the new diva-alpha-net as they were before in the old one:

```bash
cp -r ./diva-alpha-net-bak/geth ./diva-alpha-net/geth && cp -r ./diva-alpha-net-bak/prysm ./diva-alpha-net/prysm

```

### 3. Done

Since new environment variables has been set, it is needed to stop and delete all the containers and then, start them again:

```bash
docker compose down
docker compose up -d
```

Diva logs can be checked using:

```bash
docker logs diva -f
```