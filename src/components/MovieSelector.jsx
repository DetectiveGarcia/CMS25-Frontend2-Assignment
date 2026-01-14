import Movie from "../classes/Movie"

export default function MovieSelector({ movies }) {

    return (
        <>
            <div className="movie-container">
                <label htmlFor="movie">Pick a movie:</label>
                <select name="movie" id="movie">
                    {movies && movies.map(movie => <Movie title={movie.Title} price={movie.Price} />)}

                </select>
            </div>
            <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small>N/A</small>
                </li>
                <li>
                    <div className="seat selected"></div>
                    <small>Selected</small>
                </li>
                <li>
                    <div className="seat occupied"></div>
                    <small>Occupied</small>
                </li>
            </ul>
        </>
    )
}