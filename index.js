import express from 'express'

const app = express()

app.get('customers', (req, res) => {
    res.send('this will be a list of custmers...sooon..')
})




app.listen(3030, () => console.log('Listening on http://localhost:3030....'))