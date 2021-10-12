import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';
import './PostDetails.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [userIcon, setUserIcon] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    // console.log(comments);
    return (
        <>
        <div className='post'>
            <h1>This is post details Of: {id}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
        <div className='post'>
            <div className="comments">
                <input type="text" placeholder="type comment here" className="comment-box"/> 
                <Stack className="comment-box">
                    <Button variant="contained" color="success">
                        Comment
                    </Button>
                </Stack>
            </div>
            {
                comments.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
            }
        </div>
        </>
    );
};

export default PostDetails;