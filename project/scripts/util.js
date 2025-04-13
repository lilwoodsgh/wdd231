export function openModal(content) {
    const modal = document.getElementById("messageModal");
    const modalText = document.getElementById("modalText");
    modalText.textContent = content;
    modal.style.display = "block";
  
    document.querySelector(".close-btn").onclick = () => {
      modal.style.display = "none";
    };
  }
  