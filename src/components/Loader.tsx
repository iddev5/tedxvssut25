'use client';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';

const letters = ['T', 'E', 'D', 'x', 'V', 'S', 'S', 'U', 'T'];
const blocks = Array.from({ length: 10 });

const Loader = () => {
  const controls = useAnimation();

  useEffect(() => {
    const runSequence = async () => {
      await controls.start('visible');
      await controls.start('down');
      await controls.start('fadeOut');
    };

    runSequence();
  }, [controls]);

  const letterVariants: Variants = {
    hidden: { y: '100%', opacity: 1 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
        ease: 'easeInOut',
      },
    }),
    down: { opacity: 0, transition: { duration: 0.75 } },
  };

  const blockVariants: Variants = {
    hidden: { y: 0 },
    down: (i: number) => ({
      y: '100%',
      transition: {
        delay: 1 + i * 0.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    }),
    fadeOut: { opacity: 0, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    fadeOut: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[6] flex"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {blocks.map((_, i) => (
        <motion.div
          key={i}
          className="preloader-item h-full w-[10%] bg-[#1a1a1a]"
          variants={blockVariants}
          custom={i}
        />
      ))}

      <motion.p className="name-text flex text-[20vw] lg:text-[200px] font-bold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className={`inline-block ${(i > 3) ? "text-white" : "text-red-500"}`}
            variants={letterVariants}
            custom={i}
            initial="hidden"
            animate={controls}
          >
            {letter}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
};

export default Loader;
