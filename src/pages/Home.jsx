import { Link } from "react-router-dom"
import Jumbotron from "../components/Jumbotron"
export default function Home() {

    return (
        <>
            <Jumbotron title="Benvenuto in Movies Reviews" content="Entra a far parte della nostra grandissima community">
                <Link to="/movies" className="btn btn-primary btn-lg">Explore movies</Link>
            </Jumbotron>

            <section>
                <div className="container">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget viverra ultrices, nunc nisi aliquet nisl, euismod ullamcorper enim magna id erat. Donec euismod, nisl eget viverra ultrices, nunc nisi aliquet nisl, euismod ullamcorper enim magna id erat. Donec euismod, nisl eget viverra ultrices, nunc nisi aliquet nisl, euismod ullamcorper enim magna id erat. Donec euismod, nisl eget viverra ultrices, nunc nisi aliquet nisl, euismod ullamcorper enim magna id erat.</p>
                </div>
            </section>
        </>


    )
}