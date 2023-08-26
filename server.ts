import { RpcServer } from "./RpcServer";

const SERVER_ADDRESS = "socket_file";

const main = () => {
  const server = RpcServer.create(SERVER_ADDRESS);
  server.listen(SERVER_ADDRESS);
};

main();
