import React from 'react';
import KanbanGroup from './KanbanGroup';

const KanbanBoard = ({ groupedTickets }) => {
  return (
    <div className="kanban-board">
      {groupedTickets.map((group, index) => (
        <KanbanGroup key={index} title={group.title} tickets={group.tickets} />
      ))}
    </div>
  );
};

export default KanbanBoard;
