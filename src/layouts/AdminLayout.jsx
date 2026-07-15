import { NavLink, Outlet } from "react-router-dom";


export default function AdminLayout() {
    return (
        <>

            <div className="container-fluid min-vh-100 bg-light">
                <div className="row">
                    <aside className="card col-md-4 col-lg-3 col-xl-2 bg-light border-end border-dark ">
                        <h4 className="card-header">Admin Menu</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <NavLink className="nav-link" to="/admin">Dashboard</NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink className="nav-link" to="/admin/movies/create">Create Movie</NavLink>
                            </li>
                        </ul>
                    </aside>
                </div>


            </div>

            <main className="min-vh-100">
                <Outlet />
            </main>


        </>

    )
} 