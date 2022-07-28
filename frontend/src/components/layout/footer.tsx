import TideLogo from "../../assets/svg/TideLogo";
import FelFooter from "../../assets/svg/FiveElements";
import DocsFooter from "../../assets/svg/Docs";
import ContactFooter from "../../assets/svg/Contact";
import MediumFooter from "../../assets/svg/Medium";
import TwitterFooter from "../../assets/svg/Twitter";
import DiscordFooter from "../../assets/svg/Discord";

export default function Footer() {
  return (
    <div className="bg-principal-blue py-6">
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
  );
}
