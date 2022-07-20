import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";

import axios from './axios'

function SidebarChat() {
    const user = useSelector(selectUser);
    const [chats, setChats] = useState([]);

    const getChats = () => {
        axios.get('/get/conversationList')
            .then((res) => {
                setChats(res.data)
            })
    }

    useEffect(() => {
        getChats()
    }, []);

    const addChat = (e) => {
        e.preventDefault()
        const chatName = prompt('Please enter a chat name')
        const firstMsg = prompt('Please send a welcome message')

        if (chatName && firstMsg) {
            let chatId = ''


            axios.post('/new/conversation', {
                    chatName: chatName
                }).then((res) => {
                    chatId = res.data._id
                })
                .then(() => {

                    axios.post(`/new/message?id=${chatId}`, {
                        message: firstMsg,
                        timestamp: Date.now(),
                        user: user
                    })
                })
        }
    }


    return ( < div className = "sidebar" >
        <
        div className = "sidebar__header" >
        <
        Avatar onClick = {
            () => auth.signOut()
        }
        src = { user.photo }
        className = "sidebar__avatar" /
        >
        <
        div className = "sidebar__input" >
        <
        SearchIcon / >
        <
        input placeholder = "Search" / >
        <
        /div>

        <
        IconButton variant = "outlined"
        className = "sidebar__inputButton" >
        <
        RateReviewOutlinedIcon onClick = { addChat }
        /> < /
        IconButton > <
        /div>

        <
        div className = "sidebar__chats" > {
            chats.map(({ id, name, timestamp }) => ( <
                SidebarChat key = { id }
                id = { id }
                chatName = { name }
                timestamp = { timestamp }
                />
            ))
        } < /div>   < /div >

    );
}

export default SidebarChat;