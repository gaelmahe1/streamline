import React, { useState } from 'react';
import { BarChart3, Diamond, Clock, Calendar, Award } from 'lucide-react';
import StatCard from '../components/UI/StatCard';
import { useAppContext } from '../context/AppContext';

const Statistiques = () => {
  const { statistiques, tousObjectifsAtteints } = useAppContext();
  const [demandeEnCours, setDemandeEnCours] = useState(false);
  const [bonusDemande, setBonusDemande] = useState(false);

  const handleDemanderBonus = () => {
    setDemandeEnCours(true);
    
    // Simuler une requête API
    setTimeout(() => {
      setDemandeEnCours(false);
      setBonusDemande(true);
    }, 1500);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <BarChart3 className="w-6 h-6 mr-2 text-yellow-500" />
          Statistiques
        </h1>
        <p className="text-gray-600 mt-1">
          Suivez vos progrès et atteignez vos objectifs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          titre="Diamants Récoltés"
          valeur={statistiques.diamants.valeur}
          objectif={statistiques.diamants.objectif}
          icon={<Diamond className="h-6 w-6 text-yellow-500" />}
        />
        <StatCard
          titre="Heures de Live"
          valeur={statistiques.heuresLive.valeur}
          objectif={statistiques.heuresLive.objectif}
          icon={<Clock className="h-6 w-6 text-yellow-500" />}
        />
        <StatCard
          titre="Jours de Live"
          valeur={statistiques.joursLive.valeur}
          objectif={statistiques.joursLive.objectif}
          icon={<Calendar className="h-6 w-6 text-yellow-500" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4">
          <Award className="w-5 h-5 mr-2 text-yellow-500" />
          Bonus de Réalisation
        </h2>
        
        <p className="text-gray-600 mb-4">
          Atteignez tous vos objectifs pour débloquer votre bonus exclusif. Tous les objectifs doivent être complétés à 100%.
        </p>
        
        <div className="flex items-center space-x-4">
          {bonusDemande ? (
            <div className="bg-green-50 text-green-700 px-4 py-3 rounded-md flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>Votre demande de bonus a été envoyée avec succès!</span>
            </div>
          ) : (
            <button
              onClick={handleDemanderBonus}
              disabled={!tousObjectifsAtteints || demandeEnCours}
              className={`
                px-4 py-2 rounded-md font-medium flex items-center transition-colors duration-300
                ${
                  !tousObjectifsAtteints
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : demandeEnCours
                    ? 'bg-yellow-300 text-white'
                    : 'bg-yellow-500 text-white hover:bg-yellow-600'
                }
              `}
            >
              <Award className="w-5 h-5 mr-2" />
              {demandeEnCours ? 'Traitement en cours...' : 'Demander mon bonus'}
            </button>
          )}
          
          {!tousObjectifsAtteints && !bonusDemande && (
            <div className="text-sm text-gray-600">
              Tous les objectifs doivent être atteints pour débloquer cette option.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistiques;