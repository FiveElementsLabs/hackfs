import Image from "next/image";
import { Campaign } from "../active-campaign/active-campaign-box";

const ActiveCampaignsBox = ({ campaign }: { campaign: Campaign }) => {
  const { title, imageURL, deadline, participants, drawMethod } = campaign;

  return (
    <div
      className="hover:opacity-80 rounded-2xl bg-elements text-white border-2 
    border-tide-medium cursor-pointer"
    >
      <div className="p-3">
        <div className="relative h-36 w-full object-cover border-3 border-white rounded-2xl">
          <Image
            alt="campaign image"
            layout="fill"
            className="rounded-2xl"
            src={imageURL}
          />
        </div>
        <h3 className="py-2 text-lg font-bold text-white">{title}</h3>
        <hr />
        <div className="mt-2 flex text-xs justify-between">
          <div>
            <h4 className="font-medium opacity-70 text-white">Ends in</h4>
            <p className="text-shade-3 ">{deadline}</p>
          </div>
          <div>
            <h4 className="font-medium opacity-70 text-white">Participants</h4>
            <p className="text-white">{participants}</p>
          </div>
          <div>
            <h4 className="font-medium opacity-70 text-white">Draw method</h4>
            <p className="text-shade-3">{drawMethod ? "Everyone wins" : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CampaignsBoxEmpty = ({ text }: { text: string }) => {
  return (
    <div className="h-36 rounded-2xl bg-elements grid place-content-center">
      <h5 className="text-center text-xl px-6 text-white">{text}</h5>
    </div>
  );
};

export default ActiveCampaignsBox;
