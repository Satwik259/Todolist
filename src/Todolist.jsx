import React, { useState } from 'react';
import AddItem from './AddItem.jsx';
import ItemsList from './ItemsList.jsx';
import "./todolist.css"
import './App.css';


export const Todolist = () => { 
    const [list, setList] = useState([]);
    const [currentId,setCurrentId]=useState(1);

    const addItemToList = ((newitem) => {
        setList([...list, ...[{  id : currentId, value :newitem}]])
        setCurrentId(currentId+1)})
    
     const deleteItemById=((id)=>{
         const updatedList=list.filter((item)=>item.id !== id);
            setList(updatedList);
            // console.log(id);
          })


          console.log(list)
  
    return (
        <div className='main-content'>
        <div className='papcol' elevation={3} >
            <AddItem additem={addItemToList} />
            <ItemsList items={list} deleteitem={deleteItemById} currentId={currentId} setList={setList} />
        </div>
        </div>
    )
}
export default Todolist;