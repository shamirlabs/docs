---
title: Choosing hardware
description: This page explains how to choose staking hardware
hide_table_of_contents: false
---

If you don't want to think too deeply about your hardware, these recommendations are a good place to start:

1. CPU: The latest generation of Intel i3 or better
2. RAM: 32GB is more than enough
3. SSD: 4TB NVMe that **HAS** a DRAM cache and is **NOT** QLC but instead TLC, SLC, or MLC

These requirements go for both home stakers who run a physical node, as well as to those using cloud services.

## CPU requirements

Ethereum validators are not very computationally intensive, so you do not need a very powerful processor. Choosing an overpowered processor will not improve your staking rewards, and it will probably increase the energy consumption of your node. The most important thing to know about CPUs is that newer ones are almost always better than older ones. In fact a more "powerful" Intel i5 from 2010 will underperform a 2022 Intel i3.

If you already have a CPU and want to know if it can handle running Ethereum validators:

1. Check that it has at least 4 threads
2. Check that it supports the BMI2 extension. Most do, but budget lines like Intel Celeron often do not. This does not apply to ARM processors.

If you are buying a new CPU:

1. The latest generation of Intel i3 (or AMD equivalent) or better is more than enough
2. If you want to be sure, check the threads and BMI2 mentioned above

## RAM requirements

The amount of RAM you need depends a bit on which specific Ethereum clients you are using. in principle:

1. 8GB can run some combinations of clients, but it is not recommended
2. 16GB is enough to run all combinations of clients
3. 32GB is more than enough, and allows for extra caching in some clients (which improves long term disk space usage)

## SSD requirements

**This is the most important thing about your node.** Or at least the thing it is easiest to make mistakes with. Ethereum nodes do a lot of reading and writing to the storage drive, so it is essential to have a highly performant drive. The Diva recommendation is to use a drive that:

1. Is an M2 NVMe drive
2. Has a DRAM cache
3. Is not QLC, but instead TLC, SLC, or MLC. This refers to the storage technology used, QLC is cheaper but too slow for Ethereum nodes
4. Is at least 2TB in size, but 4TB is recommended so you do not have fewer worries in your long term maintenance

Do you have a drive and want to check if it is fast enough? On a Linux machine, can use the `fio` utility like so:

```bash

# Install fio, we're using Ubuntu here
sudo apt install fio

# Move to a folder on the drive you want to test
cd /mnt/nvme-drive

# Run the test
sudo fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=test --bs=4k --iodepth=64 --size=4G --readwrite=randrw --rwmixread=75
```

Under the `test:` area you will see the results, you want to make sure that your drive exceeds the following metrics:

- 15k IOPS read or more
- 5k IOPS write or more
- 60 MiB/s read bandwidth (BW) or more
- 20 MiB/s write bandwidth (BW) or more

## Common choices

While the Ethereum community is in favor of a diverse set of staking hardware, there are some common choices that many people use. If you are a technically sophisticated staker, consider using more esoteric hardware choices to add to the robustness of the network. This will not increase your rewards of course, but it will offer you a fun challenge, and protect the network in case of black swan events.

The following are components that are very common choices for staking nodes:

- Ubuntu server 22.04 LTS is a common operating system
- Intel NUC devices. If you use one of these, note that their moden numbers take the shape of `NUC`+`GENERATION`+`VARIANT`+`PROCESSOR`+`VARIANT`. For example, `NUC13ANKi30WC` is a 13th generation i3 NUC and `NUC11PHKi7CAA` is an 11th generation i7 NUC.
- [This community sources SSD list](https://gist.github.com/yorickdowne/f3a3e79a573bf35767cd002cc977b038) includes some common and tested drive options
- Many more technical stakers set up an Uninterruptible Power Supply (UPS). Often from the brand APC, and with the `apcupsd` daemon that does a graceful shutdown in case of power loss
