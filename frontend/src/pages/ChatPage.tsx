import ChatSidebar from "@/components/Chat/ChatSidebar";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import ChatRoom from "@/components/Chat/ChatRoom";
import InputBox from "@/components/Chat/InputBox";
import type { MessageItemProps } from "@/types/types";
import { useState } from "react";
import { sendMsgToBackend } from "@/api/chat";

export default function ChatPage() {
  const [messages, setMessages] = useState<MessageItemProps[]>([]);

  async function handleSend(input: string) {
    setMessages((prev) => [
      ...prev,
      { text: input, sender: "user", avatar: "/test.png" },
    ]);
    try {
      const reply = await sendMsgToBackend(input);
      setMessages((prev) => [
        ...prev,
        { text: reply, sender: "bot", avatar: "/test.png" },
      ]);
    } catch (err) {
      console.error(err);
    }
  }

  // function addUserMessage(text: string) {
  //   setMessages((prev) => [
  //     ...prev,
  //     { text: text, sender: "user", avatar: "/test.png" },
  //   ]);
  //   setTimeout(() => {
  //     setMessages((prev) => [
  //       ...prev,
  //       {
  //         text: "hello, what can i help you",
  //         sender: "bot",
  //         avatar: "/test.png",
  //       },
  //     ]);
  //   }, 1000);
  // }
  return (
    <SidebarProvider>
      <ChatSidebar />
      <SidebarInset>
        <div className="flex flex-col h-full min-h-0">
          <div className="sticky top-0 z-10">
            <SidebarTrigger />
          </div>
          <div className="flex-1">
            <ChatRoom messages={messages} />
          </div>
          <div className="sticky bottom-0 z-10">
            <InputBox onSubmit={handleSend} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
