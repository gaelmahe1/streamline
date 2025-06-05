import { ConceptServeur, Server, Statistique, Template } from '../types';

export const conceptsServeur: ConceptServeur[] = [
  {
    id: 'tnt',
    nom: 'TNT',
    description: 'Un monde rempli d\'explosions et de défis à base de TNT',
    image: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'one-bloc',
    nom: 'ONE BLOC',
    description: 'Commencez avec un seul bloc et développez votre monde',
    image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'skyblock',
    nom: 'SKYBLOCK',
    description: 'Survivez sur une île flottante avec des ressources limitées',
    image: 'https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'survie',
    nom: 'SURVIE',
    description: 'Mode de jeu classique avec un focus sur la survie',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export const mockServeur: Server = {
  pseudoDiscord: 'StreamerPro',
  nomServeur: 'MC N2 - StreamerPro',
  concept: 'TNT',
  ipMinecraft: 'mc.streamline-agency.com',
  ipTikFinity: '192.168.1.100',
  port: '25565',
  motDePasse: 'a1b2c3d4',
  statut: 'Prêt'
};

export const mockStatistiques: Statistique = {
  diamants: {
    valeur: 45000,
    objectif: 75000
  },
  heuresLive: {
    valeur: 12,
    objectif: 15
  },
  joursLive: {
    valeur: 7,
    objectif: 7
  }
};

export const mockTemplate: Template = {
  id: 'template1',
  nom: 'Template Standard',
  elements: [
    {
      id: 'bg1',
      type: 'image',
      contenu: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=300',
      position: { x: 0, y: 0 },
      taille: { width: 800, height: 600 }
    },
    {
      id: 'texte1',
      type: 'texte',
      contenu: 'LIVE EXCLUSIF',
      position: { x: 50, y: 50 },
      taille: { width: 300, height: 50 },
      style: { color: '#ffffff', fontSize: '24px', fontWeight: 'bold' }
    },
    {
      id: 'zone1',
      type: 'zone',
      contenu: 'Zone Cadeaux',
      position: { x: 50, y: 150 },
      taille: { width: 200, height: 100 },
      style: { backgroundColor: 'rgba(255, 215, 0, 0.3)', border: '2px dashed #FFD700' }
    },
    {
      id: 'logo1',
      type: 'logo',
      contenu: 'Logo Streamline',
      position: { x: 650, y: 50 },
      taille: { width: 100, height: 50 }
    }
  ]
};