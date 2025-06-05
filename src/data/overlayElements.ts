import { OverlayElement, TemplateCategory } from '../types';

export const minecraftElements: OverlayElement[] = [
  {
    id: 'tnt-x1',
    type: 'block',
    gameType: 'minecraft',
    name: 'TNT x1',
    image: '/assets/overlays/tnt.png',
    category: 'counter',
    value: '1',
    position: { x: 0, y: 0 },
    size: { width: 80, height: 80 }
  },
  {
    id: 'tnt-x50',
    type: 'block',
    gameType: 'minecraft',
    name: 'TNT x50',
    image: '/assets/overlays/tnt.png',
    category: 'counter',
    value: '50',
    position: { x: 0, y: 0 },
    size: { width: 80, height: 80 }
  },
  {
    id: 'tnt-x100',
    type: 'block',
    gameType: 'minecraft',
    name: 'TNT x100',
    image: '/assets/overlays/tnt.png',
    category: 'counter',
    value: '100',
    position: { x: 0, y: 0 },
    size: { width: 80, height: 80 }
  },
  {
    id: 'tnt-x1000',
    type: 'block',
    gameType: 'minecraft',
    name: 'TNT x1000',
    image: '/assets/overlays/tnt.png',
    category: 'counter',
    value: '1000',
    position: { x: 0, y: 0 },
    size: { width: 80, height: 80 }
  },
  {
    id: 'tnt-x2500',
    type: 'block',
    gameType: 'minecraft',
    name: 'TNT x2500',
    image: '/assets/overlays/tnt.png',
    category: 'counter',
    value: '2500',
    position: { x: 0, y: 0 },
    size: { width: 80, height: 80 }
  },
  {
    id: 'emerald-block',
    type: 'block',
    gameType: 'minecraft',
    name: 'REMPLIR',
    image: '/assets/overlays/Template_Minecraft_TNT.png',
    category: 'action',
    position: { x: 0, y: 0 },
    size: { width: 80, height: 80 }
  },
  {
    id: 'gold-block',
    type: 'block',
    gameType: 'minecraft',
    name: 'REMPLIR',
    image: '/assets/overlays/Template_Minecraft_TNT.png',
    category: 'action',
    position: { x: 0, y: 0 },
    size: { width: 80, height: 80 }
  }
];

export const gtaElements: OverlayElement[] = [
  {
    id: 'tp-aeroport',
    type: 'action',
    gameType: 'gta',
    name: 'TP AEROPORT',
    image: '/assets/overlays/Copie_de_template_gtaa_mont_chilliad.png',
    category: 'teleport',
    position: { x: 0, y: 0 },
    size: { width: 120, height: 80 }
  },
  {
    id: 'supprimer-voiture',
    type: 'action',
    gameType: 'gta',
    name: 'SUPPRIME LA VOITURE',
    image: '/assets/overlays/Copie_de_template_gtaa_mont_chilliad.png',
    category: 'vehicle',
    position: { x: 0, y: 0 },
    size: { width: 120, height: 80 }
  }
];

export const timeElements: OverlayElement[] = [
  {
    id: 'bonus-05s',
    type: 'bonus',
    gameType: 'minecraft',
    name: '+0.5 SEC',
    image: '/assets/overlays/Template_SubathonRank.png',
    category: 'time',
    value: '0.5',
    position: { x: 0, y: 0 },
    size: { width: 100, height: 60 }
  },
  {
    id: 'bonus-1s',
    type: 'bonus',
    gameType: 'minecraft',
    name: '+1 SEC',
    image: '/assets/overlays/Template_SubathonRank.png',
    category: 'time',
    value: '1',
    position: { x: 0, y: 0 },
    size: { width: 100, height: 60 }
  }
];

export const templateCategories: TemplateCategory[] = [
  {
    id: 'overlay-win',
    name: 'Overlay de Win',
    description: 'Templates pour les bonus de temps et compteurs',
    gameType: 'minecraft',
    background: '/assets/overlays/cadre_et_fond_minecraft_tnt.png'
  },
  {
    id: 'overlay-action',
    name: 'Overlay d\'Action',
    description: 'Templates pour les actions spéciales et effets',
    gameType: 'gta',
    background: '/assets/overlays/Copie_de_template_gtaa_mont_chilliad.png'
  }
];