// https://www.prisma.io/express#express-tabs

import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

async function main(){
  for (let index = 0; index < 10; index++) {
    await prisma.dog.create({
      data: 
        {
          breed: 'dog_breed',
          color: 'dog_color',
        },
    });
  }
}

async function show_res(res: any, table_result: any) {
  console.table(table_result)
  res.json(table_result);
}

app.get('/dog', async (req, res) => {
  const dogs = await prisma.dog.findMany()
  await show_res(res, dogs)
})

app.get('/dog/:id', async (req, res) => {
  const { id } = req.params
  const dog = await prisma.dog.findUnique({
    where: {
      id: Number(id),
    },
  })
  await show_res(res, dog)
})

app.post('/dog', async (req, res) => {
  const dog = await prisma.dog.create({
    data: {
        breed: 'insert',
        color: 'insert',
    },
  })
  await show_res(res, dog)
})

app.put('/dog/:id', async (req, res) => {
  const { id } = req.params
  const dog = await prisma.dog.update({
    where: {
      id: Number(id),
    },
    data: { 
      breed: 'updated', 
      color: 'updated', 
    },
  })
  await show_res(res, dog)
})


app.delete('/dog/:id', async (req, res) => {
  const { id } = req.params
  const dog = await prisma.dog.delete({
    where: {
      id: Number(id),
    },
  })
  await show_res(res, dog)
})

main();
const server = app.listen(3000)