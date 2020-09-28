const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json())

let movies = [
  {
    id: 1,
    title: "Fight Club",
  },
  {
    id: 2,
    title: "Spiderman",
  },
  {
    id: 3,
    title: "Ironman",
  },
  {
    id: 4,
    title: "Mulan",
  },
  {
    id: 5,
    title: "The Dictato",
  },
]

app.get("/", (req, res) => {
  res.send("selamat datang, gunakan endpoint /movies")
})

// GET ALL MOVIES
app.get("/movies", (req, res) => {
  res.json({
    message: "success get data movies",
    movies
  })
})

// GET MOVIE BY ID
app.get("/movies/:id", (req, res) => {
  let movie = movies.filter(item => item.id == req.params.id)
  if (movie.length != 0){
    res.json({
      message: "success get data movie",
      movie
    })
  } else {
    res.json({
      message: "cannot find data movie",
    })
  }
});

// POST MOVIE
app.post("/movies", (req, res) => {
  console.log(req.body)

  let movie = {
    id: movies[movies.length-1].id + 1,
    title: req.body.title
  }

  movies.push(movie)

  res.json({
    message: "succcess adding one movie",
    movies
  })
})

// LISTEN PORT
app.listen(PORT = 3000, () => {
  console.log(`this app running on port ${PORT}`)
})