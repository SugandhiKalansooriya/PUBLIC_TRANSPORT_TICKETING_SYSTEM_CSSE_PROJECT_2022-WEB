import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import {useState} from 'react'
import {db} from '../../database/firebase-config'
import {collection,addDoc} from "firebase/firestore"
import "./allocate_employees_for_travel.scss"; 
import Swal from 'sweetalert2'

const Allocate_employees_for_travel = () => {


    const [Newdriver,setNewdriver]=useState("")
    const [Newconductor,setNewconductor]=useState("")
    const [NewbusRoute,setNewbusRoute]=useState("")
    const [NewbusNumber,setNewbusNumber]=useState("")
    const AllocationCollectionRef =collection(db, "allocation");
     
  
    const createallocation=async()=>{
    await addDoc(AllocationCollectionRef,{driver:Newdriver,conductor:Newconductor,busRoute:NewbusRoute,busNumber:NewbusNumber }).then(
      
      Swal.fire({
        title: "your reseration details has been saved",
        type: "success",
        showConfirmButton: true,
        confirmButtonText: 'View Travels',
        icon: 'success',
    }).then(function() {
        window.location = "/View_travel_employee_allocation";
    })
    )
    
    }
  
  return (
   
   <div>
     <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>


        <div className='Assigingform'>

<h1>Assign Deivers Conductors to the Bus Routes</h1>


<div class="form-group">
<label for="exampleInputEmail1">Driver Name</label>
<input type= "text" className='form-control' placeholder='driver' onChange={(event)=>{setNewdriver(event.target.value)}}/>
</div>

<div class="form-group">
<label for="exampleInputEmail1">Conductor Name</label>
<input type='text' className='form-control'placeholder='conductor' onChange={(event)=>{setNewconductor(event.target.value)}}/>
</div>

<div class="form-group">
<label for="exampleInputEmail1">Bus Routr</label>
<input type= "text" className='form-control'placeholder='busRoutr' onChange={(event)=>{setNewbusRoute(event.target.value)}}/>
</div>

<div class="form-group">
<label for="exampleInputEmail1">Bus Number</label>
<input type='text' className='form-control'placeholder='busNumber' onChange={(event)=>{setNewbusNumber(event.target.value)}}/>
</div>



<button  className="btn btn-outline-dark m-3 btn-lg" onClick={createallocation} >
         Add Route
        </button>

</div>
</div>
</div>
    </div>
  )
}

export default Allocate_employees_for_travel




