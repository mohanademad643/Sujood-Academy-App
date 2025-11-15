import { app } from './dist/islamic-education/server/server.mjs';

const port = process.env.PORT || 3000;
const server = app();

server.listen(port, () => {
  console.log(`SSR running on port ${port}`);
});
