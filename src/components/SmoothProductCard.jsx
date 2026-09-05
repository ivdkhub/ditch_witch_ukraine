import React, { useState } from 'react';

/**
 * SmoothProductCard - Subtle hover zoom & highlight effect without scroll entrance animation.
 * 
 * Props:
 * - children: React elements to render inside the card
 * - style: Extra inline styles
 * - className: Extra CSS class names
 * - onClick: Click handler
 */
export default function SmoothProductCard({
  children,
  style = {},
  className = '',
  onClick
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
      style={{
        opacity: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        minWidth: 0,
        maxWidth: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0px)',
        transition: 'transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s ease, border-color 0.28s ease',
        willChange: 'transform',
        ...style
      }}
    >
      {children}
    </div>
  );
}
