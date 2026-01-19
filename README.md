# Blogging Website 📝

A simple blogging website built with **Node.js**, **Express**, and **EJS**. It lets users write, view, and manage blog posts (in-memory for now — no database yet).

---

## ✨ Features

- 🖊️ Create/write blog posts
- 📄 View submitted blogs
- 🔍 Individual blog view page
- 🧩 Clean EJS partials for header & footer
- 🧱 Minimal setup — perfect starter to later plug in a DB (MongoDB/PostgreSQL)

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Templating:** EJS  
- **Version Control:** Git & GitHub

---

## 📁 Folder Structure

```text
blogging-website/
├── views/
│   ├── index.ejs
│   ├── viewing.ejs
│   ├── update-delete.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
````

---

## 🚀 Getting Started

### 1) Clone the repo

```bash
git clone https://github.com/Rakeshneopane/blogging-website.git
```

### 2) Go into the project directory

```bash
cd blogging-website
```

### 3) Install dependencies

```bash
npm install
```

### 4) Run the server

```bash
node index.js
```

> By default it should run on `http://localhost:3000` (adjust if you used a different port).

---

## 🔌 Available Routes (current)



* `GET /` – Render home page (form / list of posts)
* `POST /submit` – Submit a new blog post
* `GET /view/:id` – View a single blog (if implemented)
* `POST /update/:id` – Update blog (if implemented)
* `POST /delete/:id` – Delete blog (if implemented)

---

## 🧭 Roadmap / Ideas

* ✅ Add a proper README (you’re doing it now!)
* 🗄️ Add MongoDB / Prisma + PostgreSQL for persistence
* 👤 User authentication (JWT / Sessions / Passport.js / Auth.js)
* 🖼️ Image uploads for posts
* 🧪 Unit & integration tests
* 🚀 Deploy on Render / Railway / Vercel

---

## 🧰 Scripts (optional)

If you add **nodemon**, you can use this in `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Then run:

```bash
npm run dev
```

---

## 🧾 License

MIT License — feel free to use, modify, and distribute.

---

## 👤 Author

**Rakesh Neopane**

Made with ❤️ while learning and building.

