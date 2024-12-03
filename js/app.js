const content = document.querySelector('.content')

const trendingMovies = {
  method: 'GET',
  headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTMxNzkzYjhmZGJhYTMyOTExYWUzNzlhZDk2YmRjOCIsIm5iZiI6MTczMzE2NjQyNi4zNzUsInN1YiI6IjY3NGUwNTVhMDhkNjcwZmFlNzFmODAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WM-4KWQ4FKaUN5sWUzlNF5-nenGUlOE-0d1QDnch_bk'
  }
};
  
let fetchMovies = fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', trendingMovies)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

const trendingTV = {
  method: 'GET',
  headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTMxNzkzYjhmZGJhYTMyOTExYWUzNzlhZDk2YmRjOCIsIm5iZiI6MTczMzE2NjQyNi4zNzUsInN1YiI6IjY3NGUwNTVhMDhkNjcwZmFlNzFmODAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WM-4KWQ4FKaUN5sWUzlNF5-nenGUlOE-0d1QDnch_bk'
  }
};

fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', trendingTV)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

const keyword = {
  method: 'GET',
  headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTMxNzkzYjhmZGJhYTMyOTExYWUzNzlhZDk2YmRjOCIsIm5iZiI6MTczMzE2NjQyNi4zNzUsInN1YiI6IjY3NGUwNTVhMDhkNjcwZmFlNzFmODAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WM-4KWQ4FKaUN5sWUzlNF5-nenGUlOE-0d1QDnch_bk'
  }
};

fetch('https://api.themoviedb.org/3/search/keyword?page=1', keyword)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

const multi = {
  method: 'GET',
  headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTMxNzkzYjhmZGJhYTMyOTExYWUzNzlhZDk2YmRjOCIsIm5iZiI6MTczMzE2NjQyNi4zNzUsInN1YiI6IjY3NGUwNTVhMDhkNjcwZmFlNzFmODAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WM-4KWQ4FKaUN5sWUzlNF5-nenGUlOE-0d1QDnch_bk'
  }
};

fetch('https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1', multi)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

