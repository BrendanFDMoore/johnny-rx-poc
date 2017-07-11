/**
 * Configuration for Socket.IO server
 * @module socket-config
 */
const PROTOCOL = 'http://';
const HOST = 'localhost';
const PORT = 4444;
const config = {
  PROTOCOL,
  HOST,
  PORT,
  ADDRESS: `${PROTOCOL}${HOST}:${PORT}`,
};

module.exports = config;
