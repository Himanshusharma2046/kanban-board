import React from 'react';
import Ticket from './Ticket';

const KanbanGroup = ({ title, tickets }) => {
  return (
    <div className="kanban-group">
      <h3>{title}</h3>
      <div className="kanban-column">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default KanbanGroup;
