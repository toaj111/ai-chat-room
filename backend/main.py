from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware 
import models
import memory_store
import llm

# 创建应用
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # 允许所有域名访问
    allow_credentials=True,   # 允许发送 Cookie、授权头等凭据
    allow_methods=["*"],      # 允许所有 HTTP 方法（GET、POST、PUT、DELETE等）
    allow_headers=["*"],      # 允许所有请求头
)


@app.post("/chat", response_model=models.ChatResponse)
async def chat_endpoint(req: models.ChatRequest):
    await memory_store.append_message("user", req.message)

    reply = await llm.generate_reply(req.message)

    await memory_store.append_message("bot", reply)

    messages = await memory_store.get_messages()

    return models.ChatResponse(reply=reply, messages=messages)
