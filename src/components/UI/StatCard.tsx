import React from 'react';

interface StatCardProps {
  titre: string;
  valeur: number;
  objectif: number;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ titre, valeur, objectif, icon }) => {
  const pourcentage = Math.min(Math.round((valeur / objectif) * 100), 100);
  const estAtteint = pourcentage >= 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{titre}</h3>
          <div className="flex items-center mt-1">
            <span className="text-2xl font-bold text-gray-900">{valeur.toLocaleString('fr-FR')}</span>
            <span className="ml-1 text-gray-500">/ {objectif.toLocaleString('fr-FR')}</span>
          </div>
        </div>
        <div className="p-2 bg-yellow-100 rounded-lg">
          {icon}
        </div>
      </div>

      <div className="mt-4">
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${pourcentage}%` }}
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                estAtteint ? 'bg-green-500' : 'bg-yellow-400'
              } transition-all duration-500 ease-in-out`}
            ></div>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs font-semibold text-gray-600">{pourcentage}%</span>
          <span className={`text-xs font-semibold ${estAtteint ? 'text-green-500' : 'text-yellow-500'}`}>
            {estAtteint ? 'Atteint' : 'En cours'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;