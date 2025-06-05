import React from 'react';
import { ConceptServeur } from '../../types';

interface ConceptCardProps {
  concept: ConceptServeur;
  selected: boolean;
  onClick: () => void;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ concept, selected, onClick }) => {
  return (
    <div 
      className={`
        border rounded-lg overflow-hidden cursor-pointer transition-all duration-300
        ${selected ? 'border-yellow-500 ring-2 ring-yellow-300 shadow-md' : 'border-gray-200 hover:border-yellow-300'}
      `}
      onClick={onClick}
    >
      <div className="relative h-32 overflow-hidden">
        <img 
          src={concept.image} 
          alt={concept.nom} 
          className="w-full h-full object-cover"
        />
        {selected && (
          <div className="absolute inset-0 bg-yellow-400 bg-opacity-20 flex items-center justify-center">
            <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Sélectionné
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800">{concept.nom}</h3>
        <p className="text-sm text-gray-600 mt-1">{concept.description}</p>
      </div>
    </div>
  );
};

export default ConceptCard;