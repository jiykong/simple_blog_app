import * as React from 'react';
import { Divider } from "@mui/material";


/*
## Blog Post Component that will contain the primary blog
*/
export default function Post({ post: { title, body, imgUrl, author, divider }, index }) {
    return (
        <div className="post-container" style={{padding:"0 2%"}}>
            <h1 className="heading">{title}</h1>
            <p style={{whiteSpace: "pre-line"}}>{body}</p>
            <div className="info">	
                <h4>Written by: {author}</h4>
            </div>
            {divider ?
                <Divider variant='fullWidth' sx={{ bgcolor: "black" }} />
                :
                <div/>
            }
        </div>
    );
}