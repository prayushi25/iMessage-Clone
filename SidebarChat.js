import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setChat } from "./features/chatSlice";
import db from "./firebase";
import "./SidebarChat.css";
import * as timeago from "timeago.js";

import axios from './axios'

function SidebarChat({ id, chatName }) {
    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([]);

    const [lastMsg, setlastMsg] = useState('')
    const [lastPhoto, setlastPhoto] = useState('')
    const [lastTimestamp, setlastTimestamp] = useState('')

    constSidebarElement() {
        axios.get(`/get/lastMessage?id=${id}`.then((res) => {
                setLastMsg(res.data.message)
                setLastPhoto(res.data.user.photo)
                setLastTimestamp(res.data.timestamp)
            })
        }

        useEffect(() => {
            getSidebarElement()
        }, [id]);

        return ( <
            div onClick = {
                () =>
                dispatch(
                    setChat({
                        chatId: id,
                        chatName: chatName,
                    })
                )
            }
            className = "sidebarChat" >
            <
            Avatar src = { chatInfo[0] ? .photo }
            /> <
            div className = "sidebarChat__info" >
            <
            h3 > { chatName } < /h3> <
            p > { chatInfo[0] ? .message } < /p> <
            small > { timeago.format(new Date(chatInfo[0] ? .timestamp ? .toDate())) } <
            /small> < /
            div > <
            /div>
        );
    }

    export default SidebarChat;