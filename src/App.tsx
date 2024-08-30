import Header from "./components/Header/Header"
import MovieCard from "./components/MovieCard/MovieCard"
import { movies } from "./components/MovieGallery/MovieGallery"


export default function App() {
  return (
    <body>
      <div>
        <Header />
      </div>
      <div>
        {movies.map({ movies } => (
        <MovieCard
          title = {movies.title}


        />
        ))}
      </div>
    </body>
  )
}