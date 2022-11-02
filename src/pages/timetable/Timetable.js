import React, { useState }  from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import "./Timetable.scss";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events=[
  {
    title: "Colombo to Kandy",
    start: new Date('November 11, 2022 05:35:32'),
    end: new Date('November 11, 2022 08:35:32'),
    
},
{
    title: "Kandy to Mathale",
    start: new Date('November 11, 2022 01:35:32'),
    end: new Date('November 11, 2022 03:35:32'),
    
},
{
    title: "Colombo to Jaffna",
    start: new Date('November 11, 2022 09:35:32'),
    end: new Date('November 11, 2022 12:35:32'),

},

{
  title: "Colombo to Jaffna",
  start: new Date('November 10, 2022 05:35:32'),
  end: new Date('November 10, 2022 08:35:32'),
  
},
{
  title: "Kandy to Mathale",
  start: new Date('November 10, 2022 01:35:32'),
  end: new Date('November 10, 2022 03:35:32'),
  
},
{
  title: "Anuradhapura to Jaffna",
  start: new Date('November 10, 2022 09:35:32'),
  end: new Date('November 10, 2022 12:35:32'),

},
{
  title: "Kandy to Mathale",
  start: new Date('November 15, 2022 01:35:32'),
  end: new Date('November 15, 2022 03:35:32'),
  
},
{
  title: "Anuradhapura to Jaffna",
  start: new Date('November 15, 2022 09:35:32'),
  end: new Date('November 15, 2022 12:35:32'),

},

{
  title: "Anuradhapura to Jaffna",
  start: new Date('November 08, 2022 09:35:32'),
  end: new Date('November 08, 2022 12:35:32'),

},
{
  title: "Kandy to Mathale",
  start: new Date('November 08, 2022 01:35:32'),
  end: new Date('November 08, 2022 03:35:32'),
  
},
{
  title: "Anuradhapura to Jaffna",
  start: new Date('November 07, 2022 09:35:32'),
  end: new Date('November 07, 2022 12:35:32'),

}
]

const Timetable = () => {

  const [newEvent, setNewEvent] = useState({ title:"", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

 

  function handleAddEvent() {
      
      setAllEvents([...allEvents, newEvent]);
  }


  const [value, onChange] = useState(new Date());





  return (
    <div>
     <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>


        <div>

        
    
    <div>
    
       

<div  className='newtravel'>
      
            <h2  >Add New Travel</h2>
           <div>
           <div class="row">
       <div class="col-md-7 ">
  <div class="form-group row">
    
    <label for="staticEmail" class=" col-form-label">Travel Title</label>
      <input type="text" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
  </div>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<div class="col-md-2 ">
  <div class="form-group row">
    <label for="inputPassword" class=" col-form-label">Travel start Time</label>
   
    <DatePicker  selected={newEvent.start}  onChange={(start) => setNewEvent({ ...newEvent, start })} showTimeSelect dateFormat="Pp" />
    
  </div>
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="col-md-2 ">
  <div class="form-group row">
    <label for="inputPassword" class=" col-form-label">Destination Time</label>
   
    <DatePicker  selected={newEvent.end}  onChange={(end) => setNewEvent({ ...newEvent, end })} showTimeSelect dateFormat="Pp" />
  
  </div>
  
  <button className="btn btn-dark m-3" onClick={handleAddEvent}>
                    Add Travel
               </button>

               </div>
            
            </div>

            </div>

</div>

<h2 className='header'>Travel TimeTable</h2>

<div className='calender'>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 600, margin: "50px" }} />
        </div>
    </div>
  ); 
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          </div>   



      





      </div>
    </div>


    </div>
  )
}

export default Timetable 