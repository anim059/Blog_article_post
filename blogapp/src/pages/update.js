import React, {useEffect,useState} from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import loadblog from './loadlink'


  function UpdateBlog(data,editid,mycallback){
  loadblog('POST',`/update/${editid}`,mycallback,data)
}
 



export default function EditBlogComponent(props) {
	const editid = props.match.params.id

    let title = ''
    let content = ''
    let active = ''
    const titleRef = React.createRef()
    const contentRef = React.createRef()
    const activeRef = React.createRef()
    const [newBlog, setNewBlog] = useState([])
    const [item,setItem] = useState([])

   useEffect(() => {
      const mycallback = (responce,status) =>{
        if(status === 200){
          setItem(responce)
        }else{
          alert("there was an arror 4")
        }
      }
      loadblog('GET',`/detail/${editid}`,mycallback)
    },[setItem,editid])
        item.map((item,index)=>{
         
    	 title = `${item.title}`
    	 content = `${item.content}`
    	 active = `${item.active}`
    	console.log(title)

    })
    console.log(item)
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
      UpdateBlog(data,editid,(response,status)=>{
      })
     

      setNewBlog(tempNewTweets)

      titleRef.current.value = ''
      contentRef.current.value = ''
      activeRef.current.value = ''
    
    }

    return <div>
            <div className='col-12 mb-3'>
              <form onSubmit={handleSubmit} className="m-5 p-5 border">
                <div className="form-group">
                <input className="form-control" ref={titleRef}  type="text" defaultValue={title} name="title" placeholder="Add task.."/>
                </div>
                <textarea ref={contentRef} required={true} className='form-control' defaultValue={content} name='tweet'></textarea>
                 <div className="form-group">
                <input type="checkbox" className="form-check-input" defaultValue={active} ref={activeRef} />
                </div>
               
                <button type='submit' className='btn btn-primary my-3'>Submit</button>
                <Link to={`/`}><button  className='btn btn-primary my-3 ml-3'>Home</button></Link>
            </form>
            </div>
        
    </div>
}



  



    
