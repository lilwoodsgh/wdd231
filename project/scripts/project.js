import { loadMessages } from './messages.js';

const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Toggle mobile navigation
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Toggle dark mode
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

  themeToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

const form = document.getElementById('messageForm');
const messageList = document.getElementById('messageList');
const modal = document.getElementById("messageModal");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close-btn");

// Fetch and display messages
async function fetchMessages() {
  try {
    const response = await fetch("../data/messages.json"); // Adjust path as needed
    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }
    const messages = await response.json();
    displayMessages(messages);
    localStorage.setItem("messages", JSON.stringify(messages)); // Cache messages in localStorage
  } catch (error) {
    console.error("Error loading messages:", error);
    const cachedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    displayMessages(cachedMessages); // Load messages from localStorage if fetch fails
  }
}

// Function to display messages in the list
function displayMessages(messages) {
  messageList.innerHTML = ""; // Clear existing messages first

  messages.forEach(msg => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>[${msg.sender}]</strong> ${msg.text}`;
    li.addEventListener("click", () => openMessageModal(msg));
    messageList.appendChild(li);
  });
}

// Function to open modal with message details
function openMessageModal(message) {
  modalText.textContent = `From: ${message.sender}\nTo: ${message.recipient}\n\n${message.text}`;
  modal.style.display = "block";
}

// Modal close button logic
document.addEventListener("DOMContentLoaded", () => {
  const cachedMessages = JSON.parse(localStorage.getItem("messages")) || [];
  if (cachedMessages.length > 0) {
    displayMessages(cachedMessages); // Load cached messages initially
  } else {
    fetchMessages(); // Fetch messages if no cached messages exist
  }

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Sending a message (adds it to localStorage)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const recipient = document.getElementById("recipient").value;
    const text = document.getElementById("messageText").value;

    if (recipient && text) {
      const newMessage = {
        sender: localStorage.getItem("userRole") || "Admin",
        recipient: recipient,
        text: text
      };

      const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
      storedMessages.push(newMessage);
      localStorage.setItem("messages", JSON.stringify(storedMessages));

      const li = document.createElement("li");
      li.innerHTML = `<strong>[${newMessage.sender}]</strong> ${newMessage.text}`;
      li.addEventListener("click", () => openMessageModal(newMessage));
      messageList.appendChild(li);

      form.reset();
    }
  });
});
