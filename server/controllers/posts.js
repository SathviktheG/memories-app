import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts=async(req,res)=>{
    try {
        const postMessages=await  PostMessage.find();//Fetch all post documents from the database

        res.status(200).json(postMessages); //Send a response with the fetched posts and HTTP status 200
    } catch (error) {
        res.status(404).json({message: error.message});//Handle any errors and send an error response
    }
}
export const createPost=async(req,res)=>{
    const post=req.body;//Extract data from the request body

    const newPost=new PostMessage(post);//Create a new instance of the PostMessage model with the data

    try {
        await newPost.save();//Save the new post to the database

        res.status(201).json(newPost);//Send a response back with the saved post and HTTP status 201 (Created)
    } catch (error) {
        res.status(409).json({message:error.message}); //Handle any errors and send an error response
    }
}
export const updatePost = async(req,res)=>{
    const {id:_id}=req.params;
    const post=req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that _id');
    
    const updatedPost=await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});

    res.json(updatedPost);
}

export const deletePost=async (req,res)=>{
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    
    await PostMessage.findByIdAndDelete(id);
    
    res.json({message:'Post deleted successfully'});
}

export const likePost = async(req,res)=>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    
    const post = await PostMessage.findById(id);
    const updatedPost=await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});

    res.json(updatedPost);

}