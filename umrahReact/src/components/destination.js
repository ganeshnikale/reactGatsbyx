import React from "react"

export const Destination = (props) => {
    const data = props.pageContext.slug;
    console.log(data);
    return ( 
        <div className="row">
            
            {
                data.duration.map( (x, index) =>
                <p key={index}> {x.packageName}</p>
                )
            }
        
        </div>
    )
}


export default Destination;