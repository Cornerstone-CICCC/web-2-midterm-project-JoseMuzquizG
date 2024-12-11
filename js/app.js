const apiKey = '7131793b8fdbaa32911ae379ad96bdc8'
const content = document.querySelector('.content')
const movieGrid = document.querySelector('.content-grid-movies')
const showGrid = document.querySelector('.content-grid-shows')
const movieItem = document.querySelector('.movie-item')
const showItem = document.querySelector('.show-item')
const hoverModal = document.querySelector('.hover-modal')
const container = document.querySelector('.container')
// const search = document.querySelectorAll('form')

// const trendingMovies = {
//   method: 'GET',
//   headers: {
//   accept: 'application/json',
//   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTMxNzkzYjhmZGJhYTMyOTExYWUzNzlhZDk2YmRjOCIsIm5iZiI6MTczMzE2NjQyNi4zNzUsInN1YiI6IjY3NGUwNTVhMDhkNjcwZmFlNzFmODAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WM-4KWQ4FKaUN5sWUzlNF5-nenGUlOE-0d1QDnch_bk'
//   }
// };
  
// let fetchMovies = fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`, trendingMovies)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// const trendingTV = {
//   method: 'GET',
//   headers: {
//   accept: 'application/json',
//   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTMxNzkzYjhmZGJhYTMyOTExYWUzNzlhZDk2YmRjOCIsIm5iZiI6MTczMzE2NjQyNi4zNzUsInN1YiI6IjY3NGUwNTVhMDhkNjcwZmFlNzFmODAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WM-4KWQ4FKaUN5sWUzlNF5-nenGUlOE-0d1QDnch_bk'
//   }
// };

// fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`, trendingTV)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// // const keyword = {
// //   method: 'GET',
// //   headers: {
// //   accept: 'application/json',
// //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTMxNzkzYjhmZGJhYTMyOTExYWUzNzlhZDk2YmRjOCIsIm5iZiI6MTczMzE2NjQyNi4zNzUsInN1YiI6IjY3NGUwNTVhMDhkNjcwZmFlNzFmODAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WM-4KWQ4FKaUN5sWUzlNF5-nenGUlOE-0d1QDnch_bk'
// //   }
// // };

// // fetch('https://api.themoviedb.org/3/search/keyword?page=1', keyword)
// //   .then(res => res.json())
// //   .then(res => console.log(res))
// //   .catch(err => console.error(err));

// const multi = {
//   method: 'GET',
//   headers: {
//   accept: 'application/json',
//   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTMxNzkzYjhmZGJhYTMyOTExYWUzNzlhZDk2YmRjOCIsIm5iZiI6MTczMzE2NjQyNi4zNzUsInN1YiI6IjY3NGUwNTVhMDhkNjcwZmFlNzFmODAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WM-4KWQ4FKaUN5sWUzlNF5-nenGUlOE-0d1QDnch_bk'
//   }
// };

// fetch('https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1', multi)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));





const getMovie = async (movies) => {
  let res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
  const data = await res.json()
  data.results.forEach(movies => {
    const movieCard = createMovieCard(movies)
    movieGrid.appendChild(movieCard)
  });
  // console.log('this are the results: ', data.results[0].original_title)
}
getMovie()

const getTvShows = async (tvShow) => {
  let res = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`)
  const data = await res.json()
  data.results.forEach(tvShow => {
    const showCard = createShowCard(tvShow)
    showGrid.appendChild(showCard)
  });
  // console.log('this are the results: ', data.results[0].original_title)
}
getTvShows()

const createMovieCard = function(movie) {
  const {title, poster_path, backdrop_path, vote_average, overview} = movie 
  const movieCard = document.createElement("div")
  movieCard.classList.add('movie-item')

  const poster = function() {
    if (poster_path === null){
      let image = `<img src="./images/Image_not_available.png" alt="Image not available"></img>`
      return image
    }else {
      image = `<img src="https://image.tmdb.org/t/p/w500/${poster_path}"></img>`
    }
    return image
  }

  movieCard.innerHTML = `
  <div class="front-card">
     <div class="poster">
      ${poster()}
    </div>
    <div class="title">
      <h3>${title}</h3>
    </div>
  </div>
  <div class="hover-modal">
    <div class="hover-modal-title">
      <h4>${title}</h4>
    </div>
    <div class="hover-modal-info">
      <span class="rating">
        <span>${Math.ceil(vote_average)}/10</span>
      </span>
    </div>
    <div class"hover-modal-description">
      <p>${overview}</p>
    </div>
    <div class="hover-modal-background">
      <figure>
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path || poster_path}" alt="">
      </figure>
    </div>
  </div>
  `
  return movieCard
}

const createShowCard = function(show) {
  const {name, poster_path, backdrop_path, vote_average, overview} = show 
  const showCard = document.createElement("div")
  showCard.classList.add('show-item')

  const poster = function() {
    if (poster_path === null){
      let image = `<img src="./images/Image_not_available.png" alt="Image not available"></img>`
      return image
    }else {
      image = `<img src="https://image.tmdb.org/t/p/w500/${poster_path}"></img>`
    }
    return image
  }

  showCard.innerHTML = `
  <div class="front-card">
    <div class="poster">
      ${poster()}
    </div>
    <div class="title">
      <h3>${name}</h3>
    </div>
  </div>
  <div class="hover-modal">
    <div class="hover-modal-title">
      <h4>${name}</h4>
    </div>
    <div class="hover-modal-info">
      <span class="rating">
        <span>${Math.ceil(vote_average)}/10</span>
      </span>
    </div>
    <div class"hover-modal-description">
      <p>${overview}</p>
    </div>
    <div class="hover-modal-background">
      <figure>
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path  || poster_path}" alt="">
      </figure>
    </div>
  </div>
  `
  return showCard
}

let darkModeStorage = localStorage.getItem('darkmode')
const darkMode = document.querySelector('.switch-mode')

if (darkModeStorage === "enabled") {
  container.classList.add("dark-mode")
}

darkMode.addEventListener('click', () => {
  container.classList.toggle("dark-mode")
  if (container.classList.contains("dark-mode")) {
    localStorage.setItem('darkmode', "enabled")
  } else {
    localStorage.setItem('darkmode', 'disabled')
  }
})

const hamMenu = document.querySelector('.hamburger-menu')
const offMenu = document.querySelector('.offscreen-menu')

hamMenu.addEventListener('click', () => {
  offMenu.classList.toggle('active')
})

const search = document.querySelectorAll('form')
const searchInputSelector = 'input[name="Search"]'

search.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const searchInput = form.querySelector(searchInputSelector)
    const media = searchInput.value.trim()
    

    if (media) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${media}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
      )
      const data = await res.json()
      // console.log(data.results)
      // console.log(data)


      if (data.results.length == 0) {
        console.log(data)
        window.location.href = './nomatch.html'
      }

      movieGrid.innerHTML = ''
      showGrid.innerHTML = ''
      data.results.forEach((result) => {
        if (result.media_type === 'movie') {
          const movieCard = createMovieCard(result)
          movieGrid.appendChild(movieCard)
        } else if (result.media_type === 'tv') {
          const showCard = createShowCard(result)
          showGrid.appendChild(showCard)
        } else {
          const movieCard = createMovieCard(result)
          const showCard = createShowCard(result)
        }
      })
    } else {
      window.location.href = './index.html'
    }
    console.log(media)
  })
})