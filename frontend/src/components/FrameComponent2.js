import { useCallback } from "react";

const FrameComponent2 = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  return (
    <section className="self-stretch flex flex-row items-end justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-left text-[1.125rem] text-secondary font-body mq750:pb-[2.625rem] mq750:box-border">
      <div className="w-[85.375rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.125rem] box-border min-h-[37.5rem] max-w-full mq750:pb-[2rem] mq750:box-border">
        <div className="self-stretch flex flex-col items-start justify-start py-[10.437rem] px-[11.625rem] box-border relative gap-[2rem] max-w-full mq450:gap-[1rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pt-[6.813rem] mq750:pb-[6.813rem] mq750:box-border mq1050:pl-[5.813rem] mq1050:pr-[5.813rem] mq1050:box-border">
          <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
            <div className="absolute h-full w-full top-[34.375rem] right-[-85.375rem] bottom-[-34.375rem] left-[85.375rem] bg-turquoise [transform:_rotate(180deg)] [transform-origin:0_0]" />
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
              alt=""
              src="/physician-trends-2021-merritt-hawkins-1@2x.png"
            />
            <div className="absolute h-full w-full top-[34.375rem] right-[-85.375rem] bottom-[-34.375rem] left-[85.375rem] [background:linear-gradient(268.24deg,_#e5e4e8_8.79%,_rgba(235,_234,_239,_0))] [transform:_rotate(180deg)] [transform-origin:0_0] z-[2]" />
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[3]"
              alt=""
              src="/frame-1.svg"
            />
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[4]"
              alt=""
              src="/physician-trends-2021-merritt-hawkins-2@2x.png"
            />
          </div>
          <img
            className="w-[85.375rem] h-[34.375rem] relative object-contain hidden max-w-full z-[1]"
            alt=""
            src="/rectangle-5@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
              <b className="relative tracking-[0.16em] uppercase z-[5]">
                Caring for Life
              </b>
            </div>
            <h1 className="m-0 relative text-[3rem] font-normal font-display-2 text-primary z-[5] mq450:text-[1.813rem] mq1050:text-[2.375rem]">
              <p className="m-0">Leading the Way</p>
              <p className="m-0">in Medical Excellence</p>
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
            <button
              className="cursor-pointer [border:none] py-[0.812rem] px-[2.187rem] bg-lightsteelblue-100 rounded-31xl flex flex-row items-start justify-start whitespace-nowrap z-[5] hover:bg-lightsteelblue-200"
              onClick={onButtonClick}
            >
              <div className="relative text-[1rem] font-medium font-body text-primary text-left inline-block min-w-[6.25rem]">
                Our Services
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[62rem] flex flex-row flex-wrap items-start justify-start gap-[1.281rem] max-w-full z-[6] ml-[-73.688rem] text-[1rem] text-white">
        <div className="flex-1 rounded-8xs bg-primary flex flex-row items-start justify-between py-[1.562rem] px-[1.25rem] box-border min-w-[13.813rem] gap-[1.25rem]">
          <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem]">
            <div className="relative leading-[140%]">Book an Appointment</div>
          </div>
          <img
            className="h-[3.125rem] w-[3.125rem] relative"
            alt=""
            src="/39calendar.svg"
          />
          <img
            className="h-[0rem] w-[0rem] relative hidden"
            alt=""
            src="/27team.svg"
          />
          <img
            className="h-[0rem] w-[0rem] relative hidden"
            alt=""
            src="/15cash.svg"
          />
        </div>
        <div className="flex-1 rounded-8xs bg-lightsteelblue-100 flex flex-row items-start justify-between py-[1.806rem] px-[1.25rem] box-border min-w-[13.813rem] gap-[1.25rem] text-primary">
          <div className="flex flex-col items-start justify-start pt-[0.631rem] px-[0rem] pb-[0rem]">
            <div className="relative leading-[140%]">Book an Appointment</div>
          </div>
          <img
            className="h-[0rem] w-[0rem] relative hidden"
            alt=""
            src="/39calendar1.svg"
          />
          <img
            className="h-[2.638rem] w-[3.125rem] relative"
            alt=""
            src="/27team1.svg"
          />
          <img
            className="h-[0rem] w-[0rem] relative hidden"
            alt=""
            src="/15cash.svg"
          />
        </div>
        <div className="flex-1 rounded-8xs bg-secondary flex flex-row items-start justify-between pt-[1.987rem] px-[1.25rem] pb-[1.981rem] box-border min-w-[13.813rem] gap-[1.25rem]">
          <div className="flex flex-col items-start justify-start pt-[0.45rem] px-[0rem] pb-[0rem]">
            <div className="relative leading-[140%]">Book an Appointment</div>
          </div>
          <img
            className="h-[0rem] w-[0rem] relative hidden"
            alt=""
            src="/39calendar.svg"
          />
          <img
            className="h-[0rem] w-[0rem] relative hidden"
            alt=""
            src="/27team.svg"
          />
          <img
            className="h-[2.281rem] w-[3.125rem] relative"
            alt=""
            src="/15cash1.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
