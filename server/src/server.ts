const constants = require("./constants");
const { version, validate } = require("uuid");
const express = require("express");

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

const PORT = process.env.PORT || 3001;

/** helpers */
const getRooms = () => {
  const { rooms } = io.sockets.adapter;
  // возвращаем все, кроме дефолтных комнат
  return Array.from(rooms.keys()).filter(
    (roomId) => validate(roomId) && version(roomId) === 4
  );
};

const shareRoomsToClient = () => {
  io.emit(constants.ACTIONS.SHARE_ROOMS, {
    roomsIds: getRooms(),
  });
};

io.on("connection", (socket) => {
  console.log("connected: ", socket.id);
  shareRoomsToClient();
  /** Уведмоление о присоединении в комнату */
  socket.on(constants.ACTIONS.JOIN, (config) => {
    // Комната, в которую хочет подключится сокет
    const { room: roomId } = config;
    // Комнаты,в которых уже есть сокет
    const { rooms: joinedRooms } = socket;

    if (Array.from(joinedRooms).includes(roomId)) {
      return console.warn("Already joined");
    }
    // Клиенты которые находятся в комнате (id сокетов)
    const clientsInRoom = Array.from(
      io.sockets.adapter.rooms.get(roomId) || []
    );

    /** Уведомление всех клиентов о том что новый захлдит в комнату */
    clientsInRoom.forEach((clientSocketId) => {
      // Отправляем каждому в комнате новый пир
      io.to(clientSocketId).emit(constants.ACTIONS.ADD_PEER, {
        peerID: socket.id,
        createOffer: false,
      });

      // offer создает сторона, которая зайдет в комнату
      socket.emit(constants.ACTIONS.ADD_PEER, {
        peerID: clientSocketId,
        createOffer: true,
      });
    });
    socket.join(roomId);
    shareRoomsToClient();
  });

  const leaveRoom = () => {
    const { rooms } = socket;
    Array.from(rooms).forEach((roomId) => {
      const clientIds = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
      clientIds.forEach((clientId) => {
        io.to(clientId).emit(constants.ACTIONS.REMOVE_PEER, {
          peerID: socket.id,
        });

        socket.emit(constants.ACTIONS.REMOVE_PEER, {
          peerID: clientId,
        });
      });
      socket.leave(roomId);
    });
    shareRoomsToClient();
  };

  socket.on(constants.ACTIONS.JOIN, () => {});
  socket.on("disconnecting", () => {});
});

server.listen(PORT, () => {
  console.log("Server is listening...", PORT);
});
