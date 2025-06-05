export interface ConceptServeur {
  id: string;
  nom: string;
  description: string;
  image: string;
}

export interface Server {
  pseudoDiscord: string;
  nomServeur: string;
  concept: string;
  ipMinecraft: string;
  ipTikFinity: string;
  port: string;
  motDePasse: string;
  statut: 'En création' | 'Prêt' | 'Erreur';
}

export interface ValeurObjectif {
  valeur: number;
  objectif: number;
}

export interface Statistique {
  diamants: ValeurObjectif;
  heuresLive: ValeurObjectif;
  joursLive: ValeurObjectif;
}

export type GameType = 'minecraft' | 'gta';
export type ElementType = 'block' | 'action' | 'bonus' | 'special';

export interface OverlayElement {
  id: string;
  type: ElementType;
  gameType: GameType;
  name: string;
  image: string;
  category: string;
  value?: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  style?: React.CSSProperties;
}

export interface TemplateCategory {
  id: string;
  name: string;
  description: string;
  gameType: GameType;
  background: string;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  gameType: GameType;
  elements: OverlayElement[];
  background: {
    type: 'color' | 'gradient' | 'image';
    value: string;
  };
  resolution: '1080p' | '1440p' | '4k';
  position: 'corner' | 'center' | 'side';
}

export interface ElementOverlay {
  id: string;
  type: 'image' | 'texte' | 'zone' | 'logo';
  contenu: string;
  position: { x: number; y: number };
  taille: { width: number; height: number };
  style?: React.CSSProperties;
}