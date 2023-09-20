---
title: Update Diva
hide_table_of_contents: false
---

#  Update Diva manually

 Manual migration/update is always a useful option for any version of diva-alpha-net. For early testnet versions, automatic scripts are not backward compatible, and a manual upgrade is required. 

### 1. Get the new version of diva-alpha-net 

Stop the current docker-compose file navigating to the original diva folder:

```bash
cd ~/diva-alpha-net
docker compose down 
```

If any file other than `docker-compose.yml` was used (as for example `docker-compose-with-clients-metrics.yml`), it can be specified as follows: 

```bash
docker compose -f docker-compose-with-clients-metrics.yml down 
```

Create a backup of the whole directory where the diva-alpha-net was running by moving it to another folder:

```bash
mv ~/diva-alpha-net ~/diva-alpha-net-bak
```

And then, clone a fresh diva-aplha-net to the parent folder:

```bash
git clone https://github.com/shamirlabs/diva-alpha-net ~/diva-alpha-net
```

Initialize a new `.env` from the provided `.env.example` template file:
```bash
cp ~/diva-alpha-net/.env.example ~/diva-alpha-net/.env 
```

### 2. Migrate the data

Copy the `.diva` folder from the `~/diva-alpha-net-bak` folder to the new folder `~/diva-alpha-net`:

```bash
cp -r ~/diva-alpha-net-bak/.diva ~/diva-alpha-net/.diva
```

Look for the value of the `DIVA_VAULT_PASSWORD` and paste it in the `.env` file in the new folder.

Depending on the version used, the `DIVA_VAULT_PASSWORD` can be at:
- As an environment variable in any of the following docker compose files:
  - `docker-compose.yml`
  - `docker-compose-with-clients.yml`
  - `docker-compose-with-clients-metrics.yml`
- In latest versions, it can be found in the `.env` file.

### 3. Done

You must stop and delete all the containers before starting the services again. 

```bash
docker compose down
docker compose up -d
```

Diva logs can be checked using:

```bash
docker logs diva -f
```