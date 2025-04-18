export async function loadMessages() {
  try {
    const response = await fetch('data/messages.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const messages = await response.json();

    const messageList = document.getElementById('messageList');
    messageList.innerHTML = "";

    if (messages.length === 0) {
      messageList.innerHTML = '<li class="placeholder">No messages to display. Start by composing a new message!</li>';
      return;
    }

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

  } catch (error) {
    console.error("Failed to load messages:", error);
    alert("Failed to load messages. Please try again later.");
  }
}

function openModal(messageContent) {
  const modal = document.getElementById("messageModal");
  const modalMessageContent = document.getElementById("modalMessageContent");
  modalMessageContent.textContent = messageContent;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("messageModal").style.display = "none";
}

function handleFormSubmit(event) {
  event.preventDefault();

  const recipient = document.getElementById('recipient').value;
  const messageText = document.getElementById('messageText').value;

  if (!recipient || !messageText) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  const newMessage = {
    sender: "You",
    message: messageText,
    date: new Date().toLocaleString(),
    role: recipient
  };

  const messageList = document.getElementById('messageList');
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>[${newMessage.sender}]</strong> 
    ${newMessage.message}
    <br><small>${newMessage.date} - ${newMessage.role}</small>
    <button class="view-btn" data-message="${newMessage.message}">View</button>
  `;
  messageList.appendChild(li);

  // Clear the form
  document.getElementById('messageForm').reset();
}

document.addEventListener("DOMContentLoaded", () => {
  const messageList = document.getElementById('messageList');

  // Simulate fetching messages (replace with actual API call)
  fetch('/api/messages')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      return response.json();
    })
    .then(messages => {
      messageList.innerHTML = ''; // Clear placeholder
      if (messages.length === 0) {
        messageList.innerHTML = '<li>No messages available.</li>';
      } else {
        messages.forEach(message => {
          const li = document.createElement('li');
          li.textContent = message.content; // Adjust based on API response structure
          messageList.appendChild(li);
        });
      }
    })
    .catch(error => {
      console.error(error);
      messageList.innerHTML = '<li>Failed to load messages. Please try again later.</li>';
    });

  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", closeModal);

  document.getElementById('messageList').addEventListener('click', (e) => {
    if (e.target.classList.contains('view-btn')) {
      const messageContent = e.target.dataset.message;
      openModal(messageContent);
    }
  });

  const messageForm = document.getElementById('messageForm');
  messageForm.addEventListener('submit', handleFormSubmit);
});
