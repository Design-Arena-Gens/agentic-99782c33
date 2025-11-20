import React, { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren & {
  id?: string;
  title: string;
  description?: string;
};

export const Card: React.FC<CardProps> = ({ id, title, description, children }) => {
  return (
    <section id={id} className="card">
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      <div>
        {children}
      </div>
    </section>
  );
};
