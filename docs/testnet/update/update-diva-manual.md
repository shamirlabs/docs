---
title: Update Diva
hide_table_of_contents: false
---

#  Update Diva manually

For the first versions of the diva-alpha-net repository, or if you are having issues with the automatic update from the section above, you can always use the manual update/migration:
- Diva DB
- Diva DB Password
- Your Ethereum client folders (optional)

### 1. Stop the current diva-alpha-net

Stop your current docker-compose file from your original diva folder (diva-alpha-net):

```bash
docker compose down 
```

If you used other than docker-compose.yml as 'docker-compose-with-clients-metrics.yml' you can specify it: 

```bash
docker compose -f docker-compose-with-clients-metrics.yml down 
```

### 2. Create a new diva-alpha-net

Create a fresh Diva (in a different folder of your choice):
Assuming you are in your current diva folder, let's move to the parent directory
```bash
cd ..
```
And clone a fresh diva folder within a new folder name "divaAlpha"
```bash
git clone https://github.com/shamirlabs/diva-alpha-net/ divaAlpha 
```

### 3. Copy the database

Copy the .diva folder from your original diva-alpha-net folder and paste it in the new one (divaAlpha)

Assuming original folder name is diva-alpha-net and new is divaAlpha:

```bash
cp -r ./diva-alpha-net/.diva ./divaAlpha/.diva
```

### 4. Copy the database password

Look for the value of the DIVA_VAULT_PASSWORD and paste it in the .env file in the new folder (divaAlpha)

The DIVA_VAULT_PASSWORD depending on the version you used can be in:
    - The docker compose file you used, as environment variable within the diva service 
    - In latest versions, will be in the .env file

### 5. Copy the Ethereum clients data

Optionally as in point 3 you can copy the /geth and /prysm folders from the original diva folder to the new one so you don't need for the Ethereum clients to sync:

```bash
cp -r ./diva-alpha-net/geth ./divaAlpha/geth && cp -r ./diva-alpha-net/prysm ./divaAlpha/prysm

```

### 6. Done

Check that your diva working fine by the web or the logs:

```bash
docker logs diva -f
```

And feel free to delete the original diva folder (diva-alpha-net)