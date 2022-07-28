import Link from "next/link";
import { motion } from "framer-motion";

export default function Title() {
  return (
    <div className="py-40">
      <motion.h1
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.1, ease: [0.6, 0.05, -0.01, 0.9] }}
        className="text-5xl font-light tracking-wide"
      >
        Grow your project <br />
        community <span className="font-medium">organically</span>
      </motion.h1>
      <motion.h2
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
        className="text-xl tracking-wide text-shade-2 font-light mt-6"
      >
        Create transparent, automated and flexible <br />
        campaigns and reward users directly
      </motion.h2>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
        className="mt-8 flex gap-5 items-center justify-start"
      >
        <Link href="/">
          <button
            className="bg-principal-blue py-2 px-6 text-center rounded-lg border border-bright-blue
          text-bright-blue uppercase text-sm hover:bg-bright-blue hover:text-principal-blue"
          >
            Learn more
          </button>
        </Link>
        <Link href="/">
          <button
            className="bg-bright-blue py-2 px-6 text-center rounded-lg cursor-pointer
           hover:bg-shade-2 hover:text-principal-blue uppercase text-sm"
          >
            Contact us
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
