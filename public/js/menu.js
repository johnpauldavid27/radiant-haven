const grid = document.getElementById('menu-grid');

async function loadMenu(category = '') {
  const url = category ? `/api/menu?category=${category}` : '/api/menu';
  try {
    const res = await fetch(url);
    const items = await res.json();
    grid.innerHTML = items.map(i => `
      <article class="card">
        <img src="${i.image}" alt="${i.name}">
        <div class="card-info">
          <h3>${i.name} <span>₱${i.price}</span></h3>
          <p>${i.description}</p>
        </div>
      </article>`).join('');
  } catch (err) {
    grid.innerHTML = '<p>Could not load the menu.</p>';
  }
}

document.querySelectorAll('.filters button').forEach(btn =>
  btn.addEventListener('click', () => loadMenu(btn.dataset.cat))
);

loadMenu();
