import Link from "next/link";
import Wallet from "./wallet";

const Navbar = () => {
  return (
    <div className="py-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-12 ">
          <div className="col-span-10 flex items-center">
            <Link href="/">
              <h2 className="text-3xl mr-16 cursor-pointer">Tide Protocol</h2>
            </Link>
            <Link href="/active-campaigns">
              <p className="text-sm mr-16 cursor-pointer">ACTIVE CAMPAIGNS</p>
            </Link>
            <Link href="/my-campaigns">
              <p className="text-sm cursor-pointer">MY CAMPAIGNS</p>
            </Link>
          </div>
          <div className="col-span-2">
            <Wallet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
