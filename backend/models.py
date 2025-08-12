from pydantic import BaseModel
from typing import List

class Message(BaseModel):
    role: str # user | bot
    content: str

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str
    messages: List[Message]