import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { MessageItemProps } from "@/types/types";

export default function MessageItem({ text, sender, avatar }: MessageItemProps) {
  const isMe = sender === "user";

  return (
    <div
      className={`flex items-start gap-2 w-full ${
        isMe ? "justify-end" : "justify-start"
      }`}
    >
      {/* 机器人左侧头像 */}
      {!isMe && (
        <Avatar>
          <AvatarImage src={avatar} alt={sender} />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      )}

      <div
        className={`rounded-lg p-2 text-white max-w-[70%] break-words ${
          isMe ? "bg-green-500" : "bg-stone-500"
        }`}
      >
        {text}
      </div>

      {/* 用户右侧头像 */}
      {isMe && (
        <Avatar>
          <AvatarImage src={avatar} alt={sender} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
