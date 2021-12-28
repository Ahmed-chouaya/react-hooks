import React from 'react'
import {Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function MovieCard({movie}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl}/>
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <h3>{"⭐".repeat(movie.rating)} </h3>
    <Link to={`/details/${movie.id}`}>
    <Button variant='warning'>See Trailer</Button>
    </Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
