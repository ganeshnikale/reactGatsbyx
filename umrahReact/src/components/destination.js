import React from "react"

export const Destination = (props) => {
    const data = props.pageContext.slug;
    return ( 
        <div className="row">
            
            {
                data.duration.map( (x, index) =>
                <p> {x.packageName}</p>
                )
            }
        
        </div>
    )
}


export default Destination;