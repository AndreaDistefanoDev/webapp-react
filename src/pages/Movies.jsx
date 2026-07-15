import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
export default function Movies() {

    const [movies, setMovies] = useState([])
    const url = "http://localhost:3000/movies"

    function fetchMovies(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetchMovies(url)
    }, []);

    return (
        <>
            <section className="jumbotron">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Movies reviews community</h1>
                        <p className="col-md-8 fs-4">
                            Entra a far parte della nostra grandissima community
                        </p>

                    </div>
                </div>
            </section>

            <section className="movies-list">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
                        {movies.map((movie) => {
                            return (
                                <div className="col" key={movie.id}>
                                    <div className="card h-100">
                                        <img src={movie.image || `https://placehold.co/600x400?text=${movie.title}`} alt={movie.title} className="card-img-top" />
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.title}</h5>
                                            <p className="text-card">{movie.abstract}</p>
                                            <Link to={`/movies/${movie.id}`} className="btn btn-primary">Scopri di più </Link>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>



    )
}