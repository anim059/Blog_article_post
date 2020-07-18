import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";







export default function EditBtn(props){
   const {blog}=props
   const className = props.className ? props.className : 'btn btn-primary btn-sm ml-3 '
   const navstyle = {
        color:'white',
       'text-decoration':'none'
   };

  return(
    <button className={className}><Link style={navstyle} to={`/update/${blog.id}`}>Edit</Link></button>
  );
} 
   