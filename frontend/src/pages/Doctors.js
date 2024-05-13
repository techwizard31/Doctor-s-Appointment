import { useCallback } from "react";
import Topmost1 from "../components/Topmost1";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import Testimonials from "../components/Testimonials";
import Footer1 from "../components/Footer1";

const Doctors = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
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
    // Please sync "News" to the project
  }, []);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/appointment");
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
      <Topmost1 />
      <section className="self-stretch bg-primary flex flex-row items-start justify-between pt-[1.062rem] px-[11.625rem] pb-[1.125rem] box-border max-w-full gap-[1.25rem] text-left text-[1.125rem] text-white font-body mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[5.813rem] mq750:pr-[5.813rem] mq750:box-border mq1125:flex-wrap mq1125:justify-center">
        <div className="w-[30.938rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border max-w-full">
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
              className="flex-1 relative font-semibold text-lightsteelblue-100 inline-block min-w-[2.813rem] cursor-pointer"
              onClick={onDoctorsTextClick}
            >
              Doctors
            </div>
            <div
              className="relative inline-block min-w-[3.063rem] cursor-pointer"
              onClick={onNewsTextClick}
            >
              News
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
      <FrameComponent6
        homeAbout="Home / Doctors"
        aboutUs="Our Doctors"
        homeAboutDisplay="unset"
        homeAboutMinWidth="unset"
      />
      <FrameComponent7 />
      <Testimonials />
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq750:pb-[2.625rem] mq750:box-border">
        <div className="flex-1 flex flex-col items-center justify-start py-[4rem] px-[1.25rem] box-border relative gap-[4rem] max-w-full mq750:gap-[1rem] mq750:pt-[2.625rem] mq750:pb-[2.625rem] mq750:box-border mq1050:gap-[2rem]">
          <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-100" />
          <div className="w-[62rem] flex flex-row items-start justify-center max-w-full">
            <div className="w-[28.25rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full z-[1]">
              <b className="relative tracking-[0.16em] uppercase">
                Better information, Better health
              </b>
              <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] text-[2rem] text-primary font-display-2">
                <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[5.313rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  News
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[62rem] flex flex-col items-start justify-start gap-[2rem] max-w-full text-left text-[0.875rem] mq750:gap-[1rem]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.25rem] max-w-full z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[19.75rem] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2rem] pl-[0rem] relative gap-[1.25rem] mq450:flex-wrap mq450:p-[1.25rem] mq450:box-border">
                  <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_0px_20px_rgba(0,_0,_0,_0.05)] rounded-8xs bg-white" />
                  <img
                    className="h-[9.625rem] w-[10rem] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs object-cover z-[1] mq450:flex-1"
                    loading="lazy"
                    alt=""
                    src="/rectangle-34@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[11.125rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] z-[1]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                        <div className="relative">
                          Monday 05, September 2021 | By Author
                        </div>
                        <div className="relative text-[1.125rem] leading-[140%] text-black">
                          <p className="m-0">{`This Article’s Title goes Here, `}</p>
                          <p className="m-0">but not too long.</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.625rem] text-black">
                        <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1rem] h-[0.644rem] relative"
                              alt=""
                              src="/group-198.svg"
                            />
                          </div>
                          <div className="relative inline-block min-w-[1.125rem]">
                            68
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1rem] h-[0.888rem] relative"
                              alt=""
                              src="/vector.svg"
                            />
                          </div>
                          <div className="relative inline-block min-w-[1.125rem]">
                            86
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2rem] pl-[0rem] relative gap-[1.25rem] mq450:flex-wrap mq450:p-[1.25rem] mq450:box-border">
                  <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-white" />
                  <img
                    className="h-[9.625rem] w-[10rem] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs object-cover z-[1] mq450:flex-1"
                    alt=""
                    src="/rectangle-34@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[11.125rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] z-[1]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                        <div className="relative">
                          Monday 05, September 2021 | By Author
                        </div>
                        <div className="relative text-[1.125rem] leading-[140%] text-black">
                          <p className="m-0">{`This Article’s Title goes Here, `}</p>
                          <p className="m-0">but not too long.</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.625rem] text-black">
                        <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1rem] h-[0.644rem] relative"
                              alt=""
                              src="/group-198.svg"
                            />
                          </div>
                          <div className="relative inline-block min-w-[1.125rem]">
                            68
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1rem] h-[0.888rem] relative"
                              alt=""
                              src="/vector.svg"
                            />
                          </div>
                          <div className="relative inline-block min-w-[1.125rem]">
                            86
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[19.75rem] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2rem] pl-[0rem] relative gap-[1.25rem] mq450:flex-wrap mq450:p-[1.25rem] mq450:box-border">
                  <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-white" />
                  <img
                    className="h-[9.625rem] w-[10rem] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs object-cover z-[1] mq450:flex-1"
                    alt=""
                    src="/rectangle-34@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[11.125rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] z-[1]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                        <div className="relative">
                          Monday 05, September 2021 | By Author
                        </div>
                        <div className="relative text-[1.125rem] leading-[140%] text-black">
                          <p className="m-0">{`This Article’s Title goes Here, `}</p>
                          <p className="m-0">but not too long.</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.625rem] text-black">
                        <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1rem] h-[0.644rem] relative"
                              alt=""
                              src="/group-198.svg"
                            />
                          </div>
                          <div className="relative inline-block min-w-[1.125rem]">
                            68
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1rem] h-[0.888rem] relative"
                              alt=""
                              src="/vector.svg"
                            />
                          </div>
                          <div className="relative inline-block min-w-[1.125rem]">
                            86
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2rem] pl-[0rem] relative gap-[1.25rem] mq450:flex-wrap mq450:p-[1.25rem] mq450:box-border">
                  <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-white" />
                  <img
                    className="h-[9.625rem] w-[10rem] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs object-cover z-[1] mq450:flex-1"
                    alt=""
                    src="/rectangle-34@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[11.125rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] z-[1]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                        <div className="relative">
                          Monday 05, September 2021 | By Author
                        </div>
                        <div className="relative text-[1.125rem] leading-[140%] text-black">
                          <p className="m-0">{`This Article’s Title goes Here, `}</p>
                          <p className="m-0">but not too long.</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.625rem] text-black">
                        <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1rem] h-[0.644rem] relative"
                              alt=""
                              src="/group-198.svg"
                            />
                          </div>
                          <div className="relative inline-block min-w-[1.125rem]">
                            68
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1rem] h-[0.888rem] relative"
                              alt=""
                              src="/vector.svg"
                            />
                          </div>
                          <div className="relative inline-block min-w-[1.125rem]">
                            86
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
              <div className="flex flex-row items-start justify-start gap-[0.625rem] z-[1]">
                <div className="h-[1.125rem] w-[1.125rem] relative rounded-31xl bg-lightsteelblue-100" />
                <div className="h-[1.125rem] w-[1.125rem] relative rounded-31xl bg-primary" />
                <div className="h-[1.125rem] w-[1.125rem] relative rounded-31xl bg-lightsteelblue-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq450:pb-[2.625rem] mq450:box-border">
        <div className="w-[62rem] flex flex-col items-start justify-start gap-[4rem] max-w-full mq750:gap-[1rem] mq1050:gap-[2rem]">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
              <b className="relative tracking-[0.16em] uppercase whitespace-nowrap">
                Get in touch
              </b>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.062rem] pl-[1rem] text-[2rem] text-primary font-display-2">
                <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[7.938rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  Contact
                </h2>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[1.25rem] text-left text-[1rem] text-primary mq1050:flex-wrap">
            <div className="flex-[0.9784] flex flex-row items-start justify-start pt-[3.25rem] px-[1.625rem] pb-[3.125rem] box-border relative min-w-[11.563rem] max-w-[14.563rem] mq450:flex-1">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-lightsteelblue-100" />
              <div className="flex flex-col items-start justify-start gap-[0.925rem] z-[1]">
                <img
                  className="w-[2.513rem] h-[2.388rem] relative"
                  alt=""
                  src="/group-188-2.svg"
                />
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.406rem]">
                    <b className="relative text-[1.125rem] uppercase inline-block min-w-[7.063rem]">
                      Emergency
                    </b>
                    <div className="relative leading-[140%]">
                      7440086922
                    </div>
                    <a
                      className="relative leading-[140%] text-[inherit] [text-decoration:none]"
                      href="mailto:fildineesoe@gmail.com"
                      target="_blank"
                    >
                      7440086922
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[0.9351] flex flex-row items-start justify-start pt-[2.312rem] px-[1.875rem] pb-[3.125rem] box-border relative min-w-[11.563rem] max-w-[14.563rem] text-lightsteelblue-100 mq450:flex-1">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-primary" />
              <div className="flex flex-col items-start justify-start gap-[1rem] z-[1]">
                <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
                  <img
                    className="h-[2.25rem] w-[1.875rem] relative"
                    alt=""
                    src="/group-178-1.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.406rem]">
                  <b className="relative text-[1.125rem] uppercase inline-block min-w-[5.688rem]">
                    Location
                  </b>
                  <div className="relative leading-[120%]">Old Town, Bhubaneswar</div>
                  <a
                    className="relative leading-[140%] text-[inherit] [text-decoration:none]"
                    href="mailto:fildineesoe@gmail.com"
                    target="_blank"
                  >
                    India
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-[0.9784] flex flex-row items-start justify-start pt-[3.562rem] pb-[3.5rem] pr-[1.375rem] pl-[1.875rem] box-border relative min-w-[11.563rem] max-w-[14.563rem] text-[1.125rem] mq450:flex-1">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-lightsteelblue-100" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.156rem] z-[1]">
                <img
                  className="w-[2.213rem] h-[1.844rem] relative"
                  loading="lazy"
                  alt=""
                  src="/group-202.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.406rem]">
                  <b className="relative uppercase inline-block min-w-[3.563rem]">
                    Email
                  </b>
                  <div className="relative text-[1rem] leading-[140%] whitespace-nowrap">
                    sanket@gmail.com
                  </div>
                  <div className="relative text-[0.875rem] whitespace-nowrap">
                    istaprasad.patra@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start pt-[3.5rem] pb-[3.125rem] pr-[1.125rem] pl-[1.875rem] box-border relative min-w-[11.563rem] max-w-[14.563rem]">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-lightsteelblue-100" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.187rem] z-[1]">
                <img
                  className="w-[1.875rem] h-[1.875rem] relative"
                  alt=""
                  src="/group-177-1.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.406rem]">
                  <b className="relative text-[1.125rem] uppercase">
                    Working Hours
                  </b>
                  <div className="relative leading-[140%] whitespace-nowrap">
                    Mon-Sat 09:00-20:00
                  </div>
                  <div className="relative leading-[140%]">
                    Sunday Emergency only
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default Doctors;
