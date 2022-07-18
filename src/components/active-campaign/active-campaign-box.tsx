import React, { useState } from "react";
import Image from "next/image";

const ActiveCampaignsBox = ({ campaign }) => {
  const { title, imageURL, deadline, participant, drawMethod } = campaign;
  return (
    <div
      className="rounded-3xl bg-white text-black"
      style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="p-4">
        <div className="relative h-40 w-full object-cover">
          <Image alt="campaign image" layout="fill" className="rounded-2xl" src={imageURL} />
        </div>
        <h3 className="py-4">{title}</h3>
        <hr />
        <div className="mt-2 flex text-xs justify-between">
          <div>
            <h4>Ends in</h4>
            <p>0d:22h:41m:15s</p>
          </div>
          <div>
            <h4>Participant</h4>
            <p>{participant}</p>
          </div>
          <div>
            <h4>Draw method</h4>
            <p>{drawMethod ? "Everyone wins" : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ActiveCampaignsBoxEmpty = () => {
  return (
    <div
      className="border rounded-3xl bg-white grid place-content-center"
      style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <h5 className="text-center text-sm px-6 opacity-30">
        Join more giveaways to see them appear here
      </h5>
    </div>
  );
};

export default ActiveCampaignsBox;
