document.addEventListener("DOMContentLoaded", () => {
  // Fetch and display active courses
  fetch("data/stats.json")
    .then(response => response.json())
    .then(data => {
      document.querySelector(".stats-cards .card:nth-child(1) h3").textContent = data.activeCourses;
      document.querySelector(".stats-cards .card:nth-child(2) h3").textContent = data.upcomingDeadlines;
      document.querySelector(".stats-cards .card:nth-child(3) h3").textContent = data.newMessages;
      document.querySelector(".stats-cards .card:nth-child(4) h3").textContent = data.averageGrade;
    })
    .catch(error => console.error("Error loading stats:", error));

  // Fetch and display messages
  fetch("data/messages.json")
    .then(response => response.json())
    .then(messages => {
      const messageList = document.getElementById("messageList");
      messageList.innerHTML = ""; // Clear placeholder

      if (messages.length === 0) {
        messageList.innerHTML = '<li class="placeholder">No messages yet. Compose a new one!</li>';
        return;
      }

      messages.forEach(msg => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>[${msg.sender}]</strong> ${msg.message}
          <br><small>${msg.date} - ${msg.role}</small>
        `;
        messageList.appendChild(li);
      });
    })
    .catch(error => console.error("Error loading messages:", error));
});