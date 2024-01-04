import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import "./itemslist.css"

const ItemsList = ({items, deleteitem,currentId,setList}) => {

  const [updatedtask,setUpdatedtask]=useState()
  const [isUpdateclicked,setIsupdateclicked]=useState(false)
  const [tasktosave,setTasktosave]=useState()

  const onDel = (id)=>{
    deleteitem(id)
  }


  const updateTask = ((id,correctedtask)=>{
    
    var editedtask = items.filter((singletask)=>{
        if(singletask.id = id){
          return  { id: singletask.id, value: correctedtask }
        }
       
        setTasktosave(editedtask)
       
       

    })

  

   
})


  const onUpdateClick = ()=>{
    setIsupdateclicked(true)
  }
 
  const onInputchangeineditform=(e)=>{
    setUpdatedtask(e.target.value);
  }




  return (
    <div>
    {
      
      isUpdateclicked ? 
     
      <div className='updatingformcss'>
      <TextField  variant="outlined" onChange={(e)=>onInputchangeineditform(e)}  value={updatedtask}  />
      <Button id="deletebutton" onClick={(id)=>updateTask(id,updatedtask)} >Edit</Button>
        </div>
    
    : items?.map((item)=>{
       return (<div className='display-items'>
       <ul>
        <li className='thetaskparagraph'>{item.value}</li> 
        </ul>
        <Button id='updatebutton' variant='contained'  onClick={()=> onUpdateClick()}>Edit</Button>
        <Button id='deletebutton' variant ="contained" onClick={()=>onDel(item.id)}>Delete</Button>
        </div>
        )
    })}
    </div>
  )
}
export default ItemsList;