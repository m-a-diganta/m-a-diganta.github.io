import React from 'react';
import './SkillCard.css';

const SkillCard = ({ name, icon }) => {
  return (
    <div className="skill-card">
      <div className="icon">{icon}</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default SkillCard;

