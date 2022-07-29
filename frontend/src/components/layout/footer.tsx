import TideLogo from "../../assets/svg/TideLogo";
import FelFooter from "../../assets/svg/FiveElements";
import DocsFooter from "../../assets/svg/Docs";
import ContactFooter from "../../assets/svg/Contact";
import MediumFooter from "../../assets/svg/Medium";
import TwitterFooter from "../../assets/svg/Twitter";
import DiscordFooter from "../../assets/svg/Discord";
import Lens from "../../assets/svg/Lens";

export default function Footer() {
  return (
    <>
      {/* Mobile */}
      <div className="block sm:hidden mt-6">
        <div className="w-full mx-auto text-xs py-5 bg-principal-blue">
          <div className="grid grid-cols-2 gap-y-5 px-5">
            <div className="flex gap-2 items-center">
              <div className="w-9 flex justify-center items-center scale-90">
                <TwitterFooter className="scale-125" />
              </div>
              Twitter
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-9 flex justify-center items-center scale-90">
                <FelFooter />
              </div>
              By Five Elements Labs
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-9 flex justify-center items-center scale-90">
                <Lens />
              </div>
              Lens
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-9 flex justify-center items-center scale-90">
                <ContactFooter className="scale-110" />
              </div>
              Contact us
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-9 flex justify-center items-center scale-90">
                <DiscordFooter className="scale-125" />
              </div>
              Discord
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-9 flex justify-center items-center scale-90">
                <DocsFooter className="scale-125" />
              </div>
              Docs
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-9 flex justify-center items-center scale-90">
                <MediumFooter className="scale-75 -ml-1" />
              </div>
              Blog
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:block bg-principal-blue py-6 mt-10">
        <div className="max-w-4xl mx-auto text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="scale-75">
                <TideLogo />
              </div>

              <div className="flex items-center">
                {" "}
                <FelFooter className="mr-2" />
                By Five Elements Labs
              </div>
              <div className="flex items-center">
                {" "}
                <ContactFooter className="mr-2" />
                Contact us
              </div>
              <div className="flex items-center">
                {" "}
                <DocsFooter className="mr-2" />
                Docs
              </div>
              <div className="flex items-center">
                {" "}
                <MediumFooter className="mr-2" />
                Blog
              </div>
            </div>
            <div className="flex gap-3">
              <TwitterFooter />
              <DiscordFooter />
              <TwitterFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
