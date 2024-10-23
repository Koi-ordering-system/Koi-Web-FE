import React, { useState } from "react";
import { Button, Input, Card } from "@/components/ui"; // Import component từ shadnc

const WaittingRoom = ({ joinChatRoom }: any) => {
  const [userName, setUserName] = useState("");
  const [chatRoom, setChatRoom] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="p-6 shadow-lg w-full max-w-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            joinChatRoom(userName, chatRoom);
          }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-center">Join Chat Room</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <Input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Chat Room</label>
            <Input
              type="text"
              value={chatRoom}
              onChange={(e) => setChatRoom(e.target.value)}
              placeholder="Enter chat room name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex justify-center mt-4">
            <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
              Join
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default WaittingRoom;
