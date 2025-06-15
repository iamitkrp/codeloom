import React from 'react';
import './ServiceCard.css';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="logo">
            {React.cloneElement(icon as React.ReactElement, { className: "icon" })}
        </div>
        <div className="content">
          <span className="title">{title}</span>
          <span className="text">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 