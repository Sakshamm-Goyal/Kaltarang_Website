import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const StartScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-white to-blue-200">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center space-x-4"
      >
        <p className="text-black text-9xl font-drunk">IMMERSE</p>
        <motion.button
          onClick={() => navigate("/moon")}
          className="w-32 h-32 flex items-center font-pixelon justify-center border-2 border-black rounded-full text-2xl font-bold"
          whileHover={{ scale: 1.2 }}
        >
          START
        </motion.button>
        <p className="text-black text-9xl font-drunk">ME IN</p>
        <p className="text-black text-6xl font-drunk">→</p>
      </motion.div>
    </div>
  );
};

export default StartScreen;
