const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.get("/", (req, res) => {
    console.log("ping")
    res.send(`Server is running on port ${port}`)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

module.exports = app