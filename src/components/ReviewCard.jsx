
export default function ReviewCard({ review }) {

    function getStars(vote) {
        return "★".repeat(vote) + "☆".repeat(5 - vote);
    }
    return (
        <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-centre">
                <div><i className="bi bi-person-circle"></i> {review.name}</div>
                <div className="text-warning">
                    {getStars(review.vote)}
                </div>
            </div>
            <div className="card-body">

                <p className="card-text">{review.text}</p>
            </div>
        </div>
    )
}