# Country Explorer

Country Explorer is a cross-platform mobile application built with Ionic Framework and Capacitor that displays information about world countries. Users can view a list of countries, explore detailed information about each country, and manage their favorite countries in a dedicated section.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

## Features

- **List of Countries**: Displays a list of countries fetched from the REST Countries API with flag, name, and alpha3code.
- **Country Details**: Shows detailed information including flag, name, capital, and population, with an option to favorite the country.
- **Favorites Management**: Allows users to view and manage their list of favorite countries.
- **Data Persistence**: Uses Capacitor Preferences API to save user data locally.
- **User-Friendly UI**: Built with Ionic Web Components for smooth navigation and responsive design.

## Screenshots

### List of Countries
![List of Countries](path/to/your/list-of-countries.png)

### Country Details
![Country Details](path/to/your/country-details.png)

### Favorites Screen
![Favorites Screen](path/to/your/favorites-screen.png)

## Getting Started

These instructions will help you set up and run the project on your local machine.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **Ionic CLI**: Install Ionic CLI globally:

  ```bash
  npm install -g @ionic/cli

## Installation
Clone the repository:

```bash
git clone https://github.com/yourusername/country-explorer.git
```
Navigate into the project directory:

```bash
cd country-explorer
```

Install dependencies:
```bash
npm install
```
Build the project:

```bash
ionic build
```
Run the application on a web browser:

```bash
ionic serve
```
## Usage
### Explore Countries: Browse the list of countries and tap on a country to view detailed information.
### Favorite Countries: Mark a country as a favorite from the details screen.
### Manage Favorites: View your favorite countries and remove them as needed.

## Technologies Used
- Ionic Framework: For building cross-platform UI.
- Capacitor: For native functionality and data persistence.
- TypeScript: For type-safe data modeling.
- REST Countries API: For fetching country data.

## Project Structure

`country-explorer/`
`│`
`├── src/                   # Main source code`
`│   ├── app/               # Core application files`
`│   ├── assets/            # Images and assets`
`│   ├── pages/             # UI pages (List, Details, Favorites)`
`│   ├── services/          # API and data services`
`│   ├── theme/             # Styling and theme files`
`│   └── index.html         # Main HTML file`
`│`
`├── capacitor.config.json  # Capacitor configuration`
`├── package.json           # Project dependencies and scripts`
`└── README.md              # Project documentation`