# Memories Project

Memories is a full-stack CRUD application where you can create, update, and delete posts. Posts are displayed in an organized manner on the app, making it easy to manage and view your content.

---

## Features

- Create a new post with a title, description, and image.
- Update an existing post to modify its details.
- Delete posts you no longer need.
- View all posts in a clean interface.

---

## Tech Stack

### Frontend:

- **React**: Core library for building the user interface.
- **Material-UI**: For styling and prebuilt components.
- **Redux**: For state management.
- **Axios**: To handle API calls.
- **Vite**: For development and building the frontend.

### Backend:

- **Express**: For building the server and handling API requests.
- **MongoDB**: As the database to store posts.
- **Mongoose**: To interact with MongoDB.
- **dotenv**: For environment variable management.

---

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- MongoDB (installed locally or accessible remotely)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/memories-project.git
   cd memories-project
   ```

2. Install dependencies for the backend:

   ```bash
   cd server
   npm install
   ```

3. Install dependencies for the frontend:

   ```bash
   cd ../client
   npm install
   ```

### Environment Variables

Create a `.env` file in the `backend` directory with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Running the Application

### Backend:

Start the backend server:

```bash
cd backend
npm start
```

### Frontend:

Start the frontend development server:

```bash
cd frontend
npm run dev
```

Open your browser and navigate to:

```
http://localhost:5173
```

---

## Folder Structure

### Backend:

- **index.js**: Entry point for the backend server.
- **routes/**: API endpoints.
- **models/**: Mongoose schemas for the database.
- **controllers/**: Logic for handling API requests.

### Frontend:

- **src/**: Contains all React components and application logic.
- **store/**: Redux setup for state management.
- **public/**: Images and other static resources.

---

## Contributing

Feel free to fork the repository, make your changes, and create a pull request. Contributions are welcome!

---

## License

This project does not currently have a license.

---

## Screenshots

Some screenshots to showcase the app:

### Main UI:
![Main UI](https://github.com/user-attachments/assets/b3b61976-29c9-4a51-8793-0e23e93bb71e)

### Creating a Post:
1. Fill in the form and, if needed, upload an image using the upload button.

   ![Form](https://github.com/user-attachments/assets/135f1d2d-0fd3-4928-a9b5-8e873f87a2ec)

2. Select an image from your device.

   ![Image Selection](https://github.com/user-attachments/assets/dc917461-f92d-4ba3-b9be-2a261847d830)

### New Post Created:
![New Post](https://github.com/user-attachments/assets/d29bd118-6402-44be-aa8c-f0ddecefeea3)

