import React, { useEffect, useState } from 'react';
import './Comments.css'

const Comments = (props) => {
    const {name, email, body, id} = props.comment;
    
    return (
        <div className="single-comment">
            <h3>{name}</h3>
            <h4>{email}</h4>
           <p>{body}</p>
        </div>
    );
};

export default Comments;