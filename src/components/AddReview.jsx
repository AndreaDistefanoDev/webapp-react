export default function AddReview() {
    return (

        <section id="add_review_form my-5">
            <div className="container my-5">
                <div className="card p-5">
                    <h2>add reviews</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Your username</label>
                            <input type="text" className="form-control" name="usename" id="usename" placeholder="Username" autoComplete="off" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rating" className="form-label">Rating</label>
                            <select className="form-select" name="rating" id="rating">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <div className="mb-3">
                                <label htmlFor="review" className="form-label">Your Review</label>
                                <textarea className="form-control" name="review" id="review" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Invia</button>

                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}