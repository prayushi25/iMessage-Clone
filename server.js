// import everything we need
import express from 'express'
import mongoose from 'mongoose'
import Pusher from 'pusher'
import cors from 'cors'

import mongoData from './mongoData.js'
import { MongoClient } from 'mongodb'
// app config
const app = express()
const port = process.env.PORT || 9000

// add middlewares
app.use(cors())
app.use(express.json())

// db config
const mongoURI = 'mongodb+srv://prayushi:prayushi251020@cluster0.bpbw2au.mongodb.net/?retryWrites=true&w=majority'
var MongoClient = require('mongodb').MongoClient;
//mongoose.connect(mongoURI)
MongoClient.connect = ('mongodb+srv://prayushi:prayushi251020@cluster0.bpbw2au.mongodb.net/?retryWrites=true&w=majority', function(err, db) {

            if (err) throw err;
            else console.log(`DB connected`);
        }

        /* mongoose.connection.once('
        open ', () => {
        console.log(`DB Connected`)
    })*/

        // api routes

        /* app.get('/
        ', (req, res) => res.status(200).send('
        Hello! < 3 '))

        app.post('/new/conversation', (req, res) => {
            const dbData = req.body
            mongoData.create(dbData, (err, data) => {

                if (err) {
                    res.status(500).send(err)
                } else {
                    res.status(201).send(data)
                }

            })
        })

        app.post('/new/message', (req, res) => {
            mongoData.update({ _id: req.query.id }, { $push: { conversation: req.body } },
                (err, data) => {
                    if (err) {
                        console.log('Error saving message...')
                        console.log(err)

                        res.status(500).send(err)
                    } else {
                        res.status(201).send(data)
                    }
                }
            )
        })

        app.get('/get/conversationList', (req, res) => {
            mongoData.find((err, data) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    data.sort((b, a) => {
                        return a, timestamp - b.timestamp;
                    });

                    let conversations = []

                    data.map((conversationData) => {
                        const conversationDataInfo = {
                            id: conversationData._id,
                            name: conversationData.chatName,
                            timestamp: conversationData.conversation[0].timestamp
                        }
                        conversation.push(conversationInfo)
                    })
                    re.status(200).send(conversations)
                }
            })
        })

        app.get('/get/conversation', (req, res) => {
            const id = req.query.id

            mongoData.find({ _id: id }, (err, data) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.status(200).send(data)
                }
            })
        })

        app.get('/get/lastMessage', (req, res) => {
            const id = req.query.id

            mongoData.find({ _id: id }, (err, data) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    let convData = data[0].conversation

                    convData.sort((b, a) => {
                        return a.timestamp - b.timestamp;
                    });

                    res.status(200).send(convData[0])
                }
            })
        })*/

        //listen
        app.listen(port, () => console.log(`listening on localhost:${port}`))