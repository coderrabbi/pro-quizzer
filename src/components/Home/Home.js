import React from "react";
import hero from "../../assets/hero.jpg";
import Topics from "../Topics/Topics";
const Home = () => {
  return (
    <div className="px-20">
      <div className="  flex lg:flex gap-3 items-center ">
        <div className="flex-1 gap-3 flex flex-col">
          <h1 className="text-5xl font-semibold leading-[60px]  ">
            <span className="text-pink-500">Complete</span> the quizzes and{" "}
            <br /> improving your <br />
            programming <span className="text-pink-500">skills</span>
          </h1>
          <p className="text-lg">
            There are certain attributes and skills that are enhanced by
            regularly playing online quiz games. In addition to being a
            fantastic mental exercise and means to gather a wide variety of
            information about diverse subjects, playing quiz games, both online
          </p>
        </div>
        <div className="flex-1">
          <img src={hero} alt="" className="flex-1 " />
        </div>
      </div>
      <Topics />
    </div>
  );
};

export default Home;
