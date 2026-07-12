# Movies' review Frontend

This is a frontend project built with React and Vite. It allows users to view and submit reviews for movies.

**dependencies:**
- React
- React Router DOM
- Bootstrap
- Bootstrap Icons


## guest pages :

- DefaultLayout: The main layout component that includes the navigation bar and footer.
- Home: the homepage of the app, contains a banner, a lead paragraph with a welcome message and call to action.
- MoviesPage: the page that displays a list of movies, each with a title, poster image, and a link to view more details.
- SingleMoviePage: the page that shows detailed information about a single movie, including its title, poster image, director, genre, year, description, and reviews.

## Admin pages :

- AdminLayout: The main layout component for the admin section, includes a navigation bar and footer.
- AdminMoviesPage: The page that displays a list of movies for the admin, each with a title, poster image, and links to edit or delete the movie.
- AdminCreateMoviePage: The page that allows the admin to create a new movie by filling out a form with the movie's title, poster image URL, director, genre, year, and description.


## Subcomponents

- MovieCard: A component used in the MoviesPage to display individual movie information in a card format.
- ReviewCard: A component used in the SingleMoviePage to display individual reviews for a movie.
- ReviewList: A component used in the ReviewCard to display a list of reviews for a movie.
- ReviewForm: A component used in the SingleMoviePage to allow users to mit new reviews for a movie.  
- AddMovieAdminForm: A component used in the AdminCreateMoviePage to allow the admin to submit new movies to the database.

