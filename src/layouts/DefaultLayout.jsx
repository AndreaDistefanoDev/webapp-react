import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>

            <header>
                <nav className="navbar navbar-expand-xl navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">Movies Review</a>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" aria-current="page">Home
                                        <span className="visually-hidden">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Movies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>

                            </ul>
                            <form className="d-flex my-2 my-lg-0">
                                <input
                                    className="form-control me-sm-2"
                                    type="text"
                                    placeholder="Search"
                                />
                                <button
                                    className="btn btn-outline-success my-2 my-sm-0"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>

            </header>

            <main className="min-vh-100">
                <Outlet />
            </main>

            <footer className="bg-light py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                        <div className="col">
                            <h3>Movies Reviews</h3>
                            <p>Click here to leave a review of the film.</p>
                        </div>
                        <div className="col">
                            <h3>Quick Links</h3>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Contact Us</h3>
                            <p>Email: Movieland@movie.com</p>
                        </div>
                    </div>
                </div>

            </footer>

        </>

    )
} 