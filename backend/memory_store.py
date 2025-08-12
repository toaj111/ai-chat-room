from models import Message
from typing import List

_messages: List[Message] = []

async def append_message(role: str, content: str):
    _messages.append(Message(role=role, content=content))

async def get_messages() -> List[Message]:
    return _messages

