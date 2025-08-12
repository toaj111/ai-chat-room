import asyncio
from google import genai

client = genai.Client(api_key="YOUR_API_KEY")
chat = client.chats.create(model="gemini-2.5-flash")

async def generate_reply(prompt: str) -> str:
    response = chat.send_message(prompt)
    return response.text

