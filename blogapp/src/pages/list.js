import React, {useEffect,useState} from 'react';
import '../App.css';
import loadblog from './loadlink'
import EditBtn from './edit'
import DeleteBtn from './delete'


export default function BlogList(props){
    const {newBlog}=props

    const [blogInit,setBlogInit] = useState([])
    const [newBlogs,setNewBlogs] = useState([])
   
    useEffect(() =>{

       const final = [...newBlog].concat(blogInit)
      if (final.length !== newBlogs.length) {
        setNewBlogs(final)
      }
    },[blogInit,newBlogs,newBlog,setNewBlogs])

    useEffect(() => {
      const mycallback = (responce,status) =>{
        if(status === 200){
          setBlogInit(responce)
        }else{
          alert("there was an arror 4")
        }
      }
      loadblog('GET','/list/',mycallback)
    },[setBlogInit])
     
    return( newBlogs.map((item,index) => {

       return <Blogs blog = {item} className="task-wrapper flex-wrapper" key={`${index}-{item.id}`} />
    })
      );
    }



    function Blogs(props){
  const {blog} = props
  const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
  return(
       <div className={className}>
        <p>{blog.title}</p>
        <div className="m-3">
        <p>{blog.content}</p>
        </div>
        <div className='btn btn-group'>
           <EditBtn blog={blog} />
          <DeleteBtn blog={blog} />
        </div>
    </div>
  );
}