import React, { useState } from 'react';
import { Server } from '../../types';
import { CheckCircle2, AlertCircle, Clock, Loader2 } from 'lucide-react';

interface ServeurStatusCardProps {
  serveur: Server;
}

const ServeurStatusCard: React.FC<ServeurStatusCardProps> = ({ serveur }) => {
  const [isStarting, setIsStarting] = useState(false);
  const [isStopping, setIsStopping] = useState(false);
  const [serverOnline, setServerOnline] = useState(false);

  const getStatusIcon = () => {
    switch (serveur.statut) {
      case 'Prêt':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'En création':
        return <Clock className="h-5 w-5 text-yellow-500 animate-pulse" />;
      case 'Erreur':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (serveur.statut) {
      case 'Prêt':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'En création':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Erreur':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleStartServer = async () => {
    setIsStarting(true);
    // Simuler le démarrage du serveur
    await new Promise(resolve => setTimeout(resolve, 2000));
    setServerOnline(true);
    setIsStarting(false);
  };

  const handleStopServer = async () => {
    setIsStopping(true);
    // Simuler l'arrêt du serveur
    await new Promise(resolve => setTimeout(resolve, 2000));
    setServerOnline(false);
    setIsStopping(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800">Détails du Serveur</h3>
        <div className={`px-3 py-1 rounded-full flex items-center space-x-1 text-sm ${getStatusColor()}`}>
          {getStatusIcon()}
          <span>{serveur.statut}</span>
        </div>
      </div>
      
      <div className="mt-4 space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-500">Nom du serveur</p>
          <p className="text-gray-900 font-medium">{serveur.nomServeur}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-500">Concept choisi</p>
          <p className="text-gray-900">{serveur.concept}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-500">IP Minecraft (principal)</p>
          <p className="text-gray-900 font-mono bg-gray-50 p-2 rounded border border-gray-200 select-all">
            {serveur.ipMinecraft}
          </p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-500">IP et port TikFinity (secondaire)</p>
          <p className="text-gray-900 font-mono bg-gray-50 p-2 rounded border border-gray-200 select-all">
            {serveur.ipTikFinity}:{serveur.port}
          </p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-500">Mot de passe</p>
          <p className="text-gray-900 font-mono bg-gray-50 p-2 rounded border border-gray-200 select-all">
            {serveur.motDePasse}
          </p>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">État du serveur</span>
            <span className={`px-2 py-1 rounded-full text-sm font-medium ${
              serverOnline ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {serverOnline ? 'En ligne' : 'Hors ligne'}
            </span>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={handleStartServer}
              disabled={isStarting || isStopping || serverOnline}
              className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-white font-medium ${
                serverOnline
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isStarting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Démarrer'
              )}
            </button>
            
            <button
              onClick={handleStopServer}
              disabled={isStarting || isStopping || !serverOnline}
              className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-white font-medium ${
                !serverOnline
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-red-500 hover:bg-red-600'
              }`}
            >
              {isStopping ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Arrêter'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServeurStatusCard;