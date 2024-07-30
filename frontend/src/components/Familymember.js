import React, { useState,useEffect } from "react";
import { toast, Slide } from "react-toastify";
import DatePicker from "react-datepicker";

function Familymember({open,onClose}) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  const [sex,setSex]= useState("")

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 z-50">
      <div className="flex flex-col w-1/2 h-fit bg-slate-200 items-center justify-start rounded scroll-m-0 scroll">
        <div className="flex flex-row justify-between w-full">
          <div className="flex-grow text-center pl-6">
            <h1 className="text-primary">Personal Details</h1>
          </div>
          <span className="material-symbols-outlined scale-125 mt-1 mr-1 cursor-pointer h-fit hover:bg-red-800 bg-transparent transition-transform duration-500 w-fit" onClick={onClose}>
            close
          </span>
        </div>
        <div className="flex flex-col justify-start items-center w-full mx-auto">
          <p className="block text-left text-xl font-semibold text-gray-700">
            Name:
          </p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-slate-100 w-3/5 h-8 px-2 rounded"
          />
        </div>
        <div className="flex flex-col w-full mx-auto items-center">
          <p className="block text-left text-xl font-semibold text-gray-700">
            Date of Birth:
          </p>
          <DatePicker
            id="date"
            selected={dob}
            onChange={(date) => setDob(date)}
            className="ml-10 py-2 block border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary focus:outline-none"
            dateFormat="MM/dd/yyyy"
            showYearDropdown
            showMonthDropdown
            wrapperClassName="w-1/3"
            popperPlacement="bottom"
          />
        </div>
        <div className="flex flex-col justify-start w-full mx-auto items-center">
          <p className="block text-left text-xl font-semibold text-gray-700">
            Phonenumber:
          </p>
          <input
            type="phonenumber"
            placeholder="phonenumber"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="bg-slate-100 w-2/5 h-8 px-2 rounded"
          />
        </div>
        <div className="flex flex-col justify-start w-full mx-auto items-center">
          <p className="block text-left text-xl font-semibold text-gray-700">
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
        <button
            className="w-1/3 bg-secondary text-white mx-auto h-8 my-8 rounded text-center font-bold hover:bg-white hover:text-secondary hover:transition-colors cursor-pointer text-base"
                // disabled={button}
                // onClick={() => handleAppointment()}
              >
                Save
              </button>
      </div>
    </div>
  );
}

export default Familymember;
