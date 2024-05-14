import { useState } from "react";
const DoctorsCard2 = ({ doctor, segment }) => {

const slots = doctor.workingDays;
const timeSlotsPerDay = {};
slots.map((slot)=>{
  if (!timeSlotsPerDay[slot.Day]) {
    timeSlotsPerDay[slot.Day] = [];
}
timeSlotsPerDay[slot.Day].push(`${slot.startTime} - ${slot.endTime}`);
})

console.log(timeSlotsPerDay);
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
    // Reset selected time slot when day changes
    setSelectedTimeSlot('');
  };

  const handleTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
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


          <div className="z-[200] flex flex-col gap-4 ">
            <div className="flex flex-col gap-2 "> <label htmlFor="day">Select a day:</label>
              <select id="day" value={selectedDay} onChange={handleDayChange}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 disabled:opacity-50"
              >
                {Object.keys(timeSlotsPerDay).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select></div>

            <div className="flex flex-col gap-2">
              <label htmlFor="timeSlot">Select a time slot:</label>
              <select
                id="timeSlot"
                value={selectedTimeSlot}
                onChange={handleTimeSlotChange}
                disabled={!selectedDay}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 disabled:opacity-50"
              >
                <option value="">Select a time</option>
               {timeSlotsPerDay[selectedDay] && timeSlotsPerDay[selectedDay].map((timeslot)=>{
               return (<option key={timeslot} value={timeslot}>
                    {timeslot}
                </option>)
                })}
              </select>
            </div>

            {/* {selectedTimeSlot && (
              <p>
                You have selected {selectedTimeSlot} on {selectedDay}.
              </p>
            )} */}
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
