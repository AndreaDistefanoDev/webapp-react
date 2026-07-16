import { useState } from "react"
export default function AddMovie() {


    const initialFormData = {
        title: "",
        image: "",
        director: "",
        release_year: "",
        genre: "",
        abstract: ""
    }

    const [formData, setFormData] = useState(initialFormData)
    const [message, setMessage] = useState({
        error: false,
        text: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)

        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("image", formData.image);
        formDataToSend.append("director", formData.director);
        formDataToSend.append("release_year", formData.release_year);
        formDataToSend.append("genre", formData.genre);
        formDataToSend.append("abstract", formData.abstract);

        fetch('http://localhost:3000/movies', {
            method: 'POST',
            headers: {
            },
            body: formDataToSend
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data.message);

                setFormData(initialFormData);
                setMessage({ error: false, text: 'Movie created succesfully!' })
            })
            .catch((error) => {
                setMessage({ error: true, text: 'Error creating movie!' })
                console.error('Error:', error);
            });
    }
    return (
        <>

            <div className="container-fluid bg-light py-2">
                <h1>Add Movie</h1>

                {message.text &&
                    <div className={`alert alert-${message.error ? 'alert-danger' : 'alert-success'}`} role="alert">
                        {message.message}
                    </div>}

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" id="title" placeholder="Title" autoComplete="off" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input type="file" className="form-control" name="image" id="image" placeholder="Image" autoComplete="off" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="director" className="form-label">Director</label>
                        <input type="text" className="form-control" name="director" id="director" placeholder="Director" autoComplete="off" value={formData.director} onChange={(e) => setFormData({ ...formData, director: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="release_year" className="form-label">Release year</label>
                        <input type="text" className="form-control" name="release_year" id="release_year" placeholder="Release year" autoComplete="off" value={formData.release_year} onChange={(e) => setFormData({ ...formData, release_year: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="genre" className="form-label">Genre</label>
                        <input type="text" className="form-control" name="genre" id="genre" placeholder="Genre" autoComplete="off" value={formData.genre} onChange={(e) => setFormData({ ...formData, genre: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="abstract" className="form-label">Abstract</label>
                        <textarea className="form-control" name="abstract" id="abstract" rows="3" value={formData.abstract} onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">Add</button>
                </form>
            </div>

        </>
    )
}

