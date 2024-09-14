import React, { useState, useCallback,useEffect } from "react";
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { useDispatch,useSelector  } from "react-redux";
import { createPost,updatePost } from "../../actions/posts";
// import { updatePost } from "../../../../server/controllers/posts";



const Form = ({currentId,setCurrentId}) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });
  const post=useSelector((state)=>currentId? state.posts.find((p)=>p._id ===currentId):null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(post) setPostData(post);
  },[post])

  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPostData({ ...postData, selectedFile: reader.result });
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, [postData]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId){
      dispatch(updatePost(currentId,postData))
    }else{
      dispatch(createPost(postData))
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    });
    // Add your form submission logic here
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating' } a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div
          {...getRootProps()}
          className={classes.fileInput}
          style={{
            border: '2px dashed #0087F7',
            borderRadius: '5px',
            padding: '10px',  // Adjust padding for smaller height
            textAlign: 'center',
            cursor: 'pointer',
            marginBottom: '20px',
            height: '100px',  // Adjust height as needed
            overflow: 'hidden',  // Hide overflow to maintain the height
          }}
        >
          <input {...getInputProps()} />
          {
            isDragActive ?
              <Typography variant="body1">Drop the file here...</Typography> :
              <Typography variant="body1">Drag & drop a file here, or click to select one</Typography>
          }
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth sx={{ mt: 1 }}>
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth sx={{ mt: 1 }}>
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
