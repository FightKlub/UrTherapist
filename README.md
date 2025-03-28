# 🧠 UrTherapist

**UrTherapist** is a multi-modal AI-powered mental health companion that listens, understands, and responds to you — just like a caring therapist.  
It leverages facial expressions, voice tone, and text input to detect your emotional state and respond with empathy, therapy suggestions, and support.

> 💡 Built using Microsoft Azure AI Services, Together.ai, and GitHub Copilot.

---

## 🔥 Problem Statement

Millions lack access to consistent, empathetic mental health support. Traditional therapy is often inaccessible, expensive, or intimidating.  
**UrTherapist** offers a safe, always-available emotional companion that listens to your feelings — whether you’re sad, happy, anxious, or just need to talk.

---

## 🎯 Features

- 🎥 **Facial Emotion Detection** via camera (using Azure Face API)
- 🎙️ **Voice Emotion Detection** via microphone (Azure Speech-to-Text + Text Analytics)
- 💬 **Text-based Sentiment Detection** with empathetic replies
- 🧠 **AI Therapist Chatbot** powered by Together.ai (Mistral 7B Instruct)
- 📊 **Session History Tracking** stored in Azure SQL Database
- 🔍 **Therapy Recommendations** using Azure Cognitive Search
- 🕒 **Live Session Timer + Stats**
- 🔐 **Firebase Authentication (Login/Register)**

---

## 🧠 Azure Services Used

| Azure Service               | Purpose                                                   |
|----------------------------|-----------------------------------------------------------|
| **Azure Face API**         | Detect facial landmarks to determine emotions            |
| **Azure Speech Service**   | Convert audio input to text                               |
| **Azure Text Analytics**   | Perform sentiment analysis on voice or text input         |
| **Azure SQL Database**     | Store session history and therapy feedback                |
| **Azure Cognitive Search** | Fetch therapy resources based on past user sessions       |

---

## ⚙️ Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: FastAPI (Python) with Azure SDKs
- **AI Chat**: Together.ai Mistral-7B-Instruct
- **Database**: Azure SQL Server
- **Voice**: Web Audio API + Azure STT
- **Face**: Webcam.js + Azure Face API
- **Auth**: Firebase Authentication

---

## 🚀 Project Flow Example

1. User logs in using Firebase auth.
2. They click mic or camera — voice or face is captured.
3. Azure services analyze the emotion.
4. Together.ai responds like a compassionate therapist.
5. Session info is saved in Azure SQL.
6. User views previous sessions + live stats.

---

## 📹 Demo Video

▶️ [Watch the video](https://youtu.be/Wv16JgAmKs0?si=dUxiPcd3dr_2bZCb)

---

## 🛠️ Built With

- GitHub Copilot
- Visual Studio Code
- React + Vite
- FastAPI
- Azure SDKs (Face, Text Analytics, Speech)
- Together.ai
- Firebase
- Axios + Webcam.js + MediaRecorder

---

## 🎯 Submission Categories

- ✅ **Best Use of GitHub Copilot**
- ✅ **Best Use of Azure AI**
- ✅ **Best Azure App Integration**

---

## 📬 Inspiration

> I needed a therapist 6 months ago when I was struggling and had no one to talk to. This app is born from that void — to ensure no one feels alone, unheard, or unsupported.

Inspired by the movie *Her* and the series *Lucifer*, **UrTherapist** is a compassionate companion that’s always there for you.

---

## 🙌 Made with heart by [Jerome Richard D (FightKlub)](https://github.com/FightKlub)

