import React,{useState} from "react";

export const PostForm = () =>{
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState('')

    const submitHandler = (event) =>{
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
            }


    return(
        <form onSubmit={submitHandler}>
        <div>
            <h1>Adding Data in API</h1>
            <label>Title</label>
            <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/><br/><br/>
            <label>Body</label>
            <input type='text' value={body} onChange={(e)=> setBody(e.target.value)}/><br/><br/>
            <label>UserId</label>
            <input type='text' value={userId} onChange={(e)=> setUserId(e.target.value)}/><br/><br/>
            <button type="submit">Submit</button><br/><br/>
        </div>
        </form>
    )
}