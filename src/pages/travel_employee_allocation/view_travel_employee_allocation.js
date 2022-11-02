import React from 'react'
import {useState,  useEffect} from "react"
import {db} from '../../database/firebase-config'
import {collection,getDocs,addDoc, updateDoc,doc, deleteDoc} from "firebase/firestore"
import "./view_travel_employee_allocation.scss"; 
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const View_travel_employee_allocation = () => {
  const [Allocation,setAllocation] =useState([] );
  const AllocationCollectionRef =collection(db, "allocation");
   



//   const UpdateAllocation=async(id,)=>{
//    const AllocationDoc =doc(db,"allocation", id);
//    const newFields={ age : age+1};
//    await updateDoc(AllocationDoc,newFields);
//   }


  const deleteAllocation =async(id)=>{
    const allocationDoc =doc(db,"allocation",id);
    await deleteDoc(allocationDoc);
  }

  useEffect(()=>{
   const getAllocation =async()=>{
    const data =await getDocs(AllocationCollectionRef);
    setAllocation(data.docs.map((doc)=>({...doc.data(), id :doc.id})))
   }
   getAllocation();

  },[])

  return (
    <div>
       <div>
     <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <h1>Employee Allocation for Travels</h1>
      <div>

<div className='hj'>
    {Allocation.map((Allocation)=>{
          return <div  className='carte'>
            
                <h4>busNumber   :{Allocation.busNumber}</h4>
                <p>busRoute :{Allocation.busRoute}</p>
                <p>driver   :{Allocation.driver}</p>
                <p>conductor:{Allocation.conductor}</p>
                
                
                <button className="btn btn-outline-warning">
              {" "}
              Update Allocation
            </button>

            &nbsp;&nbsp; &nbsp;&nbsp;
            <button
              onClick={() => {
                deleteAllocation(Allocation.id);
              }}
              class="btn btn-outline-danger">
              {" "}
              Delete Allocation
            </button>
                
                </div>
                
            })}
                
    
  </div>  
            </div>
        </div>
        </div>
        </div>

        </div>
  )
}

export default View_travel_employee_allocation