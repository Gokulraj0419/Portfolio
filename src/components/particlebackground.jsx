import React from 'react';
import "../style/style.css";


function ParticleBackground() {
  return (
    <div className="position-absolute top-0 start-0 w-100 h-100 z-1 overflow-hidden" style={{ zIndex: 0, pointerEvents: 'none' }}>
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="position-absolute bg-neon-red rounded-circle particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
      {[...Array(30)].map((_, i) => (
        <div
          key={`purple-${i}`}
          className="position-absolute bg-neon-purple rounded-circle particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

export default ParticleBackground;