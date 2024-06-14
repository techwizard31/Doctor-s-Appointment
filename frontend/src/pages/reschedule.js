import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Topmost1 from "../components/Topmost1";
import Footer1 from "../components/Footer1";
import "react-datepicker/dist/react-datepicker.css";
import GroupComponent from "../components/GroupComponent";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent3 from "../components/GroupComponent3";

function Reschedule() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [number, setNumber] = useState(0);
  const [sex, setSex] = useState("");
  const location = useLocation();
  const { appointment,doctor } = location.state;
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [availibility, setAvailibility] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [button, setButton] = useState(true);
  useEffect(() => {
    setName(appointment.patientname);
    setAge(appointment.Age);
    setNumber(appointment.phonenumber);
    setSex(appointment.Sex);
  }, []);
  const slots = doctor.workingDays;
  const timeSlotsPerDay = {};
  slots.map((slot) => {
    if (!timeSlotsPerDay[slot.Day]) {
      timeSlotsPerDay[slot.Day] = [];
    }
    timeSlotsPerDay[slot.Day].push(`${slot.startTime} - ${slot.endTime}`);
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
    // Reset selected time slot when day changes
    setSelectedTimeSlot("");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    setSelectedDay(day);
    if (timeSlotsPerDay[day] == undefined) {
      alert("Sir is not available on that day");
      setSelectedDay("");
      setSelectedDate(null);
    } else {
      setAvailableTimeSlots(timeSlotsPerDay[day]);
    }
  };
  const handleReschedule = async () => {
    const patientJSON = localStorage.getItem("Patient");
    const patient = JSON.parse(patientJSON);
    const patientId = patient._id;
    const appointments = {
      _id:appointment._id,
      patientname: name,
      Age: age,
      Sex: sex,
      phonenumber: number,
      day: selectedDay,
      time: selectedTimeSlot,
      department: doctor.department,
      date: selectedDate,
    };
    console.log(JSON.stringify(appointments))
    try {
      const response = await fetch( `${process.env.REACT_APP_LINKED}/appointment/Patientreschedule`,
        {
          method: "PATCH",
          body: JSON.stringify(appointments),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${patient.token}`,
          },
        }
      );
      if (!response.ok) {
        alert('Network response was not ok');
      }
      const json = await response.json();
      if (json && Object.keys(json).length > 0) {
        alert("Appointment Rescheduled");
        navigate("/myinfo");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const availibilitycheck = async () => {
    const patientJSON = localStorage.getItem("Patient");
    const patient = JSON.parse(patientJSON);
    const requests = {
      doctor_id: doctor._id,
      day: selectedDay,
      time: selectedTimeSlot,
      department: doctor.department,
      date: selectedDate,
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LINKED}/appointment/checkavailibility`,
        {
          method: "POST",
          body: JSON.stringify(requests),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${patient.token}`,
          },
        }
      );
      const json = await response.json();
      setAvailibility(json);
      if (json > 0) {
        setButton(false);
      }
    } catch (error) {
      alert(error.message);
    }
  };


  useEffect(() => {
    if (selectedTimeSlot) {
      if (!selectedTimeSlot.trim().includes(" - ")) {
        setAvailibility("");
      } else {
        availibilitycheck();
      }
    }
  }, [selectedTimeSlot]);
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-[1rem] text-black1 font-body">
      <Topmost1 />
      <section className="self-stretch bg-primary flex flex-row items-start justify-between pt-[1.062rem] px-[11.625rem] pb-[1.125rem] box-border max-w-full gap-[1.25rem] text-left text-[1.125rem] text-white font-body lg:flex-wrap lg:justify-center mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[5.813rem] mq750:pr-[5.813rem] mq750:box-border">
        <div className="w-[30.938rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] mq750:flex-wrap">
            <div
              className="relative inline-block min-w-[3.25rem] cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </div>
            <div
              className="flex-1 relative inline-block min-w-[3.25rem] cursor-pointer"
              onClick={() => {
                navigate("/about-us");
              }}
            >
              About us
            </div>
            <div className="flex-1 relative inline-block min-w-[3rem] cursor-pointer">
              Services
            </div>
            <div
              className="flex-1 relative inline-block min-w-[2.813rem] cursor-pointer"
              onClick={() => {
                navigate("/doctors");
              }}
            >
              Doctors
            </div>
            <div
              className="relative inline-block min-w-[3.063rem] cursor-pointer"
              onClick={() => {
                navigate("/myinfo");
              }}
            >
              MyInfo
            </div>
            <div
              className="flex-1 relative inline-block min-w-[2.813rem] cursor-pointer"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2rem] box-border max-w-full text-left text-[1.125rem] text-primary font-body">
        <div className="flex-1 flex flex-row items-start justify-start py-[4.75rem] px-[11.687rem] box-border relative min-h-[15.625rem] max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1050:pl-[5.813rem] mq1050:pr-[5.813rem] mq1050:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-3@2x.png"
            />
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-500 z-[1]" />
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[2]"
              loading="lazy"
              alt=""
              src="/group-203.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start max-w-full z-[3]">
            <div className="relative leading-[140%] shrink-0 [debug_commit:1de1738]">
              Home / Appointment
            </div>
            <div className="h-[3.188rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border text-[3rem] font-display-2">
              <h1 className="mt-[-0.25rem] m-0 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:1de1738] mq450:text-[1.813rem] mq1050:text-[2.375rem]">
                {doctor.Name.toUpperCase()}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col w-1/2 backdrop-blur-0 bg-slate-200 mx-auto rounded-lg mb-10">
        <h4 className="text-center text-[1.125rem] text-secondary font-body tracking-[0.1rem]">
          PATIENT DETAILS
        </h4>
        <div className="flex flex-row w-full">
          <div className="flex flex-col justify-start w-2/3">
            <div className="flex flex-col justify-start items-center w-full mx-auto">
              <p className="block text-left text-sm font-medium text-gray-700">
                Patient's Name:
              </p>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-slate-100 w-3/5 h-8 px-2 rounded"
              />
            </div>
            <div className="flex flex-col justify-start w-full mx-auto items-center">
              <p className="block text-left text-sm font-medium text-gray-700">
                Age:
              </p>
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="bg-slate-100 w-1/2 h-8 px-2 rounded"
              />
            </div>
            <div className="flex flex-col justify-start w-full mx-auto items-center">
              <p className="block text-left text-sm font-medium text-gray-700">
                Phonenumber:
              </p>
              <input
                type="phonenumber"
                placeholder="phonenumber"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="bg-slate-100 w-1/2 h-8 px-2 rounded"
              />
            </div>
            <div className="flex flex-col justify-start w-full mx-auto items-center">
              <p className="block text-left text-sm font-medium text-gray-700">
                Sex:
              </p>
              <select
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 disabled:opacity-50 w-1/5"
                id="sex"
                value={sex}
                onChange={(e) => {
                  setSex(e.target.value);
                }}
              >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col justify-start w-full mx-auto items-center">
              <p className="block text-left text-sm font-medium text-gray-700">
                Date For Appointment:
              </p>
              <DatePicker
                id="date"
                selected={selectedDate}
                onChange={handleDateChange}
                className="mt-1 px-3 py-2 block border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary focus:outline-none"
                dateFormat="MM/dd/yyyy"
                wrapperClassName="w-1/3"
                minDate={new Date()}
                popperPlacement="top"
              />
            </div>
            <div className="flex flex-col justify-start w-full mx-auto gap-4 py-3 items-center">
              <label
                htmlFor="timeSlot"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Select a time slot:
              </label>
              <select
                id="timeSlot"
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                disabled={!selectedDay}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 disabled:opacity-50 w-1/3"
              >
                <option value="Select a time">Select a time</option>
                {timeSlotsPerDay[selectedDay] &&
                  timeSlotsPerDay[selectedDay].map((timeslot) => {
                    return (
                      <option key={timeslot} value={timeslot}>
                        {timeslot}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="flex flex-row w-full mx-auto gap-1 justify-center pb-2">
              <p className="block text-left text-sm font-medium text-gray-700">
                Available-Slots:
              </p>
              <div className="block text-secondary text-left text-bg font-medium py-3">
                {availibility}
              </div>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-center flex-col">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Days for Appointment
            </label>
            {slots.map((slot) => {
              return (
                <div>
                  <p className="block text-sm font-medium text-gray-700">
                    {slot.Day} : {timeSlotsPerDay[slot.Day]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="w-1/5 bg-secondary text-white mx-auto h-8 mb-5 rounded text-center font-bold hover:bg-white hover:text-secondary hover:transition-colors cursor-pointer"
          disabled={button}
          onClick={() => handleReschedule()}
        >
          Reschedule
        </button>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq450:pb-[2.625rem] mq450:box-border">
        <div className="w-[62rem] flex flex-col items-start justify-start gap-[4rem] max-w-full mq750:gap-[1rem] mq1050:gap-[2rem]">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
              <b className="relative tracking-[0.16em] uppercase whitespace-nowrap">
                Get in touch
              </b>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.062rem] pl-[1rem] text-[2rem] text-primary font-display-2">
                <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[7.938rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  Contact
                </h1>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[1.25rem] mq1050:flex-wrap">
            <GroupComponent3 />
            <GroupComponent2 />
            <GroupComponent1 />
            <GroupComponent />
          </div>
        </div>
      </section>
      <Footer1 />
    </div>
  );
}

export default Reschedule;
