import React from "react";
import useStyles from './styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; 
import { formatDistanceToNow } from 'date-fns';
import {useDispatch} from 'react-redux';

import { deletePost,likePost } from "../../../actions/posts";

const Post =({ post ,setCurrentId})=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={()=>{setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" >{post.tags.map((tag)=>`#${tag} `)}</Typography>
            </div>
                <Typography className={classes.title} variant="h5" gutterBottom  >{post.title }</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p"   >{post.message }</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>dispatch(likePost(post._id))}>
                    < ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}>
                    < DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;