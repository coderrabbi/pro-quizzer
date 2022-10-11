import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Topics = () => {
  const topicsData = useLoaderData();
  const topics = topicsData.data;

  return (
    <div className="flex px-20 flex-col gap-8 my-10">
      <h1 className="text-center text-6xl font-semibold">
        <span className="text-pink-500">Pick</span> A Topic
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4  grid-cols-1 gap-5 ">
        {topics.map((topic) => (
          <div className="bg-pink-500/30 backdrop:blur-lg text-center flex flex-col gap-4 rounded-xl py-5 ">
            <img
              src={topic.logo}
              alt={topic.name}
              className="w-[50%] m-auto rounded-full"
            />
            <h1 className="text-3xl ">{topic.name}</h1>
            <h3>Total Quiz: {topic.total}</h3>
            <Link to={`/topicdetails/${topic.id}`}>
              <button className="bg-white px-4 rounded" type="button">
                Pick Topic
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
