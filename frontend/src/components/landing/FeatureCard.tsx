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
  mobileImage: string;
  title: any;
  description: string;
  link: string;
  animationMargin: string;
};

export default function FeatureCard({
  left = true,
  right = false,
  image,
  mobileImage,
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
      className={`relative bg-dark-card2 w-full py-8 md:py-0 md:h-[350px] rounded-xl ${
        right ? "md:flex md:justify-end" : ""
      }`}
    >
      {/* Desktop image */}
      <div className={`absolute top-0 ${right ? "left-0" : "right-0"}`}>
        <div
          className="hidden md:inline-block bg-contain bg-center bg-no-repeat w-[483px] h-[350px]"
          style={{ backgroundImage: `url(/landing/${image})` }}
        />
      </div>

      {/* Mobile image */}
      <div
        className="block md:hidden bg-cover bg-bottom bg-no-repeat w-full h-[250px] -translate-y-8 rounded-xl"
        style={{ backgroundImage: `url(/landing/${mobileImage})` }}
      />

      {/* Card content */}
      <div
        className={`md:w-[400px] h-full flex flex-col justify-center px-8 ${
          right ? "px-8" : "md:pr-0 md:pl-12"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
          {title}
        </h2>
        <p className="text-xl mt-4 md:pr-8 text-shade-2">{description}</p>
        <Link href={link}>
          <p className="mt-2 underline text-bright-blue text-xl">Learn more</p>
        </Link>
      </div>
    </motion.div>
  );
}
