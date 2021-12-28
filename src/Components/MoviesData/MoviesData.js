import { v4 as uuidv4 } from 'uuid';


const MoviesData= [
    {
        title :"the god father",
        description :"drama",
        posterUrl : "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        rating : 2,
        id : uuidv4(),
        trailer : "https://www.youtube.com/embed/sY1S34973zA"
    },
    {
        title :"venom",
        description :"action",
        posterUrl : "https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
        rating : 4,
        id : uuidv4(),
        trailer : "https://www.youtube.com/embed/u9Mv98Gr5pY"
    },
    {
        title :"dbz",
        description :"anime",
        posterUrl : "https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_.jpg",
        rating : 5,
        id : uuidv4(),
        trailer : "https://www.youtube.com/embed/rovLs3lIjyo"
    }
]
export default MoviesData