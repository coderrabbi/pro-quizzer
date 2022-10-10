import React from "react";
import { useLoaderData } from "react-router-dom";

const TopicDetails = () => {
  const topics = useLoaderData();
  const { name } = topics.data;
  const topicData = topics.data.questions;
  console.log(topics);
  return (
    <div className="px-20 flex flex-col gap-5 justify-center items-center py-10">
      <h1 className="text-3xl">
        Topic Name: <span className="text-pink-500">{name}</span>
      </h1>
      {topicData.map((topic) => (
        <div>this is {topic.id}</div>
      ))}
    </div>
  );
};

export default TopicDetails;
