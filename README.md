# Movies Explorer

A modern, beautiful movie discovery web application built as a **portfolio demonstration project**.

## 🎯 About This Project

**Movies Explorer** is a fully functional front-end React application that allows users to browse, search, and discover movies using The Movie Database (TMDB) API.

This project was created to showcase modern React development practices, clean architecture, and polished UI/UX design. It is **not** a production application — it serves purely as a portfolio piece to demonstrate my skills.

## ✨ Features

- **Infinite scrolling** movie grid with smooth performance
- **Advanced search** functionality
- **Genre-based filtering**
- **Multiple movie lists**: Popular, Top Rated, Now Playing, Upcoming
- **Detailed movie pages** with rich information
- **Responsive design** (mobile-first)
- **Dark modern UI** built with Chakra UI
- **Fast data fetching** and caching
- **Type-safe** development with TypeScript

## 🛠️ Tech Stack

| Technology         | Version | Purpose                     |
| ------------------ | ------- | --------------------------- |
| **React**          | 19.2.4  | UI Library                  |
| **TypeScript**     | ~6.0    | Type Safety                 |
| **Chakra UI**      | 3.34.0  | Component Library & Styling |
| **TanStack Query** | 5.96.2  | Data Fetching & Caching     |
| **Zustand**        | 5.0.12  | State Management            |
| **React Router**   | 7.14.0  | Routing                     |
| **Vite**           | 8.0.4   | Build Tool                  |
| **Axios**          | 1.14.0  | API Client                  |
| **React Icons**    | 5.6.0   | Icons                       |

## 🚀 Getting Started

## API Configuration

This app requires a TMDB Read Access Token.

For easy demo purposes, a **public fallback token** is included so the app works immediately on StackBlitz and deployed previews.

For local development or heavy usage, please add your own token in a `.env` file:

### Prerequisites

- Node.js (v18 or higher recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/Joseph-box/movies-explorer.git

# Navigate to project directory
cd movies-explorer

# Install dependencies
npm install

# Start the development server
npm run dev
```
