import SockJs from 'sockjs-client';
import { Client } from '@stomp/stompjs';

// app: WebSocket으로의 앱으로 접속을 위한 포인트가 되며 메시지를 실제로 보낼 때 사용된다
// topic: 일 대 다수의 커넥션에서 메시지를 전송한다
// queue: 일 대 일의 커넥션에서 메시지를 전송한다
// user: 메시지를 보내기 위한 사용자를 특정한다:
//endpoint : /chat/room

const client = new Client({
  brokerURL: `wss:${import.meta.env.VITE_WS_URL}`,
  connectHeaders: {
    postId: `1`,
    sellerId: `1`,
    buyerId: `3`,
  },
  debug: (err) => {
    console.log(err);
  },
  onConnect: () => {
    client.subscribe('/room/test1', (message) => {
      console.log(`Received: ${message.body}`);
    });
    client.publish({
      destination: `room/test1`,
      body: 'First Message',
    });
  },
});

client.activate();
