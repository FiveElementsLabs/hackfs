import React from "react";
import type { NextPage } from "next";
import Rocket from "../assets/svg/Rocket";
import Share from "../assets/svg/Share";
import Coins from "../assets/svg/Coins";

const Home: NextPage = () => {
  return (
    <div className="mt-8">
      <div
        className="relative h-[18.1rem] w-full rounded-xl bg-no-repeat bg-center bg-cover
        grid place-content-center"
        style={{ backgroundImage: `url(/HeaderGraphic.png)` }}
      >
        <h1 className="text-3xl font-medium text-center">
          Boost your content and <br /> grow your audience
        </h1>
      </div>

      <div className="grid grid-cols-3 mt-3 gap-4">
        <div className="bg-dark-card h-64 p-4 rounded-2xl">
          <div className="bg-elements rounded-xl h-16 w-16 grid place-content-center scale-90">
            <Rocket />
          </div>
          <div>
            <h2 className="mt-1 text-xl font-medium">
              Target your Web3 audience
            </h2>
            <p className="mt-3">
              Use our sophisticated suite of tools to pinpoint the best audience
              for your NFT or DeFi product
            </p>
          </div>
        </div>

        <div className="bg-dark-card h-64 p-4 rounded-2xl">
          <div className="bg-elements rounded-xl h-16 w-16 grid place-content-center scale-90">
            <Share />
          </div>
          <div>
            <h2 className="mt-1 text-xl font-medium">
              Create effective campaigns
            </h2>
            <p className="mt-3">
              Choose between a rich set of options to build campaigns
              tailor-fitted to your public
            </p>
          </div>
        </div>

        <div className="bg-dark-card h-64 p-4 rounded-2xl">
          <div className="bg-elements rounded-xl h-16 w-16 grid place-content-center scale-90">
            <Coins />
          </div>
          <div>
            <h2 className="mt-1 text-xl font-medium">
              Reward your most loyal users
            </h2>
            <p className="mt-3">
              Web3 is all about bringing the value back to users who contribute
              the most
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full grid">
        {/* <div className="h-16 bg-elements grid place-content-center rounded-xl"> */}
        {/* <h2 className="text-3xl font-medium">How it works</h2> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
