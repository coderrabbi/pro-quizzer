import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import ReactJsAlert from "reactjs-alert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TopicDetails = () => {
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  const topics = useLoaderData();
  const { name } = topics.data;
  const topicData = topics.data.questions;

  const right = () =>
    toast.success("Right Ans", {
      autoClose: 1000,
      position: "top-right",
      theme: "colored",
    });

  const worng = () =>
    toast.error("Wrong Ans", {
      autoClose: 1000,
      position: "top-right",
      theme: "colored",
    });

  const [ans, setAns] = useState(false);

  const handleCheck = (option, correctAnswer) => {
    if (option === correctAnswer) {
      setAns(true);
    } else {
      setAns(false);
    }
  };
  const handleClick = (correctAnswer) => {
    setStatus(true);
    setType("success");
    setTitle(`correct ans:${correctAnswer}`);
  };

  return (
    <div className="sm:px-20 px-5 flex flex-col gap-5 justify-center items-center py-10">
      <h1 className="text-3xl">
        Topic Name: <span className="text-pink-500">{name}</span>
      </h1>

      {topicData.map((topic) => (
        <div
          key={topic.id}
          className="bg-pink-400 rounded-xl shadow-lg lg:w-3/5 w-full p-5"
        >
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-3 text-transparent  bg-clip-text bg-gradient-to-r from-teal-900 to-blue-500">
              {" "}
              Q:{topic.question.slice(3, -4)}
            </h2>
            <div>
              {" "}
              <IoEyeOutline
                className="text-white text-3xl w-10 cursor-pointer"
                onClick={() => handleClick(topic.correctAnswer)}
              />
              ;
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5">
            {topic.options.map((option, index) => (
              <div key={index} className="flex gap-2  items-center">
                <label
                  htmlFor={option}
                  className={`flex gap-3 mb-3 w-[300px] bg-white text-black hover:bg-slate-500 hover:text-white active:bg-slate-500  cursor-pointer p-3 rounded-xl`}
                  onClick={() => handleCheck(option, topic.correctAnswer)}
                >
                  <input
                    onChange={ans ? right : worng}
                    type="radio"
                    name="option"
                    id={option}
                    value={option}
                  />{" "}
                  {option}
                </label>
                <ToastContainer />
              </div>
            ))}
          </div>
        </div>
      ))}
      <ReactJsAlert
        status={status}
        type={type}
        title={title}
        Close={() => setStatus(false)}
      />
    </div>
  );
};

export default TopicDetails;
