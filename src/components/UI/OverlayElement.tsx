import React from 'react';
import { OverlayElement as OverlayElementType } from '../../types';

interface OverlayElementProps {
  element: OverlayElementType;
  selected: boolean;
  onClick: () => void;
  onDragStart: (e: React.DragEvent) => void;
}

const OverlayElement: React.FC<OverlayElementProps> = ({
  element,
  selected,
  onClick,
  onDragStart
}) => {
  return (
    <div
      className={`
        relative rounded-lg overflow-hidden cursor-move transition-all duration-200
        ${selected ? 'ring-2 ring-yellow-500 shadow-lg' : 'hover:ring-2 hover:ring-yellow-200'}
      `}
      onClick={onClick}
      draggable
      onDragStart={onDragStart}
      style={{
        width: element.size.width,
        height: element.size.height
      }}
    >
      <img
        src={element.image}
        alt={element.name}
        className="w-full h-full object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-1">
        <p className="text-white text-xs text-center font-medium">
          {element.name}
        </p>
      </div>
    </div>
  );
};

export default OverlayElement;