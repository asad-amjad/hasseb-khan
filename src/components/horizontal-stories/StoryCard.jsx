import React from "react";

export default function StoryCard({ item }) {
  // if (item.type === "story") {
  return (
    <div className="flex flex-col bg-white w-[320px] h-full max-h-[330px] md:w-[382px]">
      {item.type === "story" ? (
        <div className="p-[30px]">
          <div className="flex justify-start items-center gap-[10px]">
            <img
              src={item.image}
              alt="review-pfp"
              className="w-[70px] h-[70px] rounded-full object-cover"
            />
            <div className="flex flex-col justify-start items-start space-y-[10px] ">
              <h5 className="text-[#E55D48]">{item.name}</h5>
              <p className="body-2">{item.role}</p>
            </div>
          </div>
          <p className="body-2 mt-[16px] md:mt-[30px] leading-[25px]">
            {item.des}
          </p>
        </div>
      ) : (
        <img src={item.image} alt="review-pfp" className="w-full h-full object-cover" />
      )}
    </div>
  );
}

