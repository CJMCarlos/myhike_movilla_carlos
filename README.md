
# Project Name

## Overview
Summarize your project's purpose, problem solved, key features, user benefits, development context, and main technologies used.

Example:

This client-side JavaScript web application provides real-time weather updates for cities worldwide. It simplifies accessing weather information through an intuitive mobile-first interface, allowing users to input a city name and receive data on temperature, humidity, and conditions.

Developed for the [Course Name] course, applying User-Centred Design practices, agile project management processes, integrating a weather API, and Firebase backend services.

---

## Features

Example:
- Real-time weather updates for any city.
- Responsive design for desktop and mobile.
- Displays temperature, humidity, and weather conditions.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Backend**: Firebase for hosting
- **Database**: Firestore

---

## Usage

To run the application locally:

1.  **Clone** the repository.
2.  **Install dependencies** by running `npm install` in the project root directory.
3.  **Start the development server** by running the command: `npm run dev`.
4.  Open your browser and visit the local address shown in your terminal (usually `http://localhost:5173` or similar).

Once the application is running:

1.  Browse the list of hiking trails displayed on the main page.
2.  Click the heart icon (or similar) to mark a trail as a favorite.
3.  View your favorite hikes in the favorites section.


---
## Shared Navbar and Footer (Web Components)
What this gives you:

- A single source of truth for the navbar and footer
- Same markup reused across all pages with `<site-navbar>` and `<site-footer>`
- Easy customization by editing a single JavaScript file per component

How to use it on any HTML page (e.g., `index.html`, `skeleton.html`):

1) Import the components (in `<head>`):

	```html
	<script type="module" src="/src/components/site-navbar.js"></script>
	<script type="module" src="/src/components/site-footer.js"></script>
	```

	Also load global scripts:

	```html
	<script type="module" src="/src/app.js"></script>
	```

	Notes:
	- Bootstrap CSS and JS are imported in `src/app.js` via ES modules, so you don’t need extra `<link>` or `<script>` tags in HTML.
	- Vite handles module loading during development with `npm run dev`.

2) Drop the custom elements where you want them to render:

	```html
	<!-- our own navbar goes here -->
	<site-navbar></site-navbar>

	<!-- Main content goes here -->

	<!-- our own footer goes here -->
	<site-footer></site-footer>
	```

3) Customize the shared markup once:

	- Edit `src/components/site-navbar.js` to change the navbar (brand, links, etc.)
	- Edit `src/components/site-footer.js` to change the footer

	Every page using `<site-navbar>` and `<site-footer>` will automatically reflect your changes.

## Project Structure

Example:
```
my-project/
├─ public/
│  └─ images/
├─ src/
│  ├─ components/
│  │  ├─ site-footer.js   ← shared footer Web Component
│  │  └─ site-navbar.js   ← shared navbar Web Component
│  ├─ styles/
│  │  └─ style.css
│  ├─ app.js              ← imports Bootstrap + global styles
│  ├─ authentication.js
│  ├─ firebaseConfig.js
│  └─ loginSignup.js      ← login/signup UI logic
├─ login.html
├─ index.html
└─ skeleton.html

```

---

## Contributors
- **Your Name** - BCIT CST Student with a passion for creating user-friendly applications. Fun fact: Loves solving Rubik's Cubes in under a minute.
- **Teammate Name** - BCIT CST Student, Frontend enthusiast with a knack for creative design. Fun fact: Has a collection of over 50 houseplants.

---

## Acknowledgments

Example:
- Weather data sourced from [OpenWeatherMap](https://openweathermap.org/).
- Code snippets for ___ algoirthm were adapted from resources such as [Stack Overflow](https://stackoverflow.com/) and [MDN Web Docs](https://developer.mozilla.org/).
- Icons sourced from [FontAwesome](https://fontawesome.com/) and images from [Unsplash](https://unsplash.com/).

---

## Limitations and Future Work
### Limitations

Example:
- Currently, the app only supports city-based weather searches.
- Limited to basic weather parameters like temperature, humidity, and conditions.
- The user interface can be further enhanced for accessibility.

### Future Work

Example: 
- Add support for location-based weather detection using GPS.
- Implement additional weather parameters like wind speed and UV index.
- Create a dark mode for better usability in low-light conditions.
- Integrate user accounts for saving favorite locations.

---
