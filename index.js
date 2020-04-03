const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

morgan.token('POST-body', (req, res) => {
  return req.method === "POST" ?
    JSON.stringify(req.body) :
    ''
})

const app = express()
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :POST-body'))

let persons = [
  { 
    name: "Arto Hellas", 
    number: "040-123456",
    id: 1
  },
  { 
    name: "Ada Lovelace", 
    number: "39-44-5323523",
    id: 2
  },
  { 
    name: "Dan Abramov", 
    number: "12-43-234345",
    id: 3
  },
  { 
    name: "Mary Poppendieck", 
    number: "39-23-6423122",
    id: 4
  },
  { 
    name: "zz", 
    number: "39-23-6423122",
    id: 5
  }
]

app.get('/info', (req, res) => {
  const time = Date()
  const response = 
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${time}</p>`
  res.send(response)
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).json({
      "error": `Could not find person for id ${id}`
    })
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const person = req.body
  if( !person.name || !person.number ) {
    return res.status(400).json({
      error: 'content missing'
    })
  }
  if(persons.find(p => p.name === person.name)) {
    return res.status(400).json({
      error: `Person ${person.name} already exists, name must be unique`
    })
  }

  person.id = Math.floor(1000000*Math.random())
  persons = persons.concat(person)
  res.json(person)
  
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT)
})
