import React, { useState, useRef, useCallback } from 'react';
import { Palette, Move, Type, Image, Gift, Save, Download, Undo, Redo, Crown, Gamepad2, Blocks } from 'lucide-react';
import { OverlayElement, Template, GameType } from '../types';
import { minecraftElements, gtaElements, timeElements, templateCategories } from '../data/overlayElements';
import OverlayElementComponent from '../components/UI/OverlayElement';
import TemplatePreview from '../components/UI/TemplatePreview';

const EditeurOverlay = () => {
  const [selectedGame, setSelectedGame] = useState<GameType>('minecraft');
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [elements, setElements] = useState<OverlayElement[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const editorRef = useRef<HTMLDivElement>(null);

  const gameElements = {
    minecraft: [...minecraftElements, ...timeElements],
    gta: gtaElements
  };

  const handleElementSelect = (element: OverlayElement) => {
    const newElement = {
      ...element,
      id: `${element.id}-${Date.now()}`,
      position: { x: 100, y: 100 }
    };
    setElements(prev => [...prev, newElement]);
    setSelectedElement(newElement.id);
  };

  const handleDragStart = (e: React.DragEvent, element: OverlayElement) => {
    if (editorRef.current) {
      const rect = editorRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left - element.position.x,
        y: e.clientY - rect.top - element.position.y
      });
      setIsDragging(true);
      setSelectedElement(element.id);
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (isDragging && selectedElement && editorRef.current) {
      const rect = editorRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - dragOffset.x;
      const y = e.clientY - rect.top - dragOffset.y;

      setElements(prev => prev.map(el => 
        el.id === selectedElement
          ? { ...el, position: { x, y } }
          : el
      ));
    }
  }, [isDragging, selectedElement, dragOffset]);

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleSave = () => {
    const template: Template = {
      id: `template-${Date.now()}`,
      name: 'Mon Template',
      category: selectedGame === 'minecraft' ? 'Overlay de Win' : 'Overlay d\'Action',
      gameType: selectedGame,
      elements,
      background: {
        type: 'color',
        value: selectedGame === 'minecraft' ? '#1a1b1f' : '#0d1117'
      },
      resolution: '1080p',
      position: 'center'
    };

    // Simuler la sauvegarde
    console.log('Template sauvegardé:', template);
    alert('Template sauvegardé avec succès !');
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      elements,
      gameType: selectedGame
    }));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `template-${selectedGame}-${Date.now()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Palette className="w-6 h-6 mr-2 text-yellow-500" />
          Éditeur d'Overlay
        </h1>
        <p className="text-gray-600 mt-1">
          Créez des templates d'overlay personnalisés pour vos streams
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-1/4 bg-white rounded-lg shadow-md p-4">
          {/* Game Selection */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-4">Type de Jeu</h2>
            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedGame('minecraft')}
                className={`flex-1 flex items-center justify-center space-x-2 p-3 rounded-md transition-colors ${
                  selectedGame === 'minecraft'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-yellow-50'
                }`}
              >
                <Blocks className="w-5 h-5" />
                <span>Minecraft</span>
              </button>
              <button
                onClick={() => setSelectedGame('gta')}
                className={`flex-1 flex items-center justify-center space-x-2 p-3 rounded-md transition-colors ${
                  selectedGame === 'gta'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-yellow-50'
                }`}
              >
                <Gamepad2 className="w-5 h-5" />
                <span>GTA</span>
              </button>
            </div>
          </div>

          {/* Elements */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-4">Éléments</h2>
            <div className="grid grid-cols-2 gap-4">
              {gameElements[selectedGame].map(element => (
                <OverlayElementComponent
                  key={element.id}
                  element={element}
                  selected={false}
                  onClick={() => handleElementSelect(element)}
                  onDragStart={(e) => handleDragStart(e, element)}
                />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="border-t pt-4">
            <h2 className="font-semibold text-lg mb-4">Actions</h2>
            <div className="space-y-3">
              <button
                onClick={handleSave}
                className="w-full flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-md transition-colors"
              >
                <Save className="w-5 h-5" />
                <span>Sauvegarder</span>
              </button>
              <button
                onClick={handleExport}
                className="w-full flex items-center justify-center space-x-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-50 p-3 rounded-md transition-colors"
              >
                <Download className="w-5 h-5" />
                <span>Exporter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="font-semibold text-lg mb-4">Zone d'édition</h2>
            <div
              ref={editorRef}
              className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden"
              onDragOver={handleDragOver}
              onDrop={handleDragEnd}
            >
              {elements.map(element => (
                <div
                  key={element.id}
                  className={`absolute cursor-move ${
                    selectedElement === element.id ? 'ring-2 ring-yellow-500' : ''
                  }`}
                  style={{
                    left: element.position.x,
                    top: element.position.y,
                    width: element.size.width,
                    height: element.size.height
                  }}
                >
                  <img
                    src={element.image}
                    alt={element.name}
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditeurOverlay;