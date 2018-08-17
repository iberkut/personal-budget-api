/* eslint-disable no-console */
const logger = require('winston')
const app = require('./app')
const port = app.get('port')
const server = app.listen(port)
const robot = require("./helpers/j5-helper.js");

robot.initBoard();

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
)

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
)
