# ⭐ **GDG Patna – DevFest 2025 Website**

A modern, responsive website built for **DevFest 2025** by **GDG Patna**.
This repository powers the official event website, featuring speakers, agenda, guidelines, tickets, FAQs, badge generator, and more.

<p align="center">
  <img src="https://devfest.gdgpatna.com/og-1200x630.png" alt="DevFest 2025 Logo"/>
</p>

---

# 📛 **Badges**

<p align="left">
  <img src="https://img.shields.io/badge/React-18-blue.svg" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4.svg" />
  <img src="https://img.shields.io/badge/Vite-Build-lightyellow.svg" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg" />
  <img src="https://img.shields.io/badge/Status-Active-brightgreen.svg" />
</p>

---

# 🚀 **Tech Stack**

* ⚛️ **React** (Vite)
* 🎨 **Tailwind CSS**
* 🌐 **React Router DOM**
* 🔤 Custom Fonts
* 📦 Modular Components
* 🧭 Smooth scrolling + hash navigation

---

# 📁 **Project Structure**

```
src/
│── assets/
│── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── Teams.jsx
│   ├── Faqs.jsx
│   ├── Footer.jsx
│   ├── ticket/
│   └── about/
│── pages/
│   ├── Home.jsx
│   ├── Guidelines.jsx
│   ├── Badge.jsx
│   ├── NotFound.jsx
│── App.jsx
│── main.jsx
```

---

# 🔗 **Live Website**
[https://devfest.gdgpatna.com](https://devfest.gdgpatna.com)

---

# 🧭 **Routes Overview**

| Route        | Description      |
| ------------ | ---------------- |
| `/`          | Homepage         |
| `/guideline` | Event guidelines |
| `/badge`     | Badge generator  |
| `/partners`  | Event partners   |
| `*`          | Custom 404 page  |

---

# ⚙️ **Setup Instructions**

### **1. Clone the repository**

```bash
git clone https://github.com/gdg-patna/devfest25.git
cd devfest25
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Start the development server**

```bash
npm run dev
```

### **4. Build for production**

```bash
npm run build
```

### **5. Preview production build**

```bash
npm run preview
```

---

# 🚀 Deployment

### ▶ Deploy to **Vercel**

1. Push code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Import the repo
4. Framework: **Vite**
5. Deploy

### ▶ Deploy to **Netlify**

```bash
npm run build
```

Upload the `/dist` folder or connect GitHub repo.

---90

# 🧪 How to Test

* Navigate between all routes
* Test hash links like `/#about`, `/#faq`
* Verify smooth scrolling
* Test badge generation page
* Validate 404 page appearance
* Check responsive behavior on:

  * Desktop
  * Tablet
  * Mobile

---

# 🤝 Contribution Guidelines

We welcome contributions!

### **1. Fork the repo**

### **2. Create a new branch**

```bash
git checkout -b feature/your-feature
```

### **3. Commit your changes**

```bash
git commit -m "feat: add new feature"
```

### **4. Push the branch**

```bash
git push origin feature/your-feature
```

### **5. Open a Pull Request**

Describe your changes clearly.

---

# 📜 License

This project is released under the **MIT License**.
See the `LICENSE` file for details.

---

# 🙌 Acknowledgements

* ❤️ Google Developer Groups (GDG) Community
* 🚀 Contributors & Volunteers
* 🎨 TailwindCSS & React teams
* 🌍 DevFest Community worldwide
