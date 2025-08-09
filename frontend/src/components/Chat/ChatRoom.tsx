import MessageItem from "./MessageItem";
import type { MessageItemProps } from "@/types/types";

interface ChatRoomProps {
    messages: MessageItemProps[];
}

export default function ChatRoom({ messages }: ChatRoomProps) {
  return (
    <div className="flex flex-col space-y-4 p-4 flex-1 overflow-y-auto">
      {messages.map((msg, idx) => (
        <MessageItem
          key={idx}
          text={msg.text}
          sender={msg.sender}
          avatar={msg.avatar}
        />
      ))}
    </div>
  );
}



