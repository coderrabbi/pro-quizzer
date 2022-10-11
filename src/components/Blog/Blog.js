import React from "react";
import data from "../../qus";

const Blog = () => {
  return (
    <div className="lg:px-20 py-10 px-10">
      {data.map((qna) => (
        <div key={qna.id} className="flex flex-col gap-5">
          <h1 className="text-3xl text-slate-500 ">Q:{qna.Q}</h1>
          <p className="text-[18px]">
            <span className="text-2xl font-semibold text-pink-500">Ans:</span>{" "}
            {qna.ans}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
