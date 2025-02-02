import { useState } from "react";
import { motion } from "framer-motion";

export default function ValentineGame() {
  const [yesSize, setYesSize] = useState(1);
  const [noText, setNoText] = useState("No");
  const [showMessage, setShowMessage] = useState(false);
  const phrases = [
    "Per favore premi Sì 💕",
    "Dai, sii dolce! 😊",
    "Non farmi soffrire 💔",
    "Io ci credo in noi! 💖",
    "Ancora no? 😭",
    "Ultima possibilità! 😳"
  ];

  const handleNoClick = () => {
    setNoText(phrases[Math.floor(Math.random() * phrases.length)]);
    setYesSize(yesSize * 1.3);
  };

  const handleYesClick = () => {
    setYesSize(yesSize * 1.3);
    setShowMessage(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-300 to-red-500 text-center relative overflow-hidden">
      <h1 className="text-4xl font-bold text-white mb-6 animate-pulse">Vuoi essere la mia Valentina? ❤️</h1>
      <div className="flex space-x-6">
        <motion.button
          onClick={handleYesClick}
          animate={{ scale: yesSize }}
          className="bg-red-500 text-white px-6 py-3 rounded-xl text-xl font-bold shadow-lg hover:bg-red-700 transition-transform"
        >
          Sì 💖
        </motion.button>
        <button
          onClick={handleNoClick}
          className="bg-gray-400 text-white px-6 py-3 rounded-xl text-xl font-bold shadow-lg transition-transform"
        >
          {noText}
        </button>
      </div>
      {/* Effetto cuori animati */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -200 }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="absolute text-red-500 text-2xl"
            style={{ left: `${Math.random() * 100}%`, top: "90%" }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
      {/* Messaggio Finale */}
      {showMessage && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-bold p-6 rounded-lg shadow-lg animate-bounce">
          <p>Hai detto SÌ! Sei la mia Valentina! 💘</p>
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTYxMnAwdjh3bGNxbzdvdjV1enB1OTZtaTF6dzMyeDY5b2xoMncwbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xOvhMKk3EyS1LKQtkK/giphy.gif" alt="Romantic moment" className="w-1/2 mt-4 rounded-xl shadow-lg" />
        </div>
      )}
    </div>
  );
}
