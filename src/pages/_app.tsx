import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
  when: "afterChildren",
};

function MyApp({ Component, pageProps }: any) {
  return (
    <AnimatePresence>
      <div className="page-transition-wrapper">
        <motion.div
          transition={spring}
          initial={{ x: 20, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
