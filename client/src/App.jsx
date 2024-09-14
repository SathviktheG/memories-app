import React, { useEffect,useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { getPosts } from './actions/posts';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from './images/memories.png';
import useStyles from './styles';
import { useDispatch } from "react-redux";

const App = () => {
    const [currentId,setCurrentId]=useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId,dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.appBarContent}>
                    <Typography className={classes.heading} variant="h2" >Memories</Typography>
                    <img className={classes.image} src={memories} alt="memories" height="60" />
                </div>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container  justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
