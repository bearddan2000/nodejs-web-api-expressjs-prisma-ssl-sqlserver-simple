# nodejs-web-api-expressjs-prisma-ssl-sqlserver-simple

## Description
A POC for ORM prisma database pull from existing table `dog`.

Uses self-signed ssl.

## Tech stack
- express
- typescript
- prisma
- mssql

## Docker stack
- alpine:edge
- node:latest
- mcr.microsoft.com/mssql/server:2017-latest-ubuntu

## To run
`sudo ./install.sh -u`
curl -i localhost/dog

## To stop
`sudo ./install.sh -d`

## For help
`sudo ./install.sh -h`

## Credit
- [Prisma example](https://dev.to/joshtom/build-a-rest-api-with-prisma-node-js-and-typescript-36o)
- [Connection string](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-sqlserver)
