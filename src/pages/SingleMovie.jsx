import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import AddReview from "../components/AddReview";
import ReviewList from "../components/ReviewList";

export default function SingleMovie() {
    const { id } = useParams();
    const url = `http://localhost:3000/movies/${id}`
    const [movie, setMovie] = useState(null)

    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error(error));

    }

    useEffect(() => {
        fetchData(url)
    }, []);

    return (
        <>
            <section className="single-movie bg-light py-5">
                <div className="container my-4">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img src={movie ? movie.img : `https://placehold.co/600x400?text=${movie?.title}`} alt={movie?.title} className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-8">
                            <h1>{movie ? movie.title : "Movie Title"}</h1>
                            <div> <strong>Director:</strong> {movie ? movie.director : "Director"}</div>
                            <div><strong>Release year:</strong> {movie ? movie.release_year : "Release date"}</div>
                            <div><strong>Genre:</strong> {movie ? movie.genre : "Genre"}</div>
                            <div><strong>Abstract:</strong> {movie ? movie.abstract : "Abstract"}</div>

                        </div>
                    </div>
                </div>
            </section>
            <AddReview url={url} />
            <ReviewList reviews={movie ? movie.reviews : []} />

        </>


    )
}