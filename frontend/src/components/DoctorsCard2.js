import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DoctorsCard2 = ({ doctor, segment }) => {
  // console.log(segment)

  const getFormattedDate = (day) => {
    // Get today's date
    const today = new Date();

    // Get the day index of the selected day
    const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day);

    // Calculate the date of the selected day
    const date = new Date(today);
    date.setDate(today.getDate() + (dayIndex - today.getDay() + 7) % 7);

    // Format the date (e.g., "Mon, 01 Jan 2022")
    return date.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
  };


  const timeSlotsPerDay = {
    Monday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
    Tuesday: ['9:30 AM', '10:30 AM', '11:30 AM', '2:30 PM', '3:30 PM'],
    Wednesday: ['9:15 AM', '10:15 AM', '11:15 AM', '2:15 PM', '3:15 PM'],
    Thursday: ['9:45 AM', '10:45 AM', '11:45 AM', '2:45 PM', '3:45 PM'],
    Friday: ['9:20 AM', '10:20 AM', '11:20 AM', '2:20 PM', '3:20 PM'],
    Saturday: ['9:10 AM', '10:10 AM', '11:10 AM', '2:10 PM', '3:10 PM'],
    Sunday: ['9:40 AM', '10:40 AM', '11:40 AM', '2:40 PM', '3:40 PM'],
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    setSelectedDay(day);
    setAvailableTimeSlots(timeSlotsPerDay[day]);
  };

  return (
    <div className="h-[32.625rem] w-[19.813rem] flex flex-col items-start justify-start min-w-[18.813rem] text-left text-[1.125rem] text-primary font-body">
      <img
        className="self-stretch flex-1  relative rounded-t-8xs rounded-b-none max-w-full overflow-hidden object-fit max-h-full"
        loading="lazy"
        alt=""
        src='/rectangle-20@2x.png'
      />
      <div className="self-stretch flex flex-col items-center justify-start py-[1.5rem] pr-[1.25rem] pl-[1.375rem] relative gap-[0.5rem]">
        <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-lightsteelblue-100" />
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.25rem] pl-[0.125rem]">
          <div className="relative leading-[140%] z-[1] font-bold">{doctor.Name}</div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1rem]">

          <div className="p-4 z-[200] bg-gray-100 rounded-md ">
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 ">Select a date:</label>
              <DatePicker
                id="date"
                selected={selectedDate}
                onChange={handleDateChange}
                className="mt-1 px-3 py-2 block mx-auto border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary focus:outline-none"
                dateFormat="MM/dd/yyyy"
                wrapperClassName="w-full"
                minDate={new Date()}
              />


            </div>

            {selectedDate !== null ? (
              <div className="mb-4">
                <p className="text-sm text-gray-700">Selected Day: {selectedDay}</p>
                <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700">Available Time Slots:</label>
                <select
                  id="timeSlot"
                  className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary focus:outline-none"
                  disabled={availableTimeSlots.length === 0}
                >
                  {availableTimeSlots.length === 0 ? (
                    <option value="">No time slots available</option>
                  ) : (
                    <>
                      <option value="">Select a time slot</option>
                      {availableTimeSlots.map((timeSlot) => (
                        <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
                      ))}
                    </>
                  )}
                </select>
              </div>
            ) : (


              <div className="mb-4">
                <p className="text-sm text-gray-700">No Day selected</p>
                <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700">Available Time Slots:</label>

                <select
                  id="date"
                  className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary focus:outline-none"
                  value=""
                  disabled
                >
                  <option value="" disabled>Select a date first</option>
                  {/* Additional options can be added here */}
                  <option value="no-date" disabled>No date selected first</option>
                </select></div>
            )}
          </div>


          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0.687rem]">
            <div className="flex flex-row items-start justify-start gap-[1.25rem]">
              <img
                className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
                alt=""
                src="/vector-21.svg"
              />
              <img
                className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
                alt=""
                src="/vector-31.svg"
              />
              <img
                className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
                alt=""
                src="/vector-4.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.25rem] bg-[transparent] self-stretch flex flex-row items-start justify-center relative  whitespace-nowrap ">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-t-none rounded-b-8xs bg-primary hover:bg-primary-200" />
        <div className="relative text-[1rem] leading-[140%] font-body text-lightsteelblue-100  text-center inline-block min-w-[5.813rem] z-[1]">
          Book Appointment
        </div>
      </button>

    </div>
  )
}
  ;

export default DoctorsCard2;
