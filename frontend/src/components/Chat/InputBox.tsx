import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React, { useState } from "react";

interface inputBoxProps {
    onSubmit: (text: string) => void;
}

export default function InputBox({ onSubmit }: inputBoxProps) {
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!input.trim()) return;
        onSubmit(input.trim());
        setInput("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-center">
            <Input type="text" placeholder="询问任何问题" className="w-160 h-15 rounded-r-none" value={input} onChange={(e) => {setInput(e.target.value)}}/>
            <Button type="submit" className="w-20 h-15 rounded-l-none">submit</Button>
        </form>
    );
}
