const lastModifiedElement = document.getElementById('last-modified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = lastModifiedDate.toLocaleString();