import { useState } from "react";
import WaittingRoom from "./components/room-list";
import {HubConnectionBuilder,LogLevel} from "@microsoft/signalr"

const ChatPage = () => {
const [connection,setConnection] = useState()


const joinChatRoom = async (username:string,chatroom:string) =>{
  try {
    const conn = new HubConnectionBuilder()
    .withUrl("https://koi-api.persiehomeserver.com/chat")
    .configureLogging(LogLevel.Information)
    .build()

    conn.on("ReceiveMessage", (username: string, message: string) => {
      console.log(`${username}: ${message}`);
    });

    await conn.start()
    await conn.invoke("JoinRoom",{username,chatroom});
    setConnection(conn)
  } catch (e) {
    console.log(e)
  }
}

  return <div><WaittingRoom joinChatRoom={joinChatRoom}/></div>;
};

export default ChatPage;
