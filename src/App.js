import './App.css';
import React , {useState} from 'react'
import MyNav from './Components/Nav/MyNav';
import MoviesData from './Components/MoviesData/MoviesData'
import MoviesList from './Components/MoviesList/MoviesList';
import AddMovie from './Components/AddMovie/AddMovie';

function App() {
const[titleSearch , setTitleSearch]=useState("")
const handleTitle=(input)=>{
  setTitleSearch(input)
}
const [ratingSearch , setRatingSearch]=useState(0)
const handleRating=(input)=>{
  setRatingSearch(input)
}

const[MoviesListData , setMoviesListdata]= useState(MoviesData)
const getMoviesData =(input)=>{
  setMoviesListdata([...MoviesListData , input])
} 

  return (
    <div className="App">
      <MyNav
        handleTitle={handleTitle}
        handleRating={handleRating}/>
        <AddMovie
      getMoviesData={getMoviesData} />
      <MoviesList
        MoviesListData={MoviesListData}
        ratingSearch={ratingSearch}
        titleSearch={titleSearch}
      />
    </div>
  );
}

export default App;
