import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Topmost2 from "../components/Topmost2";
import NewsSection from "../components/NewsSection";
import Footer2 from "../components/Footer2";
import { useState } from "react";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async () => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_LINKED}/contact`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        content: content,
        subject: subject,
      }),
    });
    const json = await response.json();
    if (!response.ok) {
      alert(json.error);
    }
    if (response.ok) {
      alert("Thank you for your response");
      setName("");
      setEmail("");
      setSubject("");
      setContent("");
    }
  };

  const onMeddicalText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMeddicalTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAppointmentTextClick = useCallback(() => {
    navigate("/login");
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

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onDoctorsTextClick = useCallback(() => {
    navigate("/doctors");
  }, [navigate]);

  const onNewsTextClick = useCallback(() => {
    const patientJSON = sessionStorage.getItem("Patient");
    if (!patientJSON) {
      navigate("/login");
    } else {
      navigate("/myinfo");
    }
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    const patientJSON = sessionStorage.getItem("Patient");
    if (!patientJSON) {
      navigate("/login");
    } else {
      navigate("/appointment");
    }
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-[1rem] text-black1 font-body">
      <div className="w-[0rem] h-[0rem] relative hidden">
        <div className="absolute top-[0rem] left-[0rem] w-[0rem] h-[0rem]">
          <div className="absolute top-[22.063rem] left-[0rem] w-[0rem] h-[0rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[14.563rem] h-[2.25rem]" />
            <div className="absolute top-[0.563rem] left-[4.375rem]">
              View Profile
            </div>
          </div>
          <div className="absolute top-[16rem] left-[0rem] w-[0rem] h-[0rem] text-left text-[1.125rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-silver-100 w-[14.563rem] h-[6.063rem]" />
            <div className="absolute top-[1rem] left-[3.188rem]">
              Doctor’s Name
            </div>
            <div className="absolute top-[2.313rem] left-[4.875rem] text-[1rem]">
              Neurology
            </div>
            <div className="absolute top-[4rem] left-[4.313rem] w-[0rem] h-[0rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[1.594rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[3.188rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[4.781rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
            </div>
          </div>
          <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke w-[14.563rem] h-[16rem]" />
        </div>
        <div className="absolute top-[25.563rem] left-[0rem] w-[0rem] h-[0rem]">
          <div className="absolute top-[22.063rem] left-[0rem] w-[0rem] h-[0rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[14.563rem] h-[2.25rem]" />
            <div className="absolute top-[0.563rem] left-[4.375rem]">
              View Profile
            </div>
          </div>
          <div className="absolute top-[16rem] left-[0rem] w-[0rem] h-[0rem] text-left text-[1.125rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-silver-100 w-[14.563rem] h-[6.063rem]" />
            <div className="absolute top-[1rem] left-[3.188rem]">
              Doctor’s Name
            </div>
            <div className="absolute top-[2.313rem] left-[4.875rem] text-[1rem]">
              Neurology
            </div>
            <div className="absolute top-[4rem] left-[4.313rem] w-[0rem] h-[0rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[1.594rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[3.188rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[4.781rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
            </div>
          </div>
          <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke w-[14.563rem] h-[16rem]" />
        </div>
        <div className="absolute top-[0rem] left-[15.813rem] w-[0rem] h-[0rem]">
          <div className="absolute top-[22.063rem] left-[0rem] w-[0rem] h-[0rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[14.563rem] h-[2.25rem]" />
            <div className="absolute top-[0.563rem] left-[4.375rem]">
              View Profile
            </div>
          </div>
          <div className="absolute top-[16rem] left-[0rem] w-[0rem] h-[0rem] text-left text-[1.125rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-silver-100 w-[14.563rem] h-[6.063rem]" />
            <div className="absolute top-[1rem] left-[3.188rem]">
              Doctor’s Name
            </div>
            <div className="absolute top-[2.313rem] left-[4.875rem] text-[1rem]">
              Neurology
            </div>
            <div className="absolute top-[4rem] left-[4.313rem] w-[0rem] h-[0rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[1.594rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[3.188rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[4.781rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
            </div>
          </div>
          <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke w-[14.563rem] h-[16rem]" />
        </div>
        <div className="absolute top-[25.563rem] left-[15.813rem] w-[0rem] h-[0rem]">
          <div className="absolute top-[22.063rem] left-[0rem] w-[0rem] h-[0rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[14.563rem] h-[2.25rem]" />
            <div className="absolute top-[0.563rem] left-[4.375rem]">
              View Profile
            </div>
          </div>
          <div className="absolute top-[16rem] left-[0rem] w-[0rem] h-[0rem] text-left text-[1.125rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-silver-100 w-[14.563rem] h-[6.063rem]" />
            <div className="absolute top-[1rem] left-[3.188rem]">
              Doctor’s Name
            </div>
            <div className="absolute top-[2.313rem] left-[4.875rem] text-[1rem]">
              Neurology
            </div>
            <div className="absolute top-[4rem] left-[4.313rem] w-[0rem] h-[0rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[1.594rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[3.188rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[4.781rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
            </div>
          </div>
          <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke w-[14.563rem] h-[16rem]" />
        </div>
        <div className="absolute top-[0rem] left-[31.625rem] w-[0rem] h-[0rem]">
          <div className="absolute top-[22.063rem] left-[0rem] w-[0rem] h-[0rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[14.563rem] h-[2.25rem]" />
            <div className="absolute top-[0.563rem] left-[4.375rem]">
              View Profile
            </div>
          </div>
          <div className="absolute top-[16rem] left-[0rem] w-[0rem] h-[0rem] text-left text-[1.125rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-silver-100 w-[14.563rem] h-[6.063rem]" />
            <div className="absolute top-[1rem] left-[3.188rem]">
              Doctor’s Name
            </div>
            <div className="absolute top-[2.313rem] left-[4.875rem] text-[1rem]">
              Neurology
            </div>
            <div className="absolute top-[4rem] left-[4.313rem] w-[0rem] h-[0rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[1.594rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[3.188rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[4.781rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
            </div>
          </div>
          <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke w-[14.563rem] h-[16rem]" />
        </div>
        <div className="absolute top-[25.563rem] left-[31.625rem] w-[0rem] h-[0rem]">
          <div className="absolute top-[22.063rem] left-[0rem] w-[0rem] h-[0rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[14.563rem] h-[2.25rem]" />
            <div className="absolute top-[0.563rem] left-[4.375rem]">
              View Profile
            </div>
          </div>
          <div className="absolute top-[16rem] left-[0rem] w-[0rem] h-[0rem] text-left text-[1.125rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-silver-100 w-[14.563rem] h-[6.063rem]" />
            <div className="absolute top-[1rem] left-[3.188rem]">
              Doctor’s Name
            </div>
            <div className="absolute top-[2.313rem] left-[4.875rem] text-[1rem]">
              Neurology
            </div>
            <div className="absolute top-[4rem] left-[4.313rem] w-[0rem] h-[0rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[1.594rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[3.188rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[4.781rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
            </div>
          </div>
          <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke w-[14.563rem] h-[16rem]" />
        </div>
        <div className="absolute top-[0rem] left-[47.438rem] w-[0rem] h-[0rem]">
          <div className="absolute top-[22.063rem] left-[0rem] w-[0rem] h-[0rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[14.563rem] h-[2.25rem]" />
            <div className="absolute top-[0.563rem] left-[4.375rem]">
              View Profile
            </div>
          </div>
          <div className="absolute top-[16rem] left-[0rem] w-[0rem] h-[0rem] text-left text-[1.125rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-silver-100 w-[14.563rem] h-[6.063rem]" />
            <div className="absolute top-[1rem] left-[3.188rem]">
              Doctor’s Name
            </div>
            <div className="absolute top-[2.313rem] left-[4.875rem] text-[1rem]">
              Neurology
            </div>
            <div className="absolute top-[4rem] left-[4.313rem] w-[0rem] h-[0rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[1.594rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[3.188rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[4.781rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
            </div>
          </div>
          <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke w-[14.563rem] h-[16rem]" />
        </div>
        <div className="absolute top-[25.563rem] left-[47.438rem] w-[0rem] h-[0rem]">
          <div className="absolute top-[22.063rem] left-[0rem] w-[0rem] h-[0rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[14.563rem] h-[2.25rem]" />
            <div className="absolute top-[0.563rem] left-[4.375rem]">
              View Profile
            </div>
          </div>
          <div className="absolute top-[16rem] left-[0rem] w-[0rem] h-[0rem] text-left text-[1.125rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-silver-100 w-[14.563rem] h-[6.063rem]" />
            <div className="absolute top-[1rem] left-[3.188rem]">
              Doctor’s Name
            </div>
            <div className="absolute top-[2.313rem] left-[4.875rem] text-[1rem]">
              Neurology
            </div>
            <div className="absolute top-[4rem] left-[4.313rem] w-[0rem] h-[0rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[1.594rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[3.188rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
              <div className="absolute top-[0rem] left-[4.781rem] bg-darkgray w-[1.125rem] h-[1.125rem]" />
            </div>
          </div>
          <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke w-[14.563rem] h-[16rem]" />
        </div>
      </div>
      <div className="w-[9.813rem] h-[6.438rem] relative bg-silver-200 hidden" />
      <Topmost2 onMeddicalText1Click={onMeddicalText1Click} />
      <section className="self-stretch bg-primary flex flex-row items-start justify-between pt-[1.062rem] px-[11.593rem] pb-[1.125rem] box-border max-w-full gap-[1.25rem] text-left text-[1.125rem] text-white font-body mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1100:flex-wrap mq1100:justify-center mq750:pl-[5.75rem] mq750:pr-[5.75rem] mq750:box-border">
        <div className="w-[31rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] mq750:flex-wrap">
            <div
              className="relative inline-block min-w-[3.25rem] cursor-pointer"
              onClick={onHomeTextClick}
            >
              Home
            </div>
            <div
              className="flex-1 relative inline-block min-w-[3.25rem] cursor-pointer"
              onClick={onAboutUsTextClick}
            >
              About us
            </div>
            <div
              className="flex-1 relative inline-block min-w-[3rem] cursor-pointer"
              onClick={onServicesTextClick}
            >
              Services
            </div>
            <div
              className="flex-1 relative inline-block min-w-[3rem] cursor-pointer"
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
              className="flex-1 relative font-semibold text-lightsteelblue-100 inline-block min-w-[3rem] cursor-pointer"
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
      <section className="self-stretch h-[19.625rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-left text-[1.125rem] text-primary font-body">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[4.75rem] px-[11.687rem] box-border relative max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[5.813rem] mq750:pr-[5.813rem] mq750:box-border">
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
          <div className="flex flex-col items-start justify-start z-[3]">
            <div className="relative leading-[140%] shrink-0 [debug_commit:1de1738]">
              Home / Contact
            </div>
            <div className="w-[31.625rem] h-[1.375rem] relative hidden max-w-full text-[1rem] text-black1">
              <div className="absolute h-full w-[19.96%] top-[0%] right-[26.88%] bottom-[0%] left-[53.16%]">
                <div className="absolute top-[0%] left-[23.76%] leading-[140%]">
                  By Author
                </div>
                <img
                  className="absolute h-[81.82%] w-[15.84%] top-[9.09%] right-[84.16%] bottom-[9.09%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-210.svg"
                />
              </div>
              <div className="absolute h-full w-[48.42%] top-[0%] right-[51.58%] bottom-[0%] left-[0%]">
                <div className="absolute top-[0%] left-[9.8%] leading-[140%]">
                  Monday 05, September 2021
                </div>
                <img
                  className="absolute h-[80.91%] w-[6.53%] top-[9.09%] right-[93.47%] bottom-[10%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-209.svg"
                />
              </div>
              <div className="absolute h-full w-[8.7%] top-[0%] right-[13.44%] bottom-[0%] left-[77.87%]">
                <div className="absolute top-[0%] left-[54.55%] leading-[140%]">
                  68
                </div>
                <img
                  className="absolute h-[46.82%] w-[36.36%] top-[27.27%] right-[63.64%] bottom-[25.91%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-198.svg"
                />
              </div>
              <div className="absolute h-full w-[8.7%] top-[0%] right-[0%] bottom-[0%] left-[91.3%]">
                <div className="absolute top-[0%] left-[54.55%] leading-[140%]">
                  86
                </div>
                <img
                  className="absolute h-[64.55%] w-[36.36%] top-[18.18%] right-[63.64%] bottom-[17.27%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
            <div className="h-[3.188rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border text-[3rem] font-display-2">
              <h1 className="mt-[-0.25rem] m-0 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:1de1738] mq450:text-[1.813rem] mq1025:text-[2.375rem]">
                Our Contacts
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4rem] box-border max-w-full text-left text-[1.125rem] text-secondary font-body mq1100:pb-[2.625rem] mq1100:box-border mq750:pb-[1.688rem] mq750:box-border">
        <div className="w-[62rem] flex flex-col items-start justify-start gap-[4rem] max-w-full mq750:gap-[1rem] mq1025:gap-[2rem]">
          <img
            className="self-stretch h-[28.125rem] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/mapview@2x.png"
          />
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.25rem] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[2rem] min-w-[19.75rem] max-w-full mq750:gap-[1rem]">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <b className="relative tracking-[0.16em] uppercase">
                  Get in touch
                </b>
                <h1 className="m-0 relative text-[2rem] font-normal font-display-2 text-primary text-center inline-block min-w-[7.938rem] mq450:text-[1.188rem] mq1025:text-[1.625rem]">
                  Contact
                </h1>
              </div>
              <div className="self-stretch rounded-8xs bg-lightsteelblue-100 flex flex-col items-start justify-start gap-[0.062rem] max-w-full">
                <div className="self-stretch h-[24.25rem] relative rounded-8xs bg-lightsteelblue-100 hidden" />
                <div className="self-stretch flex flex-row items-start justify-start gap-[0.062rem] mq450:flex-wrap">
                  <input
                    className="w-full [border:none] [outline:none] bg-primary h-[3.125rem] flex-1 rounded-tl-8xs rounded-tr-none rounded-b-none flex flex-row items-start justify-start py-[0.875rem] px-[1.25rem] box-border font-body text-[1rem] text-white min-w-[9.875rem] z-[1]"
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="w-full [border:none] [outline:none] bg-primary h-[3.125rem] flex-1 rounded-tl-none rounded-tr-8xs rounded-b-none flex flex-row items-start justify-start pt-[0.937rem] px-[1.25rem] pb-[0.812rem] box-border font-body text-[1rem] text-white min-w-[9.875rem] z-[1]"
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-primary self-stretch h-[3.125rem] flex flex-row items-start justify-start pt-[0.937rem] px-[1.25rem] pb-[0.812rem] box-border font-body text-[1rem] text-white min-w-[15.625rem] z-[1]"
                  placeholder="Subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className="[border:none] bg-primary h-[14.688rem] w-auto [outline:none] self-stretch flex flex-row items-start justify-start py-[0.937rem] px-[1.25rem] box-border font-body text-[1rem] text-white z-[1]"
                  placeholder="Message"
                  rows={12}
                  cols={24}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <button
                  className="cursor-pointer [border:none] pt-[0.937rem] pb-[1rem] pr-[1.25rem] pl-[1.312rem] bg-lightsteelblue-100 self-stretch rounded-t-none rounded-b-8xs flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-lightsteelblue-200"
                  onClick={() => {
                    handleSubmit;
                  }}
                >
                  <div className="h-[3.125rem] w-[30.375rem] relative rounded-t-none rounded-b-8xs bg-lightsteelblue-100 hidden max-w-full" />
                  <div className="relative text-[1rem] uppercase font-medium font-body text-primary text-center inline-block min-w-[3.813rem] z-[1]">
                    Submit
                  </div>
                </button>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[1.25rem] min-w-[19.75rem] max-w-full text-primary mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[9.438rem]">
                <div className="self-stretch rounded-8xs bg-lightsteelblue-100 flex flex-col items-start justify-start pt-[6.562rem] px-[1.875rem] pb-[3.125rem] relative gap-[0.5rem]">
                  <div className="w-[14.563rem] h-[14.563rem] relative rounded-8xs bg-lightsteelblue-100 hidden z-[0]" />
                  <img
                    className="w-[2.513rem] h-[2.388rem] absolute !m-[0] top-[3.25rem] left-[1.625rem] z-[1]"
                    alt=""
                    src="/group-188-2.svg"
                  />
                  <b className="relative uppercase inline-block min-w-[7.063rem] z-[1]">
                    Emergency
                  </b>
                  <div className="flex flex-col items-start justify-start gap-[0.312rem] text-[1rem]">
                    <div className="relative leading-[140%] z-[1]">
                      7440086922
                    </div>
                    <a
                      className="relative leading-[140%] text-[inherit] [text-decoration:none] z-[1]"
                      href="mailto:fildineesoe@gmail.com"
                      target="_blank"
                    >
                      7440086922
                    </a>
                  </div>
                </div>
                <div className="self-stretch rounded-8xs bg-lightsteelblue-100 flex flex-col items-start justify-start pt-[3.562rem] pb-[3.5rem] pr-[1.375rem] pl-[1.875rem] gap-[1.156rem]">
                  <div className="w-[14.563rem] h-[14.563rem] relative rounded-8xs bg-lightsteelblue-100 hidden" />
                  <img
                    className="w-[2.213rem] h-[1.844rem] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/group-202.svg"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                    <b className="relative uppercase inline-block min-w-[3.563rem] z-[1]">
                      Email
                    </b>
                    <div className="flex flex-col items-start justify-start gap-[0.312rem] text-[1rem]">
                      <div className="relative leading-[140%] whitespace-nowrap z-[1]">
                        sanket@gmail.com
                      </div>
                      <div className="relative text-[0.875rem] whitespace-nowrap z-[1]">
                        istaprasad.patra@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[9.438rem] text-lightsteelblue-100">
                <div className="self-stretch rounded-8xs bg-primary flex flex-col items-start justify-start pt-[5.35rem] px-[1.875rem] pb-[3.125rem] relative gap-[0.5rem]">
                  <div className="w-[14.563rem] h-[14.563rem] relative rounded-8xs bg-primary hidden z-[0]" />
                  <img
                    className="w-[1.875rem] h-[2.25rem] absolute !m-[0] top-[3.313rem] left-[1.938rem] z-[1]"
                    alt=""
                    src="/group-178-11.svg"
                  />
                  <b className="relative uppercase inline-block min-w-[5.688rem] z-[1]">
                    Location
                  </b>
                  <div className="flex flex-col items-start justify-start gap-[0.212rem] text-[1rem]">
                    <div className="relative leading-[140%] z-[1]">
                      Old Town,Bhubaneswar
                    </div>
                    <a
                      className="relative leading-[140%] text-[inherit] [text-decoration:none] z-[1]"
                      href="mailto:fildineesoe@gmail.com"
                      target="_blank"
                    >
                      India
                    </a>
                  </div>
                </div>
                <div className="self-stretch rounded-8xs bg-lightsteelblue-100 flex flex-col items-start justify-start pt-[3.5rem] pb-[3.125rem] pr-[1.125rem] pl-[1.875rem] gap-[1.187rem] text-primary">
                  <div className="w-[14.563rem] h-[14.563rem] relative rounded-8xs bg-lightsteelblue-100 hidden" />
                  <img
                    className="w-[1.875rem] h-[1.875rem] relative z-[1]"
                    alt=""
                    src="/group-177-1.svg"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                    <b className="relative uppercase z-[1]">Working Hours</b>
                    <div className="flex flex-col items-start justify-start gap-[0.312rem] text-[1rem]">
                      <div className="relative leading-[140%] whitespace-nowrap z-[1]">
                        Mon-Sat 09:00-20:00
                      </div>
                      <div className="relative leading-[140%] z-[1]">
                        Sunday Emergency only
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsSection />
      <Footer2
        onMeddicalTextClick={onMeddicalTextClick}
        onAppointmentTextClick={onAppointmentTextClick}
        onDoctorsText1Click={onDoctorsText1Click}
        onServicesText1Click={onServicesText1Click}
        onAboutUsText2Click={onAboutUsText2Click}
      />
    </div>
  );
};

export default Contact;