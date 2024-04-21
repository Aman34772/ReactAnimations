import React from "react";

function Cardo() {
  return (
    <div className="w-full h-screen flex items-center px-32 gap-5 bg-zinc-900">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 px-5 py-1 bottom-10 rounded-full border-2 ">
            &copy;2019
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            className="w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 px-5 py-1 bottom-10 border-2 rounded-full">
            &copy;2019
          </button>
        </div>
        <div className="card relative  flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            className="w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 px-5 py-1 bottom-10 rounded-full border-2 ">
            &copy;2019
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cardo;
