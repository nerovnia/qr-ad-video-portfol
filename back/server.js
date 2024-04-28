'use strict'
import Fastify from 'fastify'
import * as qrcode from "qrcode";

const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  qrcode.toDataURL('I am a pony!', function (err, url) {
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