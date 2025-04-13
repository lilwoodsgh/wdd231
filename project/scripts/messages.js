export async function loadMessages() {
    try {
      const response = await fetch('data/messages.json');
      const messages = await response.json();
  
      const messageList = document.getElementById('messageList');
      messageList.innerHTML = "";
  
      messages.forEach(msg => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>[${msg.sender}]</strong> 
          ${msg.message}
          <br><small>${msg.date} - ${msg.role}</small>
          <button class="view-btn" data-message="${msg.message}">View</button>
        `;
        messageList.appendChild(li);
      });
  
      // Add modal triggers
      document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", e => {
          const messageContent = e.target.dataset.message;
          openModal(messageContent);
        });
      });
  
    } catch (error) {
      console.error("Failed to load messages:", error);
    }
  }

document.addEventListener("DOMContentLoaded", () => {
  loadMessages();

  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    document.getElementById("messageModal").style.display = "none";
  });

  // form submit handler if you like (optional)
});
