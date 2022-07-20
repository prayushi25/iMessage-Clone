import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import { selectChatId, selectChatName } from "./features/chatSlice";

import Message from "./Message";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
import axios from './axios'

function Chat() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        const getConversation = (ChatId) => {
            if (chatId) {
                axios.get(`/get/conversation?id=${chatId}`).then((res) => {

                    setMessages(res.data[0].conversation)
                })

            }
        }
        getConversation(chatId)
    }, [chatId]);


    const sendMessage = (e) => {
        e.preventDefault();

        axios.post(`/new/message?id=${chatId}`, {
            message: input,
            timestamp: Date.now(),
            user: user
        })
        setInput("");
    }

    return ( <
        div className = "chat" >
        <
        div className = "chat__header" >
        <
        h4 >
        To: < span className = "chat__name" > { chatName } < /span> < /
        h4 > <
        strong > Details < /strong> < /
        div >

        { /* chat messages */ } <
        div className = "chat__messages" >
        <
        /div >

        <
        div className = "chat__input" >
        <
        form >
        <
        input value = { input }
        onChange = {
            (e) => setInput(e.target.value)
        }
        placeholder = "iMessage"
        type = "text" / >
        <
        button onClick = { sendMessage } > Send Message < /button> </form >

        <
        IconButton >
        <
        MicNoneIcon className = "chat__mic" / >
        <
        /IconButton> < /div > < /div>
    );
}

export default Chat;