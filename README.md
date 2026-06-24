# 🤖 Spax AI

**Spax AI** is a fully-featured, cloud-synced, and highly customizable AI web assistant built from scratch. It offers a premium ChatGPT-like experience with voice input, file analysis, and Google authentication, all powered by a free, globally-hosted backend.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Frontend](https://img.shields.io/badge/frontend-Vanilla%20JS-orange)
![Backend](https://img.shields.io/badge/backend-FastAPI-red)

---

## ✨ Features

### 🎨 Modern & Responsive UI
* **Dark & Light Modes:** Seamlessly switch themes.
* **Persistent Chat History:** Save, rename, and manage multiple conversations.
* **Markdown & Code Rendering:** Beautiful formatting with syntax highlighting and one-click "Copy Code" buttons.
* **Fully Responsive:** Looks perfect on desktop, tablet, and mobile.

### 🧠 Advanced AI Capabilities
* **Streaming Responses:** Text appears word-by-word in real-time.
* **Voice Input:** Click the microphone to dictate your messages (Web Speech API).
* **File Uploads:** Upload `.txt`, `.pdf`, `.csv`, `.json`, and images for the AI to analyze.
* **Multi-Model Support:** Easily switch between Llama 3.3 (via Groq), GPT-4, or any OpenAI-compatible API directly from the UI.

### 🔐 Cloud & Authentication
* **Google Sign-In:** Securely log in with your Google account via Firebase.
* **Cloud Sync:** Your chats, settings, and profile automatically sync to Firestore, accessible from any device.
* **Customizable Profile:** Change your display name and avatar emoji.

---

## 🏗️ Architecture

Spax AI is split into three main components:

1. **Frontend (`index.html`):** A single-page application (SPA) built with Vanilla JS, handling the UI, local storage, Firebase auth, and streaming. Hosted on **GitHub Pages**.
2. **Backend (`main.py`):** A Python FastAPI server that acts as a secure middleman. It takes your prompt, attaches the API key, talks to the AI provider, and streams the response back. Hosted on **Hugging Face Spaces**.
3. **Database & Auth:** **Firebase** handles Google Authentication and stores user data (chats/settings) in a NoSQL Firestore database.

---

## 📱 Mobile App

Spax AI has a dedicated mobile-optimized UI! Open `mobile.html` on your phone and add it to your home screen for a native app experience.

**Mobile Features:**
- Bottom navigation bar
- Swipe gestures for chat history
- Floating action button
- Full-screen modals
- PWA installable (Add to Home Screen)
- Safe area support for notches
- Voice input optimized for mobile

---

## 🚀 Setup & Installation

Want to run your own version of Spax AI? Follow these steps!

### 1. Setup the Backend (Hugging Face Spaces)
*No credit card required!*
1. Create a new Space on [Hugging Face](https://huggingface.co/spaces) and select the **Docker** SDK.
2. Upload the following files from this repository:
   * `main.py` (The FastAPI backend)
   * `requirements.txt` (Python dependencies)
   * `Dockerfile` (Container instructions)
3. Go to **Settings** -> **Variables and secrets** and add your AI API Key:
   * **Name:** `API_KEY` | **Value:** Your [Groq](https://console.groq.com/) or OpenAI API key.

### 2. Setup Firebase (Database & Auth)
1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. **Authentication:** Go to Build -> Authentication -> Sign-in method. Enable **Google**.
3. **Firestore:** Go to Build -> Firestore Database. Create a database in **Test Mode**.
4. **Web App:** Click the `</>` icon to register a web app. Copy the `firebaseConfig` object.

### 3. Setup the Frontend (GitHub Pages)
1. Open `index.html` in a text editor.
2. Find the `firebaseConfig` object (around line 450) and paste the credentials you copied from Firebase.
3. Find the `state.settings.apiUrl` and paste your Hugging Face backend URL (e.g., `https://your-username-spax-ai.hf.space/chat`).
4. Push `index.html` to your GitHub repository.
5. Go to your repo **Settings** -> **Pages** and deploy the `main` branch.

---

## ⚙️ Configuration

You don't need to touch the code to change how Spax AI behaves! Once the app is running, click the **Settings** gear icon in the bottom left of the sidebar.

* **Backend Endpoint:** Change where the app sends requests.
* **API Key & Base URL:** Switch between Groq, OpenAI, or local models (like Ollama).
* **Model:** Type the exact model name (e.g., `llama-3.3-70b-versatile`, `gpt-4o-mini`).
* **System Prompt:** Change Spax AI's personality and instructions.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Libraries:** Marked.js (Markdown), Highlight.js (Code), Firebase SDK (Auth/DB)
* **Backend:** Python 3.10, FastAPI, Uvicorn, OpenAI Python SDK
* **Hosting:** GitHub Pages (Frontend), Hugging Face Spaces (Backend)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <b>Built with ❤️ using FastAPI, Firebase, and Vanilla JS.</b>
</div>
