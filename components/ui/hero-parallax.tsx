"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimationFrame,
  useMotionValue,
  useVelocity,
  useAnimationControls,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 200]),
    springConfig
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.2 && !animationComplete) {
        setAnimationComplete(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, animationComplete]);

  return (
    <div
      ref={ref}
      className="w-full h-300vh pb-48 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex-grow flex flex-col justify-between px-4 sm:px-0"
      >
        <ProductRow products={firstRow} direction="rtl" animationComplete={animationComplete} />
        <ProductRow products={secondRow} direction="ltr" animationComplete={animationComplete} />
        <ProductRow products={thirdRow} direction="rtl" animationComplete={animationComplete} />
      </motion.div>
    </div>
  );
};

const ProductRow = ({ 
  products, 
  direction, 
  animationComplete
}: { 
  products: Product[], 
  direction: "ltr" | "rtl", 
  animationComplete: boolean
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [rowWidth, setRowWidth] = useState(0);
  const baseVelocity = 10;
  const xPos = useMotionValue(0);

  useEffect(() => {
    if (rowRef.current) {
      setRowWidth(rowRef.current.offsetWidth);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    if (!animationComplete || !rowRef.current) return;

    let moveBy = direction === "rtl" ? baseVelocity : -baseVelocity;
    moveBy = (moveBy * delta) / 1000;

    xPos.set((xPos.get() + moveBy) % rowWidth);
  });

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div 
        ref={rowRef}
        className="flex space-x-4 sm:space-x-10"
        style={{ x: xPos }}
      >
        {[...products, ...products, ...products].map((product, index) => (
          <ProductCard
            product={product}
            key={`${product.title}-${index}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 sm:py-20 px-4 w-full left-0 top-0">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold dark:text-white">
        Full-service
        <br /> met een doordachte mix van expertise
      </h1>
      <p className="max-w-2xl text-sm sm:text-base md:text-xl mt-4 sm:mt-8 dark:text-neutral-200">
        Voor veel organisaties is de route naar succes helder. De ambities voor groei zijn groot, en de bedrijfsstrategie staat al. Toch is digitalisering vaak een nieuw terrein, terwijl het enorme mogelijkheden biedt.
        <br /><br />
        Door ambities op het gebied van marketing, e-commerce en procesoptimalisatie te bespreken, kunnen we samen een effectieve digitaliseringsstrategie ontwikkelen. Veel repetitieve taken kunnen geautomatiseerd worden, waardoor medewerkers meer tijd krijgen om te focussen op groei. Met online marketing en digitale oplossingen kunnen bovendien nieuwe inkomstenstromen worden opgezet.
        <br /><br />
        Om dit proces succesvol te begeleiden, werken we met een team van strategen, creatieven, developers en architecten, afgestemd op de behoeften van jouw project. Door telkens het juiste team samen te stellen, bieden we een full-service aanpak gecombineerd met specialistische expertise.
      </p>
    </div>
  );
};

const ProductCard = ({
  product,
}: {
  product: Product;
}) => {
  return (
    <div
      className="group/product overflow-hidden h-60 sm:h-96 w-72 sm:w-[30rem] relative flex-shrink-0"
    >
      
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl h-full"
      >
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-left-top rounded-xl absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full rounded-xl gap-4 opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </div>
  );
};

