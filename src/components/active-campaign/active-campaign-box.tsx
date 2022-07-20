import React from "react";
import Image from "next/image";

const ActiveCampaignsBox = ({ campaign }) => {
  const { title, imageURL, deadline, participants, drawMethod } = campaign;

  return (
    <div className="rounded-2xl bg-tide-lighter text-black border-2 border-tide-medium cursor-pointer">
      <div className="p-4">
        <div className="relative h-36 w-full object-cover border-2 border-white rounded-2xl">
          <Image alt="campaign image" layout="fill" className="rounded-2xl" src={imageURL} />
        </div>
        <h3 className="py-2 text-lg font-bold text-slate-800">{title}</h3>
        <hr />
        <div className="mt-2 flex text-xs justify-between text-slate-900">
          <div>
            <h4 className="font-medium opacity-80">Ends in</h4>
            <p className="text-teal-medium">0d:22h:41m</p>
          </div>
          <div>
            <h4 className="font-medium opacity-70">Participants</h4>
            <p>{participants}</p>
          </div>
          <div>
            <h4 className="font-medium opacity-70">Draw method</h4>
            <p>{drawMethod ? "Everyone wins" : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ActiveCampaignsBoxEmpty = () => {
  return (
    <div className="rounded-2xl bg-elements grid place-content-center border-2 border-principal-gray">
      <h5 className="text-center text-xl px-6 text-white">Active campaign will be shown here.</h5>
    </div>
  );
};

export default ActiveCampaignsBox;
