import ChatSidebar from "@/components/Chat/ChatSidebar"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import ChatRoom from "@/components/Chat/ChatRoom"
import InputBox from "@/components/Chat/InputBox"
import type { MessageItemProps } from "@/types/types"
import { useState } from "react"

export default function ChatPage() {
  const [messages, setMessages] = useState<MessageItemProps[]>([
      {text: "你好，我是用户", sender: "user", avatar: "/test.png"},
      {text: "你好，我是你的人工智能助手", sender: "bot", avatar: "/test.png"},
  ])

  function addUserMessage(text: string) {
      setMessages(
          prev => ([
              ...prev,
              {text: text, sender: "user", avatar:"/test.png"},
          ])
      );
      setTimeout(
        () => {
          setMessages(
            prev => ([
              ...prev,
              {text: "hello, what can i help you", sender: "bot", avatar:"/test.png"},
            ])
          )
        }, 1000
      )
  }
  return (
    <SidebarProvider>
        <ChatSidebar/>
        <SidebarInset>
          <div className="flex flex-col h-full min-h-0">
            <div className="sticky top-0 z-10">
              <SidebarTrigger/>
            </div>
            <div className="flex-1">
              <ChatRoom messages={messages}/>
            </div>
            <div className="sticky bottom-0 z-10">
              <InputBox onSubmit={addUserMessage}/>
            </div>
          </div>
        </SidebarInset>
    </SidebarProvider>
  )
}
