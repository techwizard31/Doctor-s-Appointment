import React from "react";
import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topmost from "../components/Topmost";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast, Slide } from "react-toastify";
import Familymember from "../components/Familymember";

function Userinfo() {
  const navigate = useNavigate();
  const onMeddicalText1Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onMeddicalTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onAppointmentTextClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  const onDoctorsText1Click = useCallback(() => {
    navigate("/doctors");
  }, [navigate]);

  const onServicesText1Click = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const [job, setJob] = useState("");
  const [address, setAddress] = useState("");
  const [open,setOpen]= useState(false)

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div className="w-[9.813rem] h-[6.438rem] relative bg-silver-200 hidden" />
      <Topmost
        everydayDebugCommit="unset"
        frameDivDebugCommit="unset"
        onMeddicalText1Click={onMeddicalText1Click}
      />
      <Navbar />
      <div className="container mx-auto mt-4">
        <div className="flex flex-row justify-between px-4 bg-slate-300">
          <h1 className="text-3xl font-semibold mb-4 text-primary hover:cursor-pointer">
            Your Appointments
          </h1>
          <h1 className="text-3xl font-semibold mb-4 text-primary underline hover:cursor-pointer">
            Personal Information
          </h1>
        </div>
        <div className="flex flex-col bg-slate-200 w-full h-fit items-center">
          <div className="flex flex-col w-4/5">
            <div className="flex flex-col justify-start w-3/5 mx-auto items-center">
              <p className="block text-left text-3xl font-bold text-primary ">
                Occupation:
              </p>
              <input
                type="text"
                placeholder="Occupation"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className="bg-slate-100 w-1/2 h-8 px-2 rounded"
              />
            </div>
            <div className="flex flex-row justify-around">
              <div className="flex flex-col justify-start w-3/5 mx-auto items-center">
                <p className="block text-left text-3xl font-bold text-primary">
                  Address:
                </p>
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-slate-100 w-full h-8 px-2 rounded"
                />
              </div>
              <div className="flex flex-col justify-start w-1/5 mx-auto items-center">
                <p className="block text-left text-3xl font-bold text-primary">
                  Pincode
                </p>
                <input
                  type="number"
                  placeholder="Pincode"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-slate-100 w-full h-8 px-2 rounded"
                />
              </div>
            </div>
            <div className="flex flex-row mt-2">
              <button
                className="w-1/5 bg-secondary text-white mx-auto h-8 my-4 rounded text-center font-bold hover:bg-white hover:text-secondary hover:transition-colors cursor-pointer"
                // disabled={button}
                // onClick={() => handleAppointment()}
              >
                Save
              </button>
              <button
                className="w-1/5 bg-secondary text-white mx-auto h-8 my-4 rounded text-center font-bold hover:bg-white hover:text-secondary hover:transition-colors cursor-pointer"
                // disabled={button}
                // onClick={() => handleAppointment()}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex h-fit bg-slate-200 w-full flex-col items-center" onClick={()=>setOpen(true)}>
        <h1 className="font-semibold mb-4 text-primary underline">Add Family Members</h1>
        <div className="flex flex-row bg-lightsteelblue-100 rounded-lg shadow-md p-2 w-2/3 items-center justify-center gap-9 mb-6 cursor-pointer hover:scale-110 transition-transform duration-500">
        <span className="material-symbols-outlined scale-[2.0]">person_add</span>
         <h1 className="text-primary">Add a Member</h1>
        </div>
      </div>
     {open && <Familymember open={open} onClose={() => setOpen(false)} />}
      <Footer
        onMeddicalTextClick={onMeddicalTextClick}
        onAppointmentTextClick={onAppointmentTextClick}
        onDoctorsText1Click={onDoctorsText1Click}
        onServicesText1Click={onServicesText1Click}
        onAboutUsText1Click={onAboutUsText2Click}
      />
    </div>
  );
}

export default Userinfo;
