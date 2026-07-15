import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

export default function About() {

    return (
        <Jumbotron title="About" content="Benvenuto in Movies Reviews! Noi siamo un gruppo di persone che amano i film e vogliamo condividere le nostre e le vostre opinioni sui film .">
            <Link to="/movies" className="btn btn-primary btn-lg">Explore movies</Link>
        </Jumbotron>

    )
}