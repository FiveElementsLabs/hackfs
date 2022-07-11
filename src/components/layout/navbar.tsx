import Wallet from "../Wallet";

const Navbar = () => {
  return (
    <div className="border py-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-12 ">
          <div className="col-span-10 flex items-center">
            <a href="/">
              {" "}
              <h2 className="text-3xl mr-16">Lens Booster</h2>{" "}
            </a>
            <a className="text-sm mr-16" href="/active-campaigns">
              ACTIVE CAMPAIGNS
            </a>
            <a className=" text-sm" href="/my-campaigns">
              MY CAMPAIGNS
            </a>
          </div>
          <div className="col-span-2 ">
            <Wallet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
