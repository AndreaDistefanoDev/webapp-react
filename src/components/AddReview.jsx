import { useState, useEffect } from "react"

export default function AddReview({ url }) {

    const initialFormData = {
        name: "",
        vote: 1,
        text: ""
    }

    const [formData, setFormData] = useState(initialFormData)


    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        console.log(url)


        const reviewUrl = `${url}/reviews`


        fetch(reviewUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Reset the form data after submission
                setFormData(initialFormData);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }

    return (

        <section id="add_review_form my-5">
            <div className="container my-5">
                <div className="card p-5">
                    <h2>add reviews</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your username</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Username" autoComplete="off" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="vote" className="form-label">Rating</label>
                            <select className="form-select" name="vote" id="vote" value={formData.vote} onChange={(e) => setFormData({ ...formData, vote: e.target.value })}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">Your Review</label>
                                <textarea className="form-control" name="text" id="text" rows="3" value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Invia</button>

                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}