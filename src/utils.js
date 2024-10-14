// Helper function to group tickets based on selected grouping option
export function groupTickets(tickets, groupBy, users) {
    if (groupBy === 'status') {
      return [
        { title: 'To Do', tickets: tickets.filter((ticket) => ticket.status === 'Todo') },
        { title: 'In Progress', tickets: tickets.filter((ticket) => ticket.status === 'In progress') },
        { title: 'Backlog', tickets: tickets.filter((ticket) => ticket.status === 'Backlog') },
        { title: 'Done', tickets: tickets.filter((ticket) => ticket.status === 'Done') }, // New "Done" section
        { title: 'Cancelled', tickets: tickets.filter((ticket) => ticket.status === 'Cancelled') }, // New "Cancelled" section
      ];
    } else if (groupBy === 'user') {
      // Only show users where available is true
      const availableUsers = users.filter((user) => user.available);
      return availableUsers.map((user) => ({
        title: user.name,
        tickets: tickets.filter((ticket) => ticket.userId === user.id),
      }));
    } else if (groupBy === 'priority') {
      return [
        { title: 'Urgent', tickets: tickets.filter((ticket) => ticket.priority === 4) },
        { title: 'High', tickets: tickets.filter((ticket) => ticket.priority === 3) },
        { title: 'Medium', tickets: tickets.filter((ticket) => ticket.priority === 2) },
        { title: 'Low', tickets: tickets.filter((ticket) => ticket.priority === 1) },
        { title: 'No Priority', tickets: tickets.filter((ticket) => ticket.priority === 0) }, // New "No Priority" section
      ];
    }
    return [];
  }
  
  // Helper to get the priority label based on the priority value
  export function getPriorityLabel(priority) {
    const labels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    return labels[priority] || 'No priority';
  }
  