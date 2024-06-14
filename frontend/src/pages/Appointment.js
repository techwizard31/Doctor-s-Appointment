import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Topmost2 from "../components/Topmost2";
import Footer2 from "../components/Footer2";
import MapperFunction1 from "../components/MapperFunction1";
import Aibox from "../components/Aibox";
import Searchbox from "./Searchbox";

const Appointment = () => {
  const navigate = useNavigate();

  const onMeddicalText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMeddicalTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAppointmentTextClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  const onDoctorsText1Click = useCallback(() => {
    navigate("/doctors");
  }, [navigate]);

  const onServicesText1Click = useCallback(() => {
    //  sync "Services" 
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
    // sync "Services" 
  }, []);

  const onDoctorsTextClick = useCallback(() => {
    navigate("/doctors");
  }, [navigate]);

  const onNewsTextClick = useCallback(() => {
    navigate("/myinfo"); 
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-[1rem] text-black1 font-body">
      <Topmost2
        propDebugCommit="unset"
        propDebugCommit1="unset"
        onMeddicalText1Click={onMeddicalText1Click}
      />
      <section className="self-stretch bg-primary flex flex-row items-start justify-between pt-[1.062rem] px-[11.625rem] pb-[1.125rem] box-border max-w-full gap-[1.25rem] text-left text-[1.125rem] text-white font-body lg:flex-wrap lg:justify-center mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[5.813rem] mq750:pr-[5.813rem] mq750:box-border">
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
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-left text-[1.125rem] text-primary font-body">
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
                Book an Appointment
              </h1>
            </div>
          </div>
        </div>
      </section>
      <MapperFunction1 />
      <Aibox />
      <Searchbox />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4rem] box-border max-w-full text-left text-[2rem] text-primary font-display-2 lg:pb-[2.625rem] lg:box-border mq450:pb-[1.25rem] mq450:box-border mq1050:pb-[1.688rem] mq1050:box-border">
        <div className="w-[62rem] flex flex-col items-start justify-start gap-[4rem] max-w-full mq750:gap-[1rem] mq1050:gap-[2rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4rem] text-center text-[1.125rem] text-secondary font-body mq750:gap-[1rem] mq1050:gap-[2rem]">
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
                    <div className="relative leading-[120%]">
                      Old Town, Bhubaneswar
                    </div>
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
        </div>
      </section>
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

export default Appointment;