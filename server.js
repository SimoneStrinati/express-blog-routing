const express = require('express')
const postsRouter = require("./routers/posts")

const app = express()
const port = 3000

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/posts/", postsRouter)

app.listen(port, () => {
 console.log(`Example app listening on http://localhost:${port}/`)
})
