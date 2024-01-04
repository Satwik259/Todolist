import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import "./additem.css"
const AddItem = ({additem}) => {

   const [newitem,setNewItem]=useState("");

   const onInputChange=(event)=>{
    setNewItem(event.target.value);
  }

   const onAddClick=()=>{
    additem(newitem);
    setNewItem("")
 }
  
  return (
    <div className='inputandadd'>
    <TextField id="outlined-basic" className='inputbox' variant="outlined" size="small" onChange={onInputChange} value={newitem} />
    <Button id='addbutton' className='btn' variant="contained" onClick={onAddClick}>Add</Button>
    </div>
  )
}

export default AddItem;