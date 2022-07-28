import Link from "next/link";

export default function Landing() {
  return (
    <>
      <div
        id="hue"
        className="absolute top-0 left-0 right-0 bg-gradient-to-t h-[700px] from-dark-bg to-light-bg opacity-5"
      />
      <div
        className="absolute top-0 right-0 -translate-y-[200px] opacity-10 
        w-[600px] h-[600px] bg-no-repeat bg-center bg-contain -z-10"
        style={{ backgroundImage: "url(/landing/Bubble01.png)" }}
      />
      <div
        className="absolute top-0 left-0 -translate-y-[250px] opacity-10
        w-[800px] h-[1300px] bg-no-repeat bg-center bg-contain -z-10"
        style={{ backgroundImage: "url(/landing/Bubble02.png)" }}
      />
      <div
        className="absolute top-0 left-0 translate-x-[70px] translate-y-[1050px] opacity-10 
        w-[650px] h-[650px] bg-no-repeat bg-center bg-contain -z-10"
        style={{ backgroundImage: "url(/landing/Bubble03.png)" }}
      />
      <div
        className="absolute top-0 right-0 translate-y-[1100px] opacity-10 
        w-[650px] h-[1100px] bg-no-repeat bg-center bg-contain -z-10"
        style={{ backgroundImage: "url(/landing/Bubble04.png)" }}
      />
      <div
        className="absolute bottom-0 left-0 translate-y-[48px] opacity-10 
        w-[900px] h-[600px] bg-no-repeat bg-center bg-contain -z-10"
        style={{ backgroundImage: "url(/landing/Bubble05.png)" }}
      />

      <div id="title" className="py-40">
        <h1 className="text-5xl font-light tracking-wide">
          Grow your project <br />
          community <span className="font-medium">organically</span>
        </h1>
        <h2 className="text-xl tracking-wide text-shade-2 font-light mt-6">
          Create transparent, automated and flexible <br />
          campaigns and reward users directly
        </h2>
        <div className="mt-10 flex gap-5 items-center justify-start">
          <Link href="/">
            <button className="bg-principal-blue py-2 px-6 text-center rounded-lg border border-bright-blue">
              <p className="text-bright-blue uppercase text-sm">Learn more</p>
            </button>
          </Link>
          <Link href="/">
            <button className="bg-bright-blue py-2 px-6 text-center rounded-lg cursor-pointer hover:bg-shade-3">
              <p className="uppercase text-sm">Contact us</p>
            </button>
          </Link>
        </div>
      </div>

      <div id="features" className="flex flex-col gap-8 w-full">
        <div
          id="card-1"
          className="relative bg-dark-card2 w-full h-[350px] rounded-xl"
        >
          <div className="w-[400px] h-full flex flex-col justify-center pl-12">
            <h2 className="text-4xl font-semibold tracking-wide">
              Target your <br />
              Web3 audience
            </h2>
            <p className="text-xl mt-4 pr-8 text-shade-2">
              Use our sophisticated suite of tools to pinpoint the best audience
              for your NFT or DeFi product
            </p>
            <Link href="/">
              <p className="mt-2 underline text-bright-blue text-xl">
                Learn more
              </p>
            </Link>
          </div>
          <div className="absolute right-0 top-0">
            <div
              className="bg-contain bg-center bg-no-repeat w-[483px] h-[350px]"
              style={{ backgroundImage: "url(/landing/TargetAudience.png)" }}
            />
          </div>
        </div>

        <div
          id="card-2"
          className="relative bg-dark-card2 w-full h-[350px] rounded-xl flex justify-end"
        >
          <div className="absolute left-0 top-0">
            <div
              className="bg-contain bg-center bg-no-repeat w-[483px] h-[350px]"
              style={{
                backgroundImage: "url(/landing/EffectiveCampaigns.png)",
              }}
            />
          </div>
          <div className="w-[400px] h-full flex flex-col justify-center pl-8 pr-8">
            <h2 className="text-4xl font-semibold tracking-wide">
              Create effective <br />
              campaigns
            </h2>
            <p className="text-xl mt-4 pr-8 text-shade-2">
              Choose between a rich set of options to build campaigns
              tailor-fitted to your public. Giveaways, raffles & more.
            </p>
            <Link href="/">
              <p className="mt-2 underline text-bright-blue text-xl">
                Learn more
              </p>
            </Link>
          </div>
        </div>

        <div
          id="card-3"
          className="relative bg-dark-card2 w-full h-[350px] rounded-xl"
        >
          <div className="w-[400px] h-full flex flex-col justify-center pl-12">
            <h2 className="text-4xl font-semibold tracking-wide">
              Reward your <br />
              most loyal users
            </h2>
            <p className="text-xl mt-4 pr-8 text-shade-2">
              Rewad user that promote your contents or interact with your
              protocol
            </p>
            <Link href="/">
              <p className="mt-2 underline text-bright-blue text-xl">
                Learn more
              </p>
            </Link>
          </div>
          <div className="absolute right-0 top-0">
            <div
              className="bg-contain bg-center bg-no-repeat w-[483px] h-[350px]"
              style={{ backgroundImage: "url(/landing/RewardUsers.png)" }}
            />
          </div>
        </div>
      </div>

      <div id="padding" className="py-80" />
    </>
  );
}
