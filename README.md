# Renovate

## General setup

The general setup consist out of a pure base settings
Foreach language the implementing repo must include the config for e.g. docker or kubernetes.

## Local test

Local testing can be done via the renovate NPM package including a dry-run.
- Never remove the autodiscover: false and always add your repo into the repositories array 

## Setup of config structure

All the base configs are included via the config.json e.g.:

- Autodiscover
- Extends
- Timezone
- Prs (Settings)
- Digests
- Host config
- Repositories
- And other general settings which nobody should override
- Platform

## Docker settings (overide from config:base)

- pinDigest
- 

## PHP Composer settings (override from config:base)

- ...

## NPM settings (override from config:base)

- ...

## Kubernetes settings (override from config:base)

- ...

## HELM settings (override from config:base)

- ...



