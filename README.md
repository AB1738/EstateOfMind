<h1 align='center'>EstateOfMind - Real Estate Web App</h1>

**EstateOfMind** is a real estate web app that allows users to explore property listings with detailed information and interactive maps. Built as a learning project to deepen my backend development skills, it features a full backend API using **C#** and **ASP.NET Core**, with a frontend built using **Next.js** and **TypeScript**. Users can browse properties, view details, and simulate tour requests. The backend supports full CRUD operations, while the frontend is currently read-only.

---

## Features

- **Browse Property Listings**  
  View available properties with photos, descriptions, prices, and other details.

- **Property Filtering**  
  Filter listings by location and price range (basic client-side filtering).

- **Virtual Tour Request (Demo)**  
  Simulate booking a tour for a property with a frontend-only form.

- **Interactive Maps**  
  Property locations are displayed using **MapLibre** with geocoding from **Geocodify API**.

- **Fully Functional Backend API**  
  ASP.NET Core backend supports create, read, update, and delete operations for properties.

- **Responsive Design**  
  Optimized for use on both desktop and mobile devices.

---

## Technologies Used

- **Next.js** – React-based frontend framework with routing and SSR support.
- **TypeScript** – Static typing for JavaScript, used throughout the frontend.
- **ASP.NET Core** – Backend framework used to build the REST API.
- **C#** – Language used for backend development.
- **Entity Framework Core** – ORM for handling database operations.
- **SQLite** – Lightweight, file-based database used with EF Core.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **shadcn/ui** – Component library built on top of Tailwind CSS.
- **MapLibre** – Open-source mapping library to display property locations.
- **Geocodify API** – Used for geocoding property addresses into map coordinates.

---

## How It Works

1. **Backend**  
   A full REST API built with ASP.NET Core and EF Core allows for complete property management (CRUD).

2. **Frontend**  
   Next.js handles routing and displays property data fetched from the API.

3. **Tour Request Simulation**  
   Users can submit a "Take a Tour" form, which mimics a request (not connected to the backend).

4. **Mapping**  
   Each property’s address is converted to coordinates using the Geocodify API and displayed on a map with MapLibre.

---

