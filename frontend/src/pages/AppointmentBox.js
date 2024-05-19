import React from 'react'

function AppointmentBox() {
  const handleRescheduleappointment = async(appointment)=>{
    const patientJSON = localStorage.getItem('Patient')
    const patient = JSON.parse(patientJSON);
    // const cancelappointment = {_id: appointment._id,day: ,date: ,time: }
    // tereko appointment ka id access karna padega aur isme dena hoga
    try {
      const response = await fetch("http://localhost:4000/appointment/Patientreschedule", {
        method: "PATCH",
        body: JSON.stringify(cancelappointment),
        headers: {
          "Content-Type": "application/json",
          'Authorization':`Bearer ${patient.token}`
        },
      });
      const json = await response.json();
      // Is json ko kisi state me save kardena
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>AppointmentBox</div>
  )
}

export default AppointmentBox