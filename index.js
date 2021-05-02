require('dotenv').config();
const app = require('./src/app');
const http = require('http')


function gracefulShutdown(server) {
  console.error('Server is closing');
  server.close();
}

const main = async () => {
  try {
    const server = http.createServer(app);
    server.listen(process.env.PORT, () => {
      console.log(`Server has started successfully! 🚀`);
    })
  } catch (error) {
    console.error(error);
    gracefulShutdown(server);
  }
}

process.on('unhandledRejections', (error) => {
  console.log('Rejection unhandled')
  console.error(error);
  process.exit(1);
})



main();