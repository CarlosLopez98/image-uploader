# Image Uploader

A fully featured web application that allows users to upload images and receive shareable links. Supports drag-and-drop, progress feedback, previews, and secure file handling.

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)  
- [Technologies](#technologies)  
- [Installation](#installation)  
- [Usage](#usage)
- [Project Structure](#project-structure)  
- [Configuration](#configuration)
- [License](#license)
- [Contact](#contact)

## Overview

This project provides a platform for users to upload images, preview them instantly, and receive unique URLs for sharing or embedding. It’s both user-friendly and developer-ready.

![screenshot](https://i.postimg.cc/DyMQvrQk/imageuploader.png)

## Features

- ✅ Drag-and-drop or select file uploads  
- ✅ Image preview before and after upload  
- ✅ Upload progress indicator  
- ✅ Unique shareable link for each uploaded image  
- ✅ Backend validation (file type, size limits)  
- ✅ REST API endpoints for integration

## Technologies

- **Backend**: Node.js, Express  
- **File Upload**: Multer (or equivalent)  
- **Database / Storage**: MongoDB / PostgreSQL / S3 / local FS  
- **Frontend**: React (or Vue/Angular) + Tailwind CSS / Material UI  
- **Security**: Input validation, CORS, file sanitization  
- **Environment**: dotenv for configuration

## Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/CarlosLopez98/image-uploader.git
   cd image-uploader
   ```

2. Install dependencies  
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. Create `.env` from `.env.example` and configure:
   ```
   PORT=4000
   DB_URI=mongodb://localhost:27017/image_uploader
   MAX_FILE_SIZE=1048576
   STORAGE=local
   ```

4. Run the development servers:
   ```bash
   # from /backend
   npm run dev

   # from /frontend
   npm start
   ```

5. Open your browser at `http://localhost:3000`

## Usage

1. Drag or click to select an image file (e.g., PNG, JPG, GIF, max 1MB).
2. View the preview and confirm upload.
3. After uploading, you’ll receive a unique URL—copy it or share directly.
4. Paste the URL in a browser to view the stored image.

## 🗂️ Project Structure

```
image-uploader/
├── api/
│   ├── src/
│      ├── models/
│      ├── routes/
│      ├── index.js
│      └── utils.js
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│      ├── components/
│      ├── resources/
│      ├── screens/
│      ├── index.js
│      └── App.js
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
├── docs/
├── .env.example
├── README.md
└── package.json
```

## Configuration

| Variable         | Description                                | Default        |
|------------------|--------------------------------------------|----------------|
| `PORT`           | Server port                                | `4000`         |
| `DB_URI`         | Database connection URI                    | N/A            |
| `MAX_FILE_SIZE`  | Max upload size in bytes                   | `1 048 576`    |
| `STORAGE`        | Storage method (`local`, `s3`, etc.)       | `local`        |

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for full details.

## 📬 Contact

Have questions or feedback? Feel free to open an issue on GitHub.
