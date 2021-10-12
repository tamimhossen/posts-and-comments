import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Comments.css'

const Comments = (props) => {
    const {name, email, body, id} = props.comment;
    const [randomUser, setRandomUser] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => setRandomUser(data.results))
    }, [id])


    return (
        <div className="single-comment">
            <div className="name-icon">
                {
                    randomUser.map(user => {
                        return (
                            <div>
                                <Link to="/user">
                                    <img className="icon" src={user.picture.large} alt=""/>
                                </Link>
                            </div>
                        )
                    })
                }
                <h3>{name}</h3>
            </div>
            <h4>{email}</h4>
           <p>{body}</p>
        </div>
    );
};

export default Comments;