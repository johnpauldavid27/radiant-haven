//David, John Paul S.
//WD-303
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public'), { index: false }));

const menu = [
  { id: 1, name: 'Espresso',   category: 'hot', price: 90,  image: '/images/espresso.svg',   description: 'A rich and bold coffee shot, perfect for a quick caffeine boost.' },
  { id: 2, name: 'Cappuccino', category: 'hot', price: 130, image: '/images/cappuccino.svg', description: 'A classic Italian coffee drink with equal parts espresso, steamed milk, and froth.' },
  { id: 3, name: 'Latte',      category: 'hot', price: 140, image: '/images/latte.svg',      description: 'A smooth and creamy coffee made with espresso and steamed milk, topped with a light layer of foam.' },
  { id: 4, name: 'Sunrise Cold Brew', category: 'iced', price: 160, image: '/images/coldbrew.svg', description: 'Slow-steeped cold brew over ice with a drizzle of honey and a hint of orange zest.' }
];

function sendPage(res, file) {
  console.log(`Rendering ${file}`);
  res.sendFile(path.join(__dirname, 'public', file));
}

app.get('/',        (req, res) => sendPage(res, 'index.html'));
app.get('/menu',    (req, res) => sendPage(res, 'menu.html'));
app.get('/about',   (req, res) => sendPage(res, 'about.html'));
app.get('/contact', (req, res) => sendPage(res, 'contact.html'));

app.get('/api/menu', (req, res) => {
  const { category } = req.query;
  const result = category ? menu.filter(m => m.category === category) : menu;
  res.json(result);
});

app.get('/api/menu/:id', (req, res) => {
  const item = menu.find(m => m.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Menu item not found' });
  res.json(item);
});

app.get('/favicon.ico', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'images', 'favicon.svg')));

app.use((req, res) => {
  console.log(`404 Not Found: ${req.originalUrl}`);
  res.status(404).send('<h1 style="font-family:sans-serif">404 - Page Not Found</h1><a href="/">Back home</a>');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
