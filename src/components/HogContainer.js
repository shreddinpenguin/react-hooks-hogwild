import React from "react";
import HogCard from "./HogCard";
import HogFilter from "./HogFilter";

function HogContainer({ hogs }) {
    const hogData = hogs.map((hog) => 
        <HogCard 
            hogs={hog}
            name={hog.name}
            image={hog.image} 
            key={hog.name}
        />
    )
    return <div className="porkers">{hogData}</div>
}

export default HogContainer