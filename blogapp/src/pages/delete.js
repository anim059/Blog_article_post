import React from 'react';
import '../App.css';
import loadblog from './loadlink'

  function DeleteBlog(data,mycallback){
  loadblog('DELETE',`/delete/${data}`,mycallback)
}
 


export default function DeleteBtn(props){
   const {blog}=props
  
   const className = props.className ? props.className : 'btn btn-primary btn-sm ml-3 '
   const blog_id = blog.id

   const handleDelete = (event) =>{
    event.preventDefault()
    window.location.reload(false)
   DeleteBlog(blog_id,(response,status)=>{})
    
   }

  return(
    <button className={className} onClick={handleDelete}>Delete</button>
  );
} 