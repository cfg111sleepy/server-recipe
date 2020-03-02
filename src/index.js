import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import PostController from './Controller/postsController'

const app = express()

export const Controller = new PostController()

mongoose.connect('mongodb://localhost/test')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/posts', Controller.create)
app.get('/posts', Controller.index)
app.get('/posts/:id', Controller.read)
app.delete('/posts/:id', Controller.delete)
app.put('/posts/:id', Controller.update)

app.listen(3333, () => {
    console.log('cool')
})
