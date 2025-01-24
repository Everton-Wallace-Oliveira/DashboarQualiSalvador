import React from "react";
import Sidebar from "../pages/Sidebar"; // Importando o sidebar pronto (pode substituir o mesmo)

const Home = () => {
  return (
    <div className="flex font-sans bg-gray-100 text-red">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="flex-grow m-5">
        <h1 className="text-5xl text-red-700 mb-5">Texto de introdução</h1>
        <p className="text-black leading-6 mb-5">
          Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem
          ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum...
          Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem
          ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum...
          Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem
          ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum...
          Lorem ipsum... Lorem ipsum... Lorem ipsum...
        </p>
        <div className="flex justify-between mt-40">
          <div className="w-1/4 p-16 rounded-lg text-center font-bold text-black text-2xl bg-yellow-400 shadow none">
            Informações Demográficas
          </div>
          <div
            className="w-1/4 p-16 rounded-lg text-center font-bold text-black text-2xl bg-orange-500 shadow none"
            shadow
          >
            Informações por Gênero
          </div>
          <div className="w-1/4 p-16 rounded-lg text-center font-bold text-black text-2xl bg-red-700 shadow none">
            Informações por Etnia
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
