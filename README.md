# Flight Plan Client

## Overview

The **Flight Plan Client** is a web application designed to visualize flight routes by interacting with aviation APIs. Users can select a flight and view its planned route on a global map. Additionally, an optional feature to propose and display alternate flight routes might be implemented in the future.

It is meant to work in conjunction with Flight Plan Server. You can find the repository here: https://github.com/dexsjw/flight-plan-server

## Features

- **List All Air-Routes:** Retrieve and display all available flight plans.
- **Search by Callsign:** Search for specific flight plans using the aircraft's callsign.
- **Display Flight Route:** Visualize the selected flight's route on a global map.
- **Propose Alternate Routes (Not implemented):** Generate and display alternative routes from departure to destination.

## APIs Utilized

- **Flight Plans API:** Retrieves all flight plans.
  - Endpoint: `https://flight-plan-server-5b865429270e.herokuapp.com/flight-plan/displayAll`
- **Flight Route API:** Provides data on airways used in flight routes.
  - Endpoint: `https://flight-plan-server-5b865429270e.herokuapp.com/flight-plan/search/route/{id}`

*Note: Server might not always be running.*

## Getting Started

### Prerequisites

- **Node.js:** Ensure you have the latest LTS version installed.
- **npm or yarn:** Package managers for JavaScript.
- **Docker:** For containerization and deployment.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/dexsjw/flight-plan-client.git
   cd flight-plan-client
   ```

2. **Install Dependencies:**

- Using npm:

   ```bash
   npm install
   ```

- Or using yarn:

   ```bash
   yarn install
   ```

## Running the Application

**Development Mode:**

   ```bash
   npm run dev
   ```
Or:

   ```bash
   yarn build
   ```

**Preview Production Build:**
   ```bash
   npm run preview
   ```
Or:

   ```bash
   yarn preview
   ```

## Docker Deployment

1. **Build Docker Image:**

   ```bash
   docker build -t flight-plan-client .
   ```

1. **Run Docker Container:**

   ```bash
   docker run -d -p 3000:3000 flight-plan-client
   ```

Access the application at http://localhost:3000

## Continuous Integration and Deployment

This project employs GitHub Actions for CI/CD:

- .github/workflows/ci.yml: Defines the CICD pipeline for building the application and handles deployment to the chosen platform.

Ensure you configure the necessary secrets in your GitHub repository settings for seamless deployment.

## Technologies Used
Frontend:
- React
- Vite

Containerization:
- Docker

CI/CD:
- Github Actions
- Github Pages

Libraries:
- Axios
- react-simple-maps