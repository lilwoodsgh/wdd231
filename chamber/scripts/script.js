// Fetch and display member data
async function fetchMembers() {
  const response = await fetch('../../data/members.json');
  const members = await response.json();
  const container = document.querySelector('.members-container');
  container.innerHTML = members.map(member => `
    <div class="member-card">
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership Level: ${member.membershipLevel}</p>
      <p>${member.description}</p>
    </div>
  `).join('');
}

// Toggle between grid and list views
function toggleView(view) {
  const container = document.querySelector('.members-container');
  container.className = `members-container ${view}`;
}

// Display copyright year and last modification date
function displayFooterInfo() {
  const year = new Date().getFullYear();
  document.querySelector('#copyright-year').textContent = year;
  document.querySelector('#last-modified').textContent = document.lastModified;
}

// Event listeners
document.querySelector('#grid-view').addEventListener('click', () => toggleView('grid'));
document.querySelector('#list-view').addEventListener('click', () => toggleView('list'));

// Initialize
fetchMembers();
displayFooterInfo();
