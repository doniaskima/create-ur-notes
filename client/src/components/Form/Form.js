import React, { useState, useEffect } from 'react'
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost,updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';

const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const classes = useStyles();
    const dispatch = useDispatch(); // dispatch actions

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
         e.preventDefault(); // not to get refresh in the browser
        if(currentId){
            dispatch(updatePost(currentId,postData));
        }else {
              dispatch(createPost(postData));
        }
    }
    const clear = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form className="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating notes'}</Typography>
                <TextField name="creator" variant="outlined" label="creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form