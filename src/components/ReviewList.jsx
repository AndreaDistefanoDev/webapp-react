import ReviewCard from "./ReviewCard"

export default function ReviewList({ reviews }) {

    return (
        <section id="reviews" className="my-5">
            <div className="container">
                <h2 className="text-center py-3">Reviews</h2>

                {reviews && reviews.length > 0 && (
                    reviews.map((review) => {
                        return (
                            <ReviewCard key={review.id} review={review} />
                        )
                    })
                )}

                {reviews && reviews.length === 0 && (
                    <div className="alert alert-info text-center" role="alert">
                        No reviews yet. Be the first to review this movie!
                    </div>
                )}

            </div>
        </section>
    )
}