const express = require('express')
const os = require('os')

const app = express()
app.get('/', (req, res) => {
        res.send(`Hi from ${os.hostname()}!`)
        res.send(`FUCK YOU`)
})

const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`))