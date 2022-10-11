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
    <div className="px-20 flex flex-col gap-5 justify-center items-center py-10">
      <h1 className="text-3xl">
        Topic Name: <span className="text-pink-500">{name}</span>
      </h1>
      {topicData.map((topic) => (
        <div key={topic.id} className="bg-slate-500 w-[700px] p-5">
          <h2> Q:{topic.question}</h2>
          <div className="grid grid-cols-2">
            {topic.options.map((option) => (
              <input type="radio" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicDetails;
