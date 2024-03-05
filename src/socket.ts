import { Socket, io } from "socket.io-client";

let socket:Socket;
const connectSocket = (userId: string) => {
  socket = io("http://localhost:8080", {
    query: { user_id: `${userId}` },
  });
};

export { socket, connectSocket };
