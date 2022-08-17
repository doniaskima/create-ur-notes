import * as api from "../api";

// Action Creators (fncts that return action)
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log(error.message);
    }
    //payload is the data where we store all of our posts
    // nstead od return action
}