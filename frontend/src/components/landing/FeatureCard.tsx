import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const cardVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
  },
  hidden: {
    opacity: 0,
    y: 72,
  },
};

type IFeatureCardProps = {
  left?: boolean;
  right?: boolean;
  image: string;
  title: any;
  description: string;
  link: string;
  animationMargin: string;
};

export default function FeatureCard({
  left = true,
  right = false,
  image,
  title,
  description,
  link,
  animationMargin,
}: IFeatureCardProps) {
  const animation = useAnimation();
  const [cardRef, cardInView] = useInView({
    rootMargin: animationMargin,
    triggerOnce: true,
  });

  useEffect(() => {
    if (cardInView) animation.start("visible");
  }, [cardInView, animation]);

  return (
    <motion.div
      id="card"
      ref={cardRef}
      animate={animation}
      variants={cardVariants}
      initial="hidden"
      className={`relative bg-dark-card2 w-full h-[350px] rounded-xl ${
        right ? "flex justify-end" : ""
      }`}
    >
      <div
        className={`w-[400px] h-full flex flex-col justify-center ${
          right ? "pl-8 pr-8" : "pl-12"
        }`}
      >
        <h2 className="text-4xl font-semibold tracking-wide">{title}</h2>
        <p className="text-xl mt-4 pr-8 text-shade-2">{description}</p>
        <Link href={link}>
          <p className="mt-2 underline text-bright-blue text-xl">Learn more</p>
        </Link>
      </div>
      <div className={`absolute ${right ? "left-0" : "right-0"} top-0`}>
        <div
          className="bg-contain bg-center bg-no-repeat w-[483px] h-[350px]"
          style={{ backgroundImage: `url(/landing/${image})` }}
        />
      </div>
    </motion.div>
  );
}
