import axios from 'axios';

const TMDB= axios.create({
     baseURL:"https://api.themoviedb.org/3/",
});

const getMoviesByTerm=(SearchTerm,setMovies)=>{
    TMDB.get('search/movie',{
        params:{
            api_key:"7f8045ecf5aa05993377afc5969b999c",
            query: SearchTerm,
        },
    }).then((response)=>{
        console.log(response);
        setMovies(response.data.results);
    });
};

export {getMoviesByTerm};