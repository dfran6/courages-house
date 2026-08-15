# Courage's House — 3D Web Experience

An interactive 3D recreation of Courage the Cowardly Dog's house, built as an experiment in combining **3D modeling and web development**.

The project started while binge-watching *Courage the Cowardly Dog*. I decided to recreate the exterior of the house in Blender and turn it into an interactive web experience.

> Part 1 — Exterior

## ✨ Experience

The experience combines a scroll-driven 3D animation with an interactive exploration mode.

- Scroll-driven house assembly
- Interactive 3D model
- Orbit controls
- Pan, rotate and zoom
- Responsive design
- Ambient environmental audio
- Loading experience
- Cinematic post-processing
- Interactive UI
- Mobile touch controls
- R3F / Three.js powered rendering

## 🛠️ Built With

### 3D

- Blender
- GLTF / GLB
- Draco compression

### Web

- React
- React Three Fiber
- Three.js
- React Three Drei
- React Three Postprocessing
- Vite

### Assets

Large 3D and audio assets are hosted externally using **Cloudflare R2**.

## 🎨 Project Structure

```text
src/
├── assets/
│   ├── images/
│   └── ...
│
├── components/
│   ├── experience/
│   │   ├── Scene.jsx
│   │   ├── House.jsx
│   │   ├── ExperienceController.jsx
│   │   └── ...
│   │
│   └── ui/
│       ├── Header.jsx
│       ├── LoadingScreen.jsx
│       ├── AudioController.jsx
│       └── ...
│
├── hooks/
├── utils/
├── App.jsx
└── main.jsx

##🚀 Running Locally

Clone the repository:

git clone <repository-url>
cd <project-folder>

Install dependencies:

npm install

Start the development server:

npm run dev

### 🌐 External Assets

The production application loads the following assets from Cloudflare R2:

- 3D house model
- GLTF binary data
- Ambient audio
- Other large/static assets

The asset URLs are configured separately from the application source code.

### 📱 Mobile

The experience is designed to work on both desktop and mobile devices.

Desktop:

Mouse wheel — scroll through the experience
Drag — rotate
Scroll/pinch — zoom
Pan — move around the model

Mobile:

Touch scrolling
Touch rotation
Pinch to zoom
Touch-based exploration

### 🔊 Audio

The experience includes subtle ambient environmental audio.

Audio activation is triggered by user interaction to comply with browser autoplay restrictions.

Users can also manually mute/unmute the experience.

### 🎬 Post Processing

The scene uses subtle post-processing to enhance the visual presentation:

- Bloom
- Vignette
- Film grain / noise

The effects are intentionally kept subtle so they enhance the model without distracting from it.

### 🧩 Current Version
V1 — Exterior

The current version focuses on recreating the exterior environment of Courage's house.

The house can be assembled through the scroll-driven experience and explored interactively once the animation is complete

### 🔮 What's Next?
> Part 2 — Interior

The next stage of the project will explore the interior of the house.

Planned features include:

Interior modeling
Interactive interior exploration
Additional environmental details
More animations
Expanded storytelling
👨🏾‍💻 About

Built by dFran6.

This project is an exploration of what happens when 3D modeling and web development meet.

Modeled in Blender.

Built with React Three Fiber.

Watch out for Part 2. 

**God is the greatest**