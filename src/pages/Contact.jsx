import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

export default function Contact() {
    return (
        <>

            <Jumbotron title="Contact Us" content=" Hai domande, feedback o una proposta commerciale? Ci piacerebbe sentirti. Lasciaci un messaggio qui sotto e il nostro team ti risponderà al più presto.">

                <Link to="/movies" className="btn btn-primary btn-lg">Explore movies</Link>
            </Jumbotron>

            <section>
                <div className="container">
                    <p className="lead">"Hai domande o suggerimenti? Compila il form qui sotto per inviarci un messaggio diretto. Che si tratti di un problema tecnico o di un semplice saluto, ti risponderemo il prima possibile."</p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className="form-control" id="nome" placeholder="Inserisci il tuo nome" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Inserisci la tua email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono">Telefono</label>
                            <input type="tel" className="form-control" id="telefono" placeholder="Inserisci il tuo numero di telefono" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="messaggio">Messaggio</label>
                            <textarea className="form-control" id="messaggio" rows="5" placeholder="Scrivi il tuo messaggio"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Invia</button>
                    </form>
                </div>
            </section>
        </>


    )
}