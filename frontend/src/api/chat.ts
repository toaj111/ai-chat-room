export async function sendMsgToBackend(msg: string): Promise<string> {
  const res = await fetch("http://127.0.0.1:8000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: msg }),
  });

  if (!res.ok) {
    throw new Error("请求失败");
  }
  const data = await res.json();
  return data.reply;
}
