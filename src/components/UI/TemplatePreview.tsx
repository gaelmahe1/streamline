import React from 'react';
import { Template } from '../../types';

interface TemplatePreviewProps {
  template: Template;
  onClick: () => void;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ template, onClick }) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div 
        className="aspect-video bg-cover bg-center"
        style={{ 
          backgroundImage: template.background.type === 'image' 
            ? `url(${template.background.value})` 
            : template.background.type === 'gradient'
            ? template.background.value
            : 'none',
          backgroundColor: template.background.type === 'color' ? template.background.value : undefined
        }}
      >
        {template.elements.map((element) => (
          <div
            key={element.id}
            className="absolute"
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
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200">
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <h3 className="text-white font-semibold">{template.name}</h3>
          <p className="text-gray-200 text-sm">{template.category}</p>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreview;