import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-orange-500 text-white font-sans h-screen flex flex-col items-center pt-5 shadow-md">
      <div className="mb-5">
        <div className="w-20 h-20 bg-white rounded-full"></div>
      </div>
      <nav className="w-full">
        <ul className="list-none p-0 m-0">
          <li className="py-2 px-5 hover:bg-yellow-400 hover:text-black cursor-pointer">Início</li>
          <li className="py-2 px-5 hover:bg-yellow-400 hover:text-black cursor-pointer">
            Info. Demográficas
          </li>
          <li className="py-2 px-5 hover:bg-yellow-400 hover:text-black cursor-pointer relative group">
            Dados por Gênero
            <ul className="hidden group-hover:block bg-orange-600 absolute left-full top-0 list-none pl-5">
              <li className="py-1 px-3 hover:bg-orange-500">Saúde</li>
              <li className="py-1 px-3 hover:bg-orange-500">Educação</li>
              <li className="py-1 px-3 hover:bg-orange-500">Segurança</li>
            </ul>
          </li>
          <li className="py-2 px-5 hover:bg-yellow-400 hover:text-black cursor-pointer relative group">
            Dados por Etnia
            <ul className="hidden group-hover:block bg-orange-600 absolute left-full top-0 list-none pl-5">
              <li className="py-1 px-3 hover:bg-orange-500">Saúde</li>
              <li className="py-1 px-3 hover:bg-orange-500">Educação</li>
              <li className="py-1 px-3 hover:bg-orange-500">Segurança</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
