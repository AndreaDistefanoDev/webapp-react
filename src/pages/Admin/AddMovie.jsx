export default function AddMovie() {
    return (
        <>

            <div className="container-fluid bg-light py-2">
                <h1>Add Movie</h1>

                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" id="title" placeholder="Title" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input type="text" className="form-control" name="image" id="image" placeholder="Image" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="director" className="form-label">Director</label>
                        <input type="text" className="form-control" name="director" id="director" placeholder="Director" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="release_year" className="form-label">Release year</label>
                        <input type="text" className="form-control" name="release_year" id="release_year" placeholder="Release year" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="genre" className="form-label">Genre</label>
                        <input type="text" className="form-control" name="genre" id="genre" placeholder="Genre" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="abstract" className="form-label">Abstract</label>
                        <textarea className="form-control" name="abstract" id="abstract" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">Add</button>
                </form>
            </div>

        </>
    )
}

