const app = require('./src/app');
const http = require('http')

const main = async () => {
  const server = http.createServer(app);

  server.listen(process.env.PORT, () => {
    console.log(`Server has started successfully! 🚀`);
  })
}

main();