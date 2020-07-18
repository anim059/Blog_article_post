import React, {useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import '../App.css';
import BlogList from './list'
import loadblog from './loadlink'




function createBlog(data,mycallback){
  loadblog('POST','/create/',mycallback,data)
}
 

export default function BlogComponent(props) {
    const titleRef = React.createRef()
    const contentRef = React.createRef()
    const activeRef = React.createRef()
    const [newBlog, setNewBlog] = useState([])

    const handleSubmit = (event) => {
      event.preventDefault()
      window.location.reload(false)
      let tempNewTweets = [...newBlog]
      // change this to a server side call
      let data = {
       "title": titleRef.current.value,
       "content": contentRef.current.value,
       "active": false,
           }
      createBlog(data,(response,status)=>{
        if(status === 201){
           tempNewTweets.unshift(response)
        }else{
           alert("there was an arror create")
        }

      })
     

      setNewBlog(tempNewTweets)
      titleRef.current.value = ''
      contentRef.current.value = ''
      activeRef.current.value = ''
    }

    return <div className={props.className}>
            <div className='col-12 mb-3'>
              <form onSubmit={handleSubmit} className="m-5 p-5 border">
                <div className="form-group">
                <input className="form-control" ref={titleRef}  id="title" type="text" name="title" placeholder="Add task.."/>
                </div>
                <textarea ref={contentRef} required={true} className='form-control' name='tweet'></textarea>
                 <div className="form-group">
                <input type="checkbox" className="form-check-input" ref={activeRef} />
                </div>
               
                <button type='submit' className='btn btn-primary my-3'>Tweet</button>
            </form>
            </div>
        <BlogList newBlog={newBlog}/>
    </div>
}



  

 

 

