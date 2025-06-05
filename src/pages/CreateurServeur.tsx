import React, { useState } from 'react';
import { Server as ServerIcon, AlertCircle } from 'lucide-react';
import { ConceptServeur, Server } from '../types';
import { useAppContext } from '../context/AppContext';
import { conceptsServeur } from '../data/mockData';
import ConceptCard from '../components/UI/ConceptCard';
import ServeurStatusCard from '../components/UI/ServeurStatusCard';

const CreateurServeur = () => {
  const { serveur, setServeur } = useAppContext();
  const [pseudoDiscord, setPseudoDiscord] = useState('');
  const [selectedConcept, setSelectedConcept] = useState<ConceptServeur | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!pseudoDiscord.trim()) {
      setError('Le pseudo Discord est requis');
      return;
    }

    if (!selectedConcept) {
      setError('Veuillez sélectionner un concept de serveur');
      return;
    }

    setError('');
    setLoading(true);

    // Simuler la création d'un serveur
    setTimeout(() => {
      const nouveauServeur: Server = {
        pseudoDiscord: pseudoDiscord,
        nomServeur: `MC N2 - ${pseudoDiscord}`,
        concept: selectedConcept.nom,
        ipMinecraft: 'mc.streamline-agency.com',
        ipTikFinity: '192.168.1.100',
        port: '25565',
        motDePasse: generatePassword(),
        statut: 'Prêt'
      };

      setServeur(nouveauServeur);
      setLoading(false);
    }, 2000);
  };

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <ServerIcon className="w-6 h-6 mr-2 text-yellow-500" />
          Créateur de Serveur Minecraft
        </h1>
        <p className="text-gray-600 mt-1">
          Créez et gérez votre serveur Minecraft personnalisé
        </p>
      </div>

      {serveur ? (
        <div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Note :</strong> Vous avez déjà un serveur actif. Limite : 1 serveur par créateur.
                </p>
              </div>
            </div>
          </div>
          <ServeurStatusCard serveur={serveur} />
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sélectionnez un concept</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {conceptsServeur.map(concept => (
              <ConceptCard
                key={concept.id}
                concept={concept}
                selected={selectedConcept?.id === concept.id}
                onClick={() => setSelectedConcept(concept)}
              />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Informations du serveur</h2>
            
            {error && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mb-4">
              <label htmlFor="pseudoDiscord" className="block text-sm font-medium text-gray-700">
                Pseudo Discord
              </label>
              <input
                type="text"
                id="pseudoDiscord"
                value={pseudoDiscord}
                onChange={(e) => setPseudoDiscord(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Votre pseudo Discord"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nom du serveur
              </label>
              <div className="mt-1 block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm py-2 px-3 sm:text-sm">
                {pseudoDiscord ? `MC N2 - ${pseudoDiscord}` : 'MC N2 - [Votre pseudo]'}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Concept choisi
              </label>
              <div className="mt-1 block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm py-2 px-3 sm:text-sm">
                {selectedConcept ? selectedConcept.nom : 'Aucun concept sélectionné'}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                ${loading ? 'bg-yellow-300' : 'bg-yellow-500 hover:bg-yellow-600'}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-colors duration-300
              `}
            >
              {loading ? 'Création en cours...' : 'Créer Serveur'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateurServeur;