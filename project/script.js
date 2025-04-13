li.innerHTML = `
  <strong>[${msg.sender}]</strong> 
  ${msg.message}
  <br><small>${msg.date} - ${msg.role}</small>
  <button class="view-btn" data-message="${msg.message}" data-sender="${msg.sender}">View</button>
`;
