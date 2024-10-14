import React from 'react';

const SortSelector = ({ tickets, setTickets }) => {
  const handleSort = (e) => {
    const sortOption = e.target.value;
    let sortedTickets = [...tickets];

    if (sortOption === 'priority') {
      sortedTickets.sort((a, b) => b.priority - a.priority);
    } else if (sortOption === 'title') {
      sortedTickets.sort((a, b) => a.title.localeCompare(b.title));
    }

    setTickets(sortedTickets);
  };

  return (
    <div className="sort-selector">
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" onChange={handleSort}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortSelector;
