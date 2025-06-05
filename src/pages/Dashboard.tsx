import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Server, BarChart3, Palette } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { 
      path: '/createur-serveur', 
      icon: <Server className="w-12 h-12 text-yellow-500 group-hover:text-yellow-600 transition-colors" />,
      title: 'Créateur de Serveur',
      description: 'Créez et gérez votre serveur Minecraft personnalisé'
    },
    { 
      path: '/statistiques', 
      icon: <BarChart3 className="w-12 h-12 text-yellow-500 group-hover:text-yellow-600 transition-colors" />, 
      title: 'Statistiques',
      description: 'Suivez vos progrès et atteignez vos objectifs'
    },
    { 
      path: '/editeur-overlay', 
      icon: <Palette className="w-12 h-12 text-yellow-500 group-hover:text-yellow-600 transition-colors" />, 
      title: 'Éditeur d\'Overlay',
      description: 'Créez des overlays personnalisés pour vos streams'
    }
  ];

  return (
    <div>
      <div className="mb-6 flex items-center">
        <Crown className="w-8 h-8 text-yellow-400 mr-3" />
        <h1 className="text-2xl font-bold text-gray-800">Bienvenue sur Streamline Agency</h1>
      </div>
      
      <p className="text-gray-600 mb-8">
        Gérez votre serveur Minecraft, suivez vos statistiques et créez des overlays personnalisés pour vos streams.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {menuItems.map((item) => (
          <div
            key={item.path}
            className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            <div className="flex flex-col items-center text-center">
              {item.icon}
              <h2 className="mt-4 text-xl font-semibold text-gray-800">{item.title}</h2>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <div className="flex">
          <div className="flex-shrink-0">
            <Crown className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Conseil :</strong> Atteignez tous vos objectifs dans la section Statistiques pour débloquer votre bonus exclusif !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;