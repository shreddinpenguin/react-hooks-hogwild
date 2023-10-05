import React, { useState } from "react";

function HogCard ({ hogs }) {
  
    const [displayInfo, setDisplayInfo] = useState(false)

    function handleClick(){
        setDisplayInfo(!displayInfo)
    }
    return (
        <div className="pigTile" onClick={handleClick}>
           <h3>{hogs.name}</h3>
           <img src={hogs.image}/>
            {displayInfo == true ? <div>
                <p>specialty: {hogs.specialty}</p>
                <p>Weight: {hogs.weight}</p>
                <p>{hogs.greased ? "greased" : "not greased"}</p>
                <p>{hogs["highest medal achieved"]}</p>
            </div> : null}
        </div>
    )
}
export default HogCard