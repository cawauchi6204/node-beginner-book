const express = require('express')
const ejs = require('ejs')

const app = express()

app.engine('ejs', ejs.renderFile)

app.use(express.static('public'))

const data = {
  'Taro': 'taro@hogehgoe',
  'Hanako': 'hanak@fugafuga',
  'hogeta': 'hogehoge@example.com'
}

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.render('index.ejs',
  {
    title: 'Index',
    content: 'This is Express-app top page!',
    data
  }))

const server = app.listen(3000, () => {
  console.log('Server is running')
})
