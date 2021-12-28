import React ,{useState , useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { useParams , useHistory} from 'react-router-dom'
import MoviesData from '../MoviesData/MoviesData'
const MovieDetails = () =>{
    const [movie ,setMovie]=useState({})
    let {id} = useParams()
    useEffect(() => {
          setMovie(MoviesData.find(movie=>movie.id === id))
    })
    let history = useHistory()
    return (
        <div>
            <h1>{movie.title}</h1>
            <iframe 
            width="560" 
            height="315" 
            src={movie.trailer} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <h3>{movie.description}</h3>
            <Button variant='primary' onClick={()=>history.push("/")}>Back to Home</Button>
        </div>
    )
}

export default MovieDetails

