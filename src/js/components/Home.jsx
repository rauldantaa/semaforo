import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const handleLightClick = (selectedColor: string) => {
    setColor(selectedColor);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-black border-4 border-gray-800 rounded-3xl p-6 shadow-2xl">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Semáforo</h2>

        <div className="flex flex-col space-y-4">
          {/* Luz Roja */}
          <div
            className={`w-20 h-20 rounded-full border-4 border-gray-600 cursor-pointer transition-all duration-300 ${color === "red"
              ? "bg-red-500 shadow-lg shadow-red-500/50 animate-pulse"
              : "bg-red-900/30 hover:bg-red-800/40"
              }`}
            onClick={() => handleLightClick("red")}
          >
            <div className={`w-full h-full rounded-full ${color === "red" ? "bg-gradient-to-br from-red-400 to-red-600" : ""
              }`}></div>
          </div>

          {/* Luz Amarilla */}
          <div
            className={`w-20 h-20 rounded-full border-4 border-gray-600 cursor-pointer transition-all duration-300 ${color === "yellow"
              ? "bg-yellow-500 shadow-lg shadow-yellow-500/50 animate-pulse"
              : "bg-yellow-900/30 hover:bg-yellow-800/40"
              }`}
            onClick={() => handleLightClick("yellow")}
          >
            <div className={`w-full h-full rounded-full ${color === "yellow" ? "bg-gradient-to-br from-yellow-400 to-yellow-600" : ""
              }`}></div>
          </div>

          {/* Luz Verde */}
          <div
            className={`w-20 h-20 rounded-full border-4 border-gray-600 cursor-pointer transition-all duration-300 ${color === "green"
              ? "bg-green-500 shadow-lg shadow-green-500/50 animate-pulse"
              : "bg-green-900/30 hover:bg-green-800/40"
              }`}
            onClick={() => handleLightClick("green")}
          >
            <div className={`w-full h-full rounded-full ${color === "green" ? "bg-gradient-to-br from-green-400 to-green-600" : ""
              }`}></div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">Haz clic en una luz para encenderla</p>
          <p className="text-white text-lg font-semibold mt-2">
            Estado actual: <span className="capitalize">{color === "yellow" ? "amarillo" : color === "red" ? "rojo" : "verde"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;