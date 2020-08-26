const http = require ('http');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
// http.get('https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences',(res) => {
//     console.log(res);
// });