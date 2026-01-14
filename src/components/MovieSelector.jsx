export default function MovieSelector({ movies }) {

    return (
        <>
            <div className="movie-container">
                <label htmlFor="movie">Pick a movie:</label>
                <select name="movie" id="movie">
                    {movies && movies.map(movie => {
                        return (
                            <option value={movie.Price} key={movie.Title}>{`${movie.Title} (${movie.Price}kr)`}</option>
                        )
                    })}

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