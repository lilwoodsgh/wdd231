document.addEventListener("DOMContentLoaded", () => {
  const roleSelect = document.getElementById("role");

  // Fetch roles from JSON
  fetch("data/roles.json")
    .then(response => response.json())
    .then(data => {
      data.roles.forEach(role => {
        const option = document.createElement("option");
        option.value = role.value;
        option.textContent = role.label;
        roleSelect.appendChild(option);
      });
    })
    .catch(error => console.error("Error loading roles:", error));

  // Login functionality
  document.getElementById("login-btn").addEventListener("click", () => {
    const role = roleSelect.value;
    if (!role) {
      alert("Please select your role before logging in.");
      return;
    }
    localStorage.setItem("userRole", role);
    if (role === "learner") window.location.href = "student.html";
    else if (role === "teacher") window.location.href = "staff.html";
    else if (role === "admin") window.location.href = "admin.html";
  });
});