import Link from "next/link";
import Bubbles from "../components/landing/Bubbles";
import FeatureCard from "../components/landing/FeatureCard";
import Title from "../components/landing/Title";

export default function Landing() {
  return (
    <>
      <div
        id="top-hue"
        className="absolute top-0 left-0 right-0 bg-gradient-to-t h-[700px] 
      from-dark-bg to-light-bg opacity-5 -z-10"
      />

      <Bubbles />

      <Title />

      <div id="features" className="flex flex-col gap-8 w-full">
        <FeatureCard
          left
          animationMargin="-100px"
          image="TargetAudience.png"
          title={
            <>
              Target your <br />
              Web3 audience
            </>
          }
          description="Use our sophisticated suite of tools to pinpoint the best audience for
          your NFT or DeFi product"
          link="/"
        />

        <FeatureCard
          right
          animationMargin="-300px"
          image="EffectiveCampaigns.png"
          title={
            <>
              Create effective <br />
              campaigns
            </>
          }
          description="Choose between a rich set of options to build campaigns
          tailor-fitted to your public. Giveaways, raffles & more."
          link="/"
        />

        <FeatureCard
          left
          animationMargin="-400px"
          image="RewardUsers.png"
          title={
            <>
              Reward your <br />
              most loyal users
            </>
          }
          description="Rewad user that promote your contents or interact with your
          protocol"
          link="/"
        />
      </div>

      <div id="padding" className="py-72" />
    </>
  );
}
