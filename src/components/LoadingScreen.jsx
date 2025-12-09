import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, BookOpen, Layers, Zap, X } from 'lucide-react';

const useLenis = () => {
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';
    return () => {
      html.style.scrollBehavior = 'auto';
    };
  }, []);
};

const EASING = {
  expo: [0.76, 0, 0.24, 1],
  power4: [0.4, 0, 0.2, 1],
  smooth: [0.33, 1, 0.68, 1]
};

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("loading");
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const duration = 2500;
    const steps = 100;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setPhase("assembled");
          setTimeout(() => {
            setPhase("exit");
            setTimeout(onComplete, 1200);
          }, 800);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  const title = "EDUFLOW";
  const titleChars = title.split("");

  return (
    <AnimatePresence>
      {phase !== "complete" && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#131314] text-[#E0E0E0] overflow-hidden"
          initial={false}
          animate={phase === "exit" ? "exit" : "enter"}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            overflow: 'hidden'
          }}
        >
          <motion.div 
            variants={{
              exit: { height: "0%", transition: { duration: 1.2, ease: EASING.expo } }
            }}
            className="absolute top-0 left-0 w-full h-[50vh] bg-[#131314] z-20 origin-top border-b border-white/5"
          />
          <motion.div 
            variants={{
              exit: { height: "0%", transition: { duration: 1.2, ease: EASING.expo } }
            }}
            className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#131314] z-20 origin-bottom border-t border-white/5"
          />

          <motion.div 
            className="relative z-30 h-full flex flex-col justify-between p-6 md:p-12"
            variants={{
              exit: { opacity: 0, scale: 0.95, transition: { duration: 0.8, ease: EASING.power4 } }
            }}
          >
            <div className="flex justify-between items-start text-xs font-mono uppercase tracking-widest opacity-60">
              <div className="flex flex-col gap-1">
                <span>Eduflow Studios</span>
                <span>Est. 2025</span>
              </div>
              <div className="text-right">
                <span>Loading Experience</span>
                <span>v2.0.4</span>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
              <div className="overflow-hidden mb-4">
                 <motion.div 
                   className="flex justify-center gap-2 md:gap-4 overflow-hidden"
                 >
                   {titleChars.map((char, i) => (
                     <motion.span
                        key={i}
                        initial={{ y: "150%" }}
                        animate={{ y: 0 }}
                        transition={{ 
                          duration: 1.2, 
                          ease: EASING.expo, 
                          delay: 0.2 + (i * 0.05) // Stagger effect
                        }}
                        className="text-6xl md:text-9xl font-bold tracking-tighter inline-block text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600"
                     >
                       {char}
                     </motion.span>
                   ))}
                 </motion.div>
              </div>
              
              <div className="w-64 md:w-96 mx-auto h-[1px] bg-gray-800 mt-8 relative overflow-hidden">
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: `${count}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex gap-4 text-xs font-mono uppercase">
                <div className="flex items-center gap-2">
                   <div className={`w-2 h-2 rounded-full ${count === 100 ? 'bg-green-500' : 'bg-orange-500 animate-pulse'}`} />
                   <span>{count === 100 ? 'System Ready' : 'Initializing...'}</span>
                </div>
              </div>
              
              <div className="text-6xl md:text-8xl font-light tabular-nums leading-none tracking-tighter opacity-20">
                {count.toString().padStart(3, '0')}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#131314] overflow-hidden pt-20">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
           className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-[0.03]"
           style={{ 
             backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
         />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-6 overflow-hidden">
           <motion.div
             initial={{ y: "100%" }}
             animate={{ y: 0 }}
             transition={{ delay: 1.4, duration: 1, ease: EASING.expo }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
           >
              <Zap className="w-3 h-3 text-yellow-400" />
              <span className="text-[10px] uppercase tracking-widest text-gray-300">Next Gen Education</span>
           </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.h1 
            style={{ y }}
            className="text-[14vw] leading-[0.8] font-bold tracking-tighter text-[#E0E0E0] mix-blend-overlay"
          >
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                transition={{ delay: 1.5, duration: 1.2, ease: EASING.expo }}
                className="block"
              >
                LEARNING
              </motion.span>
            </span>
            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-800">
               <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                transition={{ delay: 1.6, duration: 1.2, ease: EASING.expo }}
                className="block"
              >
                REDEFINED
              </motion.span>
            </span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="group h-12 px-8 bg-[#E0E0E0] text-[#131314] rounded-sm font-semibold flex items-center gap-3 hover:bg-white transition-colors">
            Start Learning
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group h-12 px-8 border border-white/10 text-[#E0E0E0] rounded-sm font-medium flex items-center gap-3 hover:bg-white/5 transition-colors">
            <Play className="w-4 h-4 fill-current" />
            Watch Showreel
          </button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between text-white/20 text-xs font-mono uppercase">
        <div className="hidden md:block">Scroll to explore</div>
        <div className="flex gap-4">
           <span>IG</span>
           <span>TW</span>
           <span>LN</span>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  return (
    <div className="bg-[#131314] text-white selection:bg-white selection:text-black">
      {loading ? (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9998, backgroundColor: '#131314' }}>
          <LoadingScreen onComplete={() => setLoading(false)} />
        </div>
      ) : null}
    </div>
  );
}
// import React, { useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function LoadingScreen({ isLoading, darkMode }) {
//   const loadingText = "EDUFLOW";
//   const loadingTextRef = useRef([]);

//   // Animation variants for the loading bar
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.1,
//       },
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         staggerChildren: 0.1,
//         staggerDirection: -1,
//         when: "afterChildren"
//       }
//     }
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     show: { 
//       y: 0, 
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     },
//     exit: { 
//       y: -20, 
//       opacity: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isLoading && (
//         <motion.div 
//           className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${darkMode ? 'bg-[#131314] text-white' : 'bg-white text-[#131314]'}`}
//           initial="hidden"
//           animate="show"
//           exit="exit"
//           variants={container}
//         >
//           <motion.div className="relative overflow-hidden">
//             <motion.div 
//               className="flex space-x-1 text-4xl md:text-6xl font-bold tracking-tighter"
//               variants={container}
//             >
//               {[...loadingText].map((char, i) => (
//                 <motion.span 
//                   key={i} 
//                   className="inline-block"
//                   variants={item}
//                   ref={el => loadingTextRef.current[i] = el}
//                 >
//                   {char}
//                 </motion.span>
//               ))}
//             </motion.div>
//             <motion.div 
//               className={`h-1 mt-4 ${darkMode ? 'bg-white/20' : 'bg-black/10'}`}
//               initial={{ width: 0 }}
//               animate={{ width: '100%' }}
//               transition={{ 
//                 duration: 2, 
//                 ease: [0.22, 1, 0.36, 1],
//                 repeat: Infinity,
//                 repeatType: "loop"
//               }}
//             />
//           </motion.div>
          
//           <motion.div 
//             className={`text-xs font-mono tracking-widest mt-8 opacity-60 ${darkMode ? 'text-white' : 'text-black'}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.6 }}
//             transition={{ delay: 0.5 }}
//           >
//             INITIALIZING LEARNING ENVIRONMENT
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
