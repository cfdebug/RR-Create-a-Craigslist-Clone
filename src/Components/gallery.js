import React from "react";
import Posting from './posting'

const Gallery = (props) => {
    return (
        <div className="gallery">
            {props.postings.map((p, i) => {
                return <Posting posting={p} key={i} />
            })}
        </div>
    )
}

export default Gallery