import "babel-polyfill"
import server from './config/server';
import './config/database';

import setRoutes from "./src/routes/routes";
setRoutes(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
