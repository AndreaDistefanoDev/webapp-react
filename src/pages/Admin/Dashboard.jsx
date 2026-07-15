import { Link } from "react-router-dom"

export default function Dashboard() {
    return (
        <>
            <div className="container-fluid bg-light py-2">
                <h1>Admin Dashboard</h1>
            </div>

            <div className="container my-4">

                <div className="row g-5 mb-4">
                    <div className="col-md-4">
                        <div className="card text-bg-ligth mb-3">

                            <div className="card-body">
                                <h5 className="card-title">Dark card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h2>Movies</h2>
                        <Link to="/admin/movies/create" className="btn btn-success mb-4">Add New Movie</Link>

                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Director</th>
                                <th scope="col">Release year</th>
                                <th scope="col">Genre</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>The Matrix</td>
                                <td>The Wachowskis</td>
                                <td>1999</td>
                                <td>Action</td>
                                <td>
                                    <button className="btn btn-sm btn-success me-2"> Edit</button>
                                    <button className="btn btn-sm btn-danger"> Delete</button>
                                </td>
                            </tr >
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
