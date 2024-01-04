import { Button } from '@mui/material';
import React from 'react';
import './App.css';
import "./itemslist.css"

const ItemsList = ({items, deleteitem}) => {

  // const [updatedtask,setUpdatedtask]=useState()
  // const [isUpdateclicked,setIsupdateclicked]=useState(false)


  const onDel = (id)=>{
    deleteitem(id)
  }


//   const updateTask = ((id,e)=>{
    
//     const editedtask = items.filter((singletask)=>{
//         singletask.id = id

//         setUpdatedtask(e.target.value)
//     })
// })

//   const onUpdateClick = ()=>{
//     setIsupdateclicked(true)
//   }






  



  return (
    <div>
    {items?.map((item)=>{
       return (<div className='display-items'>
        <ul>
        <li className='thetaskparagraph'>{item.value}</li>
        </ul> 
        <Button id='deletebutton' variant ="contained" onClick={()=>onDel(item.id)}>Delete</Button>
        </div>
       

        )
    })}
    </div>
  )
}
export default ItemsList;