import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Server, Statistique } from '../types';
import { mockServeur, mockStatistiques } from '../data/mockData';

interface AppContextType {
  serveur: Server | null;
  setServeur: (serveur: Server | null) => void;
  statistiques: Statistique;
  setStatistiques: (statistiques: Statistique) => void;
  tousObjectifsAtteints: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [serveur, setServeur] = useState<Server | null>(mockServeur);
  const [statistiques, setStatistiques] = useState<Statistique>(mockStatistiques);

  const tousObjectifsAtteints = 
    (statistiques.diamants.valeur / statistiques.diamants.objectif) >= 1 &&
    (statistiques.heuresLive.valeur / statistiques.heuresLive.objectif) >= 1 &&
    (statistiques.joursLive.valeur / statistiques.joursLive.objectif) >= 1;

  return (
    <AppContext.Provider value={{ 
      serveur, 
      setServeur, 
      statistiques, 
      setStatistiques,
      tousObjectifsAtteints
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext doit être utilisé à l\'intérieur d\'un AppProvider');
  }
  return context;
}