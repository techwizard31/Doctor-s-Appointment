import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import MapperFunction from "../components/MapperFunction";
// import ShapeSet from "../components/ShapeSet";
import DoctorsCard from "../components/DoctorsCard";
import SmallNews from "../components/SmallNews";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const onMeddicalTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAppointmentTextClick = useCallback(() => {
    const patientJSON = sessionStorage.getItem("Patient");
        if (!patientJSON) {
            navigate("/login")
            } else {
              navigate("/appointment")
        }
  }, [navigate]);

  const onDoctorsText1Click = useCallback(() => {
    navigate("/doctors");
  }, [navigate]);

  const onServicesText1Click = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onAboutUsText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div className="w-[62.625rem] h-[32.875rem] relative rounded-8xs bg-gray-100 hidden max-w-full" />
      <FrameComponent3 />
      <div className="w-[9.813rem] h-[6.438rem] relative bg-silver-200 hidden" />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <MapperFunction />
      {/* <ShapeSet /> */}
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq450:pb-[1.688rem] mq450:box-border mq1050:pb-[2.625rem] mq1050:box-border">
        <div className="w-[62rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4rem] mq750:gap-[1rem] mq1050:gap-[2rem]">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem]">
              <div className="flex flex-col items-end justify-start gap-[0.5rem]">
                <div className="flex flex-row items-start justify-end py-[0rem] pr-[0.687rem] pl-[0.812rem]">
                  <b className="relative tracking-[0.16em] uppercase">
                    Trusted Care
                  </b>
                </div>
                <h1 className="m-0 relative text-[2rem] font-normal font-display-2 text-primary mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  Our Doctors
                </h1>
              </div>
            </div>
            <div className="self-stretch grid flex-row items-start justify-start gap-[1.281rem] grid-cols-[repeat(3,_minmax(238px,_1fr))] mq450:grid-cols-[minmax(238px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(238px,_412px))]">
              <DoctorsCard rectangle20="/rectangle-20@2x.png" />
              <DoctorsCard rectangle20="/rectangle-20-1@2x.png" />
              <DoctorsCard rectangle20="/rectangle-20-2@2x.png" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <div className="flex flex-row items-start justify-start gap-[0.625rem]">
              <div className="h-[1.125rem] w-[1.125rem] relative rounded-31xl bg-lightsteelblue-100" />
              <div className="h-[1.125rem] w-[1.125rem] relative rounded-31xl bg-primary" />
              <div className="h-[1.125rem] w-[1.125rem] relative rounded-31xl bg-lightsteelblue-100" />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq750:pb-[2.625rem] mq750:box-border">
        <div className="flex-1 flex flex-col items-center justify-start py-[4rem] px-[1.25rem] box-border relative gap-[4rem] max-w-full mq750:gap-[1rem] mq750:pt-[2.625rem] mq750:pb-[2.625rem] mq750:box-border mq1050:gap-[2rem]">
          <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-100" />
          <div className="w-[62rem] flex flex-row items-start justify-center max-w-full">
            <div className="w-[28.25rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full z-[1]">
              <b className="relative tracking-[0.16em] uppercase">
                Better information, Better health
              </b>
              <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] text-[2rem] text-primary font-display-2">
                <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[5.313rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  News
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[62rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.25rem] max-w-full z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[19.75rem] max-w-full">
                <SmallNews />
                <SmallNews propBoxShadow="unset" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[19.75rem] max-w-full">
                <SmallNews propBoxShadow="unset" />
                <SmallNews propBoxShadow="unset" />
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
      <Footer
        onMeddicalTextClick={onMeddicalTextClick}
        onAppointmentTextClick={onAppointmentTextClick}
        onDoctorsText1Click={onDoctorsText1Click}
        onAboutUsText1Click={onAboutUsText1Click}
      />
    </div>
  );
};

export default Home;
