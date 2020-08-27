import React from "react";


const PhotosList = props => {
    return(
        <div className="photo-list" key={props.id}>
            <h2>{props.title}</h2>
            <p>{props.data}</p>
            <img src={props.picture} alt="NASA"/>
            <p>{props.description}</p>
            <p>{props.copyright}</p>
        </div>
    )
}
export default PhotosList;