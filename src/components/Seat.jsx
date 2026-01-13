export default function Seat({ state, dispatch }){

    return <div className={`${state.seatOccupied ? "seat occupied" : "seat"}`} onClick={() => {
            dispatch({
              type: "Toggle Seat"
            })
          }}></div>
}