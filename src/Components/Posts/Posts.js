import React from 'react';
import './Posts.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Posts = (props) => {
    const {title, id} = props.post;
    return (
        <Card sx={{ minWidth: 500 }} className="single-post">
      <CardContent>
        <Typography variant="body2">{title}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/post/${id}`}>
            <Button size="small">See More</Button>
        </Link>
      </CardActions>
    </Card>
    );
};

export default Posts;