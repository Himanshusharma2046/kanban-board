import React from 'react';
import Ticket from './Ticket';

const Board = ({ tickets, users, groupBy, sortBy }) => {
  const groupTickets = () => {
    let grouped = {};

    if (groupBy === 'status') {
      grouped = tickets.reduce((acc, ticket) => {
        acc[ticket.status] = acc[ticket.status] || [];
        acc[ticket.status].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === 'user') {
      grouped = tickets.reduce((acc, ticket) => {
        const user = users.find(u => u.id === ticket.userId);
        const userName = user ? user.name : 'Unknown';
        acc[userName] = acc[userName] || [];
        acc[userName].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === 'priority') {
      grouped = tickets.reduce((acc, ticket) => {
        acc[ticket.priority] = acc[ticket.priority] || [];
        acc[ticket.priority].push(ticket);
        return acc;
      }, {});
    }

    return grouped;
  };

  const sortTickets = (group) => {
    return group.sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    });
  };

  const groupedTickets = groupTickets();

  return (
    <div className="board">
      {Object.keys(groupedTickets).map(group => (
        <div key={group} className="column">
          <h2>{group}</h2>
          {sortTickets(groupedTickets[group]).map(ticket => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
