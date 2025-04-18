document.addEventListener("DOMContentLoaded", () => {
  // Fetch and display total students
  fetch("data/students.json")
    .then(response => response.json())
    .then(data => {
      document.querySelector(".stats-cards .card:nth-child(1) h3").textContent = data.totalStudents;
    })
    .catch(error => console.error("Error loading students:", error));

  // Fetch and display classes today
  fetch("data/classes.json")
    .then(response => response.json())
    .then(data => {
      document.querySelector(".stats-cards .card:nth-child(2) h3").textContent = data.classesToday;
    })
    .catch(error => console.error("Error loading classes:", error));

  // Fetch and display new messages
  fetch("data/messages.json")
    .then(response => response.json())
    .then(data => {
      document.querySelector(".stats-cards .card:nth-child(3) h3").textContent = data.newMessages;
    })
    .catch(error => console.error("Error loading messages:", error));

  // Fetch and display pending reports
  fetch("data/reports.json")
    .then(response => response.json())
    .then(data => {
      document.querySelector(".stats-cards .card:nth-child(4) h3").textContent = data.pendingReports;
    })
    .catch(error => console.error("Error loading reports:", error));
});