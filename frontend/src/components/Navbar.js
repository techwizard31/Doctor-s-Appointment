import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onDoctorsTextClick = useCallback(() => {
    navigate("/doctors");
  }, [navigate]);

  const onNewsTextClick = useCallback(() => {
    const patientJSON = sessionStorage.getItem("Patient");
        if (!patientJSON) {
            navigate("/login")
            } else {
              navigate("/myinfo")
        }
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    const patientJSON = sessionStorage.getItem("Patient");
        if (!patientJSON) {
            navigate("/login")
            } else {
              navigate("/appointment")
        }
  }, [navigate]);

  return (
    <section className="self-stretch bg-primary flex flex-row items-start justify-between pt-[1.062rem] px-[11.625rem] pb-[1.125rem] box-border max-w-full gap-[1.25rem] z-[4] text-left text-[1.125rem] text-white font-body mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[5.813rem] mq750:pr-[5.813rem] mq750:box-border mq1100:flex-wrap mq1100:justify-center">
      <div className="w-[30.938rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] mq750:flex-wrap">
          <div
            className="relative inline-block min-w-[3.25rem] cursor-pointer"
            onClick={onHomeTextClick}
          >
            Home
          </div>
          <div
            className="flex-1 relative font-semibold text-lightsteelblue-100 inline-block min-w-[3.25rem] cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About us
          </div>
          <div className="flex-1 relative inline-block min-w-[3rem]">
            Services
          </div>
          <div
            className="flex-1 relative inline-block min-w-[2.813rem] cursor-pointer"
            onClick={onDoctorsTextClick}
          >
            Doctors
          </div>
          <div
            className="relative inline-block min-w-[3.063rem] cursor-pointer"
            onClick={onNewsTextClick}
          >
            MyInfo
          </div>
          <div
            className="flex-1 relative inline-block min-w-[2.813rem] cursor-pointer"
            onClick={onContactTextClick}
          >
            Contact
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.875rem]">
        <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
          <input
            className="cursor-pointer m-0 w-[1.25rem] h-[1.25rem] relative"
            type="radio"
          />
        </div>
        <button
          className="cursor-pointer [border:none] py-[0.812rem] px-[2.187rem] bg-lightsteelblue-100 rounded-31xl flex flex-row items-start justify-start hover:bg-lightsteelblue-200"
          onClick={onButtonClick}
        >
          <div className="relative text-[1rem] font-medium font-body text-primary text-left inline-block min-w-[6.438rem]">
            Appointment
          </div>
        </button>
      </div>
    </section>
  );
};

export default Navbar;
