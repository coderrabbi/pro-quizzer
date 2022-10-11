import React from "react";
import { useLoaderData } from "react-router-dom";

const TopicDetails = () => {
  const topics = useLoaderData();
  const { name } = topics.data;
  const topicData = topics.data.questions;
  const topicOptions = topics.data.questions.options;
  console.log(topicData);
  console.log(topicOptions);
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
          <h2> Q:{topic.question}</h2>
          <table className="grid lg:grid-cols-2 grid-cols-1">
            {topic.options.map((option) => (
              <div className="flex gap-3 text-white items-center">
                <label htmlFor={option} className="flex gap-3 mb-3">
                  <input
                    className=""
                    type="radio"
                    name="option"
                    id={option}
                    value={option}
                  />{" "}
                  {option}
                </label>
              </div>
            ))}
          </table>
        </div>
      ))}
    </div>
  );
};

export default TopicDetails;
