import React from "react";
import PlusBtn from "../../assets/svg/PlusBtn";

export const CreateGiveawayBox = () => {
  return (
    <div className="h-72 rounded-2xl bg-elements grid place-content-center hover:cursor-pointer hover:opacity-80">
      <PlusBtn className="mx-auto my-3" />
      <h5 className="text-center text-xl px-6 text-white">New Campaign</h5>
    </div>
  );
};
