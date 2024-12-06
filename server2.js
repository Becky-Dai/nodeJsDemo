import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

const users = [
  { id: 1, name: 'Becky' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Ada' },
];

// Logger middleware
const logger = (req, res) => {
  console.log(`${req.method} ${req.url}`);
};

// JSON middleware
const jsonMiddleware = (res) => {
  res.setHeader('Content-Type', 'application/json');
};

// Route handler for GET /api/users
const getUserHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split('/')[3]; // Extract user ID
  const user = users.find((user) => user.id === parseInt(id, 10));
  if (user) {
    res.write(JSON.stringify(user));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User not found' }));
  }
};

// Route handler for POST /api/users
const createUserHandler = (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const newUser = JSON.parse(body);
    users.push(newUser); // Corrected 'users' array
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newUser));
  });
};

// Not found handler
const notFound = (res) => {
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Route not found' }));
};

// Server
const server = createServer((req, res) => {
  logger(req, res);
  jsonMiddleware(res);

  if (req.url === '/api/users' && req.method === 'GET') {
    getUserHandler(req, res);
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
    getUserByIdHandler(req, res);
  } else if (req.url === '/api/users' && req.method === 'POST') {
    createUserHandler(req, res);
  } else {
    notFound(res);
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
