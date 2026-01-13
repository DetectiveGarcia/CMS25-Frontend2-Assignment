export default function MovieSelector() {

    return (
        <>
            <div class="movie-container">
                <label for="movie">Pick a movie:</label>
                <select name="movie" id="movie">
                    <option value="100">Fast and furious 6 (100 kr)</option>
                    <option value="50">The mummy returns (50 kr)</option>
                    <option value="70">Jumanji: Welcome to the Jungle (70 kr)</option>
                    <option value="40">Rampage (40 kr)</option>
                </select>
            </div>
            <ul class="showcase">
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