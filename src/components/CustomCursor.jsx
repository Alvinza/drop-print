// components/CustomCursor.js (with optional trail effect)
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only show cursor on desktop
    const checkScreenSize = () => {
      if (window.innerWidth > 768) {
        setIsVisible(true);
        document.body.style.cursor = 'none';
      } else {
        setIsVisible(false);
        document.body.style.cursor = 'auto';
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Check if hovering over clickable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('clickable') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    // Handle cursor leaving the window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail effect */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out',
          width: '40px',
          height: '40px',
        }}
      >
        <div className="w-full h-full rounded-full bg-blue-200 opacity-20 blur-md" />
      </div>

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '32px',
          height: '32px',
        }}
      >
        {/* Outer ring - Always black */}
        <div 
          className={`absolute inset-0 rounded-full border-2 border-black transition-all duration-200 ${
            isClicking ? 'scale-90' : 'scale-100'
          }`}
          style={{
            backgroundColor: isPointer ? 'rgba(0, 0, 0, 0.03)' : 'transparent',
          }}
        />
        
        {/* Inner dot - Always blue */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 transition-all duration-200 ${
            isClicking ? 'w-2 h-2' : 'w-1.5 h-1.5'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;