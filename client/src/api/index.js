import axios from "axios";


const url = "http://localhost:5000/posts"; //return all the posts that we currently have in the databse

//get call to our url
export const fetchPosts = () => axios.get(url)