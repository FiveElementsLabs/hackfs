import Tide from "../../assets/svg/tide";
import FelFooter from "../../assets/svg/felFooter";
import DocsFooter from "../../assets/svg/docsfooter";
import ContactFooter from "../../assets/svg/contactfooter";
import MediumFooter from "../../assets/svg/mediumfooter";
import TwitterFooter from "../../assets/svg/twitterfooter";
import DiscordFooter from "../../assets/svg/discordfooter";

export default function Footer() {
  return (
    <>
      <div className="pt-4 max-w-4xl mx-auto text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-7">
            <div className="scale-75">
              <Tide />
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
    </>
  );
}
