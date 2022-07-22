import React from "react"

export const Destination = ({pageContext}) => {
    //const data = props.pageContext.slug;
   // console.log(data);
    return ( 
        <div className="row">
            {
                pageContext.slug.duration.map( (x, index) =>
                <p key={index}> {x.packageName}</p>
                )
            }
            
        </div>
    )
}


export default Destination;