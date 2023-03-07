// import stomp from 'stompjs';
import { Client } from '@stomp/stompjs';

// export const client = stomp.client(`wss:${import.meta.env.VITE_WS_URL}/ws`);

// export const connectAndSubscribe = (
//   destination: string,
//   onMessageCallback: (message: any) => void,
// ) => {
//   client.connect(
//     {
//       postId: `1`,
//       sellerId: `1`,
//       buyerId: `3`,
//     },
//     () => {
//       client.subscribe(destination, onMessageCallback);
//     },
//   );
// };

// export const sendMessage = (destination: string, message: string) => {
//   client.send(destination, {}, JSON.stringify(message));
// };

// export const debug = client.debug();
