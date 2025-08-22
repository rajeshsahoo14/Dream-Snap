#  Dream Snap - AI Image Generator 

Dream Snap is a full-stack web application that allows users to generate high-quality images using AI. Built using the MERN stack and integrated with image generation APIs, it offers real-time image previews, download functionality, and a clean, responsive UI.

## 🔍 Problem It Solves
Many free AI tools have daily generation limits or slow response times. Dream Snap was built to overcome those restrictions by integrating alternative APIs (like Hugging Face and ClipDrop), allowing **faster, unlimited** image generation with a **more intuitive interface**.

---

## 🚀 Features

- ✅ Real-time image generation from text prompts
- ✅ Live preview and image download support
- ✅ Mobile responsive and user-friendly UI
- ✅ API integration with ClipDrop or Stable Diffusion
- ✅ Built with clean, modular code structure (MERN stack)

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: Hugging Face (Stable Diffusion) / ClipDrop API
- **Other Tools**: Axios, dotenv, CORS

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/rajeshsahoo14/DreamSnap.git
cd DreamSnap

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

# Add your API keys in .env
touch .env
# Add:
# REACT_APP_API_KEY=your_api_key
# BACKEND_API_URL=http://localhost:5000

# Run both servers
npm run dev
