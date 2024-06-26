import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topmost from "../components/Topmost";
import Navbar from "../components/Navbar";
// import FrameComponent6 from "../components/FrameComponent6";
// import FrameComponent5 from "../components/FrameComponent5";
// import FrameComponent4 from "../components/FrameComponent4";
// import DoctorsCard from "../components/DoctorsCard";
// import SmallNews from "../components/SmallNews";
// import GroupComponent3 from "../components/GroupComponent3";
// import GroupComponent2 from "../components/GroupComponent2";
// import GroupComponent1 from "../components/GroupComponent1";
// import GroupComponent from "../components/GroupComponent";
import Footer from "../components/Footer";

const UserView = () => {
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

  const handleReschedule = async (appointment) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_LINKED}/doctordetail`, {
        method: "POST",
        body: JSON.stringify({ doctor_id: appointment.doctor_id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const json = await response.json();
        const doctor = json;
        navigate("/reschedule", { state: { appointment, doctor } });
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCancel = async (appointment) => {
    try {
      const patientJSON = localStorage.getItem("Patient");
      const patient = JSON.parse(patientJSON);
      const cancelappointment = { _id: appointment._id };
      const response = await fetch(
        `${process.env.REACT_APP_LINKED}/appointment/cancelappointment`,
        {
          method: "DELETE",
          body: JSON.stringify(cancelappointment),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${patient.token}`,
          },
        }
      );
      const json = await response.json();
      window.location.reload();
      if (json.success) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const [appointments, setAppointments] = useState([]);

  const handleMyAppointments = async () => {
    const patientJSON = localStorage.getItem("Patient");
    const patient = JSON.parse(patientJSON);
    const patientId = patient._id;
    const myappointment = { patient_id: patientId };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LINKED}/appointment/myappointments`,
        {
          method: "POST",
          body: JSON.stringify(myappointment),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${patient.token}`,
          },
        }
      );
      const json = await response.json();
      setAppointments(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const patientJSON = localStorage.getItem("Patient");
    if (!patientJSON) {
      navigate("/login");
    } else {
      handleMyAppointments();
    }
  }, []); // Empty dependency array ensures the effect runs only once

  const nicedate = (dateStr) => {
    const date = new Date(dateStr);
    // Format options for date
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    // Format options for time
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    // Format the date and time separately
    const formattedDate = date.toLocaleDateString(undefined, dateOptions);
    const formattedTime = date.toLocaleTimeString(undefined, timeOptions);

    // Combine date and time
    const formattedDateTime = `${formattedDate}, ${formattedTime}`;

    return formattedDateTime// Example output: June 25, 2024, 6:30:00 PM
  };
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div className="w-[9.813rem] h-[6.438rem] relative bg-silver-200 hidden" />
      <Topmost
        everydayDebugCommit="unset"
        frameDivDebugCommit="unset"
        onMeddicalText1Click={onMeddicalText1Click}
      />
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4 text-primary">
          Your Appointments
        </h1>
        <div className="grid grid-cols-1 gap-4 justify-items-center pb-4">
          {appointments &&
            appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-lightsteelblue-100 rounded-lg shadow-md p-4 w-5/6"
              >
                <h2 className="text-xl font-semibold mb-2 text-primary">
                  {appointment.patientname}
                </h2>
                <p className="text-gray-600 mb-2">Date: {nicedate(appointment.date)}</p>
                <p className="text-gray-600 mb-4">Time: {appointment.time}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleReschedule(appointment)}
                    className="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer hover:text-primary hover:transition-colors hover:bg-white"
                  >
                    Reschedule
                  </button>
                  <button
                    onClick={() => handleCancel(appointment)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          {!appointments && <p>No appointments found.</p>}
        </div>
      </div>

      <Footer
        onMeddicalTextClick={onMeddicalTextClick}
        onAppointmentTextClick={onAppointmentTextClick}
        onDoctorsText1Click={onDoctorsText1Click}
        onServicesText1Click={onServicesText1Click}
        onAboutUsText1Click={onAboutUsText2Click}
      />
    </div>
  );
};

export default UserView;
