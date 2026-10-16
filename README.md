# Radiant Haven – Express.js Lab

## Run
    npm install
    npm start        # or: npm run dev  (nodemon)
Open http://localhost:3000

## Structure
    server.js            Express routes + static middleware
    public/
      index.html menu.html about.html contact.html
      css/style.css
      js/menu.js contact.js
      images/*.svg

## Routes
GET /  /menu  /about  /contact   -> res.sendFile() (logs "Rendering <file>")
GET /api/menu                    -> all items (JSON)
GET /api/menu?category=hot|iced  -> filter with req.query
GET /api/menu/:id                -> one item with req.params (404 JSON if missing)
GET /favicon.ico                 -> serves images/favicon.svg