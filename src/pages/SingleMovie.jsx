import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

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
            <section id="add_review_form my-5">
                <div className="container my-5">
                    <div className="card p-5">
                        <h2>add reviews</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Your username</label>
                                <input type="text" className="form-control" name="usename" id="usename" placeholder="Username" autoComplete="off" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="rating" className="form-label">Rating</label>
                                <select className="form-select" name="rating" id="rating">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <div className="mb-3">
                                    <label htmlFor="review" className="form-label">Your Review</label>
                                    <textarea className="form-control" name="review" id="review" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Invia</button>

                            </div>
                        </form>
                    </div>
                </div>

            </section>
            <section id="reviews" className="my-5">
                <div className="container">
                    <h2 className="text-center py-3">Reviews</h2>

                    {movie && movie?.reviews.length > 0 && (
                        movie.reviews.map((review) => {
                            return (
                                <div className="card mb-3" key={review.id}>
                                    <div className="card-header d-flex justify-content-between align-items-centre">
                                        <div><i className="bi bi-person-circle"></i> {review.name}</div>
                                        <div>
                                            {review.vote}
                                        </div>
                                    </div>
                                    <div className="card-body">

                                        <p className="card-text">{review.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    )}

                    {movie && movie?.reviews.length === 0 && (
                        <div className="alert alert-info text-center" role="alert">
                            No reviews yet. Be the first to review this movie!
                        </div>
                    )}

                </div>
            </section>

        </>


    )
}