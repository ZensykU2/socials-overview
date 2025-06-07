document.addEventListener('DOMContentLoaded', () => {
  fetch('./src/json/links.json')
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById('link-list');
      data.forEach(link => {
        const li = document.createElement('li');

        li.innerHTML = `<a href="${link.url}" class="block w-96 text-center mx-auto px-4 py-2 border border-${link.color}-500 text-${link.color}-400 rounded transition-all duration-600 
          hover:bg-${link.color}-500 hover:text-white target="_blank">${link.label}</a>`;

        list.appendChild(li);
      });
    })
    .catch(error => console.error('Fehler beim Laden der Links:', error));
});
