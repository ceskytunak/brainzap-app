import 'dotenv/config'
import express from 'express'
import routesMain from './src/routes/main.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

// Constants
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PORT = process.env.PORT || 4000

// Express
const app = express()

// Template engine
app.set("views", path.join(__dirname, "src", "views"))
app.set('view engine', 'pug')

// Body parser 
app.use(bodyParser.urlencoded({ extended: false }))

// Set up CORS
const allowedOrigins = ['http://localhost:4004']
var corsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors())
app.use(express.json())

// Static routes
app.use(express.static("public"))

app.use('/css', express.static(path.join(__dirname, 'node_modules/mdb-ui-kit/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/mdb-ui-kit/js')))

// Dynamic routes
app.use('/', routesMain)
/*
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
*/
// Handling non matching request from the client 
app.use((req, res, next) => { 
    res.status(404).send( 
        "<h1>Page not found on the server</h1>") 
}) 

// Run server
app.listen(PORT, () => {
    console.log(`Success! BrainZap! is running on http://127.0.0.1:${PORT}`)
});