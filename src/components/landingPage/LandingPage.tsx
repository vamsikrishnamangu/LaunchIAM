import React from "react";
import Logo from "../atoms/Logo/Logo";
import Demo from "../atoms/Demo/Demo";
import ViewProduct from "../atoms/ViewProduct/ViewProduct";
import HeadingTag from "../atoms/HeadingTag/HeadingTag";

const LandingPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Logo />
        <Demo />
      </div>
      <div style={{ backgroundImage: "url('/bg_final.png')" }}>
        <div className="ml-56">
          <div className="flex flex-row justify-between">
            <div>
              <HeadingTag />
              <br />
              <ViewProduct />
            </div>
            <div className="mr-44">
              <img src="./QA.png" alt="QA" />
            </div>
          </div>
          <div className="my-20">
            <h1 className="text-[#263238] font-bold text-6xl">Features</h1>
          </div>
          <div className="flex flex-row justify-between mr-56 pb-10">
            <div className="flex flex-col justify-center items-start">
              <div className="my-10">
                <img src="./automated.png" alt="logo" />
              </div>
              <h1 className="my-6 text-2xl font-bold text-[#263238] w-96">
                Automated Regression Testing:
              </h1>
              <p className="text-lg font-normal text-[#888E91] w-96">
                Effortlessly conduct regression testing with our powerful
                automation framework. Save valuable time and resources while
                achieving accurate test results with minimal human intervention.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <div className="my-10">
                <img src="./lock.png" alt="logo" />
              </div>
              <h1 className="my-6 text-2xl font-bold text-[#263238] w-96">
                Enhanced Security for testing and production support:
              </h1>
              <p className="text-lg font-normal text-[#888E91] w-96">
                Ensure your IAM system meets the highest security standards and
                compliance regulations. With LaunchIAM, rest assured that your
                user data remains protected.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <div className="my-10">
                <img src="./circuit.png" alt="logo" />
              </div>
              <h1 className="my-6 text-2xl font-bold text-[#263238] w-96">
                Seamless Integration:
              </h1>
              <p className="text-lg font-normal text-[#888E91] w-96">
                LaunchIAM seamlessly integrates with your existing IAM
                infrastructure. No need for disruptive changes - start improving
                your regression testing process from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="leading-normal ml-56 mt-9 font-bold text-5xl w-[38rem] mb-20">
        <h1>We have got a plan That's perfect for you</h1>
      </div>
      <div className="ml-56 my-28 flex flex-row justify-between">
        <div className="mb-24 p-14 border border-1 border-[#999999] rounded-xl h-[42rem] w-[35rem]">
          <h6 className="mb-9">Tier-1</h6>
          <h1 className="text-[#263238] text-6xl">
            $1500 <span className="text-xl text-center">/Month</span>
          </h1>
          <h1 className="my-8 text-4xl font-medium text-[#373737]">Features</h1>
          <div className="flex flex-row items-center">
            <div className="mx-4 my-4">
              <img src="./star.png" alt="star" />
            </div>
            <p className="text-2xl">CIAM</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="mx-4 my-4">
              <img src="./star.png" alt="star" />
            </div>
            <p className="text-2xl">3 Licenses</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="mx-4 my-4">
              <img src="./star.png" alt="star" />
            </div>
            <p className="text-2xl">8*5 Support</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="mx-4 my-4">
              <img src="./star.png" alt="star" />
            </div>
            <p className="text-2xl">Migration Assistance</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="mx-4 my-4">
              <img src="./star.png" alt="star" />
            </div>
            <p className="text-2xl">SCIM Connector</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="mx-4 my-4">
              <img src="./star.png" alt="star" />
            </div>
            <p className="text-2xl ">Single sign-on</p>
          </div>
        </div>
        <div className="text-white bg-[#6470FE] mr-56 mb-24 p-14 border border-1 border-[#999999] rounded-xl h-[42rem] w-[35rem]">
          <h6 className="mb-9">Tier-2</h6>
          <h1 className="text-6xl">
            $2500 <span className="text-xl text-center">/Month</span>
          </h1>
          <h1 className="my-8 text-4xl font-medium">Features</h1>
          <div className="flex flex-row items-center">
            <div className="mx-4 my-4">
              <img src="./star.png" alt="star" />
            </div>
            <p className="text-2xl">CIAM & WIAM</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="mx-4 my-4">
              <img src="./star.png" alt="star" />
            </div>
            <p className="text-2xl">3 Licenses</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="mx-4 my-4">
              <img src="./star.png" alt="star" />
            </div>
            <p className="text-2xl">8*5 Support</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="mx-4 my-4">
              <img src="./star.png" alt="star" />
            </div>
            <p className="text-2xl">Migration Assistance</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="mx-4 my-4">
              <img src="./star.png" alt="star" />
            </div>
            <p className="text-2xl">SCIM Connector</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="mx-4 my-4">
              <img src="./star.png" alt="star" />
            </div>
            <p className="text-2xl ">Single sign-on</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
