# Introduction

[Lire en français - 🇫🇷](README_FR.md)

As a school project during my **first year of master's degree**, I created **technical documentation** on **Docker** using **Docusaurus**, a modern static site generator.

The project is fully **Dockerized** for easy deployment and collaboration.

## 📒 Index

- [About](#🔰-about)
- [Demo](#🚀-demo)
- [Stack](#🛠️-stack)
- [Features](#✨-features)
- [Usage](#📦-usage)
- [Timeline](#📅-timeline)

## 🔰 About

This website is a **documentation portal** designed to **transcribe and organize the notes** I took during my **Docker course**. It covers essential concepts, best practices, and practical examples to serve as a reference throughout my learning journey.

Built with **Docusaurus**, the project offers a clean and interactive reading experience.

## 🚀 Demo

Check out the live documentation: [Docker Docs](https://docusaurus-docker.vercel.app/)

## 🛠️ Stack

- **Docusaurus** – Static site generator
- **Markdown** – Content format
- **Docker** – Containerization and deployment
- **Node.js** – Runtime environment

## ✨ Features

- 📘 **Multi-page Documentation**: Organized by topics such as images, containers, command lines and Compose.
- 🎨 **Light/Dark Mode**: Automatically adapts to user preferences.
- 🐳 **Fully Dockerized**: Run locally or deploy easily with Docker.

## 📦 Usage

To build and run the documentation locally using Docker:

```bash
git clone https://github.com/Lo-ouiiz/docusaurus-docker.git
cd docusaurus-docker

# Build the Docker image (approximately 49MB)
docker build -t docusaurus-docker .

# Run the container
docker run -p 80:80 docusaurus-docker
```

## 📅 Timeline

This project was completed in **May 2025** as a school project.
