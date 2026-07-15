import { Outlet, NavLink, Link } from "react-router-dom";


export default function AdminLayout() {

    return (
        <>

            <div className="container-fluid bg-light min-vh-100">

                <div className="row">

                    <aside className="card col-12 col-md-3 d-flex flex-column justify-content-between p-3 bg-dark">
                        <div className="top">
                            <h4 className="text-white py-3">Admin Menu</h4>

                            <nav className="navbar navbar-expand navbar-dark bg-dark">
                                <div className="nav navbar-nav d-flex flex-column gap-2">
                                    <NavLink className="nav-item nav-link" to="/admin">Dashboard</NavLink>
                                    <NavLink className="nav-item nav-link" to="/admin/movies/create">Create Movie</NavLink>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <Link to="/books" className="btn btn-outline-primary d-block my-3">
                                <i className="bi bi-book-fill"></i>
                                Library
                            </Link>
                        </div>


                    </aside>

                    <main className="min-vh-100 col-12 col-md-9">
                        <Outlet />
                    </main>
                </div>

            </div>


        </>
    )
}