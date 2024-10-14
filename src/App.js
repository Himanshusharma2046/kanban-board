import React, { useState, useEffect } from 'react';
import './App.css';
import GroupSelector from './components/GroupSelector';
import SortSelector from './components/SortSelector';
import KanbanBoard from './components/KanbanBoard';
import { groupTickets } from './utils'; // Move grouping logic to utils.js

// Main App Component
function App() {
  const [groupBy, setGroupBy] = useState('status');
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    };

    fetchData();
  }, []);

  // Group tickets based on selected grouping option
  const groupedTickets = groupTickets(tickets, groupBy, users);

  return (
    <div className="kanban-container">
      <div className="controls">
        <GroupSelector groupBy={groupBy} setGroupBy={setGroupBy} />
        <SortSelector tickets={tickets} setTickets={setTickets} />
      </div>
      <KanbanBoard groupedTickets={groupedTickets} />
    </div>
  );
}

export default App;
