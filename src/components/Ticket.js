import React from 'react';
import { getPriorityLabel } from '../utils'; // Import the priority label helper

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <h4>{ticket.title}</h4>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <span className={`priority priority-${ticket.priority}`}>
        {getPriorityLabel(ticket.priority)}
      </span>
    </div>
  );
};

export default Ticket;
