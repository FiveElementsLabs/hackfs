import React, { useMemo } from "react";
import { shortenAddress } from "../../lib/helpers";

const participants = [
  {
    image: "https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309_1280.png",
    address: "0x9be7b0f285d04201f27682f591a60417c47d095a",
    reward: "lindsay.walton@example.com",
    date: "Member",
  },
  {
    image: "https://cdn.pixabay.com/photo/2022/02/18/16/09/ape-7020995_1280.png",
    address: "0xaaee9188F8E1D121d6080d8d198acb17A92B9642",
    reward: "lindsay.walton@example.com",
    date: "Member",
  },
  {
    image: "https://cdn.pixabay.com/photo/2022/03/03/20/47/the-simpson-7046041_1280.jpg",
    address: "0xac251c002d3139ad4297ba619195b2E44889Ae3d",
    reward: "lindsay.walton@example.com",
    date: "Member",
  },
  // More people...
];

export default function ParticipantsTable() {
  const participantsData = useMemo(() => participants, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
              <table className="min-w-full divide-y divide-principal-lightgray">
                <thead className="bg-principal-elements">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-white sm:pl-6 lg:pl-8"
                    >
                      Participants
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-white sm:pl-6 lg:pl-8"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-white sm:pl-6 lg:pl-8"
                    >
                      Reward
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-white sm:pl-6 lg:pl-8"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-principal-lightgray bg-principal-elements">
                  {participantsData.map((p) => (
                    <tr key={p.address}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        <img src={p.image} width={"40rem"} className="rounded-4xl" />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-principal-gray">
                        {shortenAddress(p.address)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-principal-gray">
                        {p.reward}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-principal-gray">
                        {p.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
