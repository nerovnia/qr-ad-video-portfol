'use strict'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import * as qrcode from "qrcode"

const fastify = Fastify({
  logger: true
})

await fastify.register(cors, { 
  allowedHeaders: 'Access-Control-Allow-Origin'
})


// Declare a route
fastify.get('/', function (request, reply) {
  qrcode.toDataURL('I am a pony!', function (err, url) {
    //console.log(url);
    reply.send({ qrcode: url })
  })
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})