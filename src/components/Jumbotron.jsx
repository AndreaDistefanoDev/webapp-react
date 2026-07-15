import { Link } from "react-router-dom";
export default function Jumbotron({ title, content, children }) {
    return (
        <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">{title}</h1>
                <p class="col-md-8 fs-4">
                    {content}
                </p>
                {children}
            </div>
        </div>
    )
}