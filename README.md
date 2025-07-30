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
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── models/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── pages/
│   └── App.jsx
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

<!-- Please update value in the {}  -->

<h1 align="center">{Image Uploader}</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://{your-demo-link.your-domain}">
      Demo
    </a>
    <span> | </span>
    <a href="https://{your-url-to-the-solution}">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://i.postimg.cc/DyMQvrQk/imageuploader.png)

In this project the user can upload an image, get a link and use it wherever they want to.

- Where can I see your demo?
- What was your experience?
- What have you learned/improved?
- Your wisdom? :)

### Built With

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
$ npm install

# Run the app
$ npm start
```

<!--
## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)
-->

## Contact

- Website [your-website.com](https://{your-web-site-link})
- GitHub [@your-username](https://{github.com/your-usermame})
- Twitter [@your-twitter](https://{twitter.com/your-username})
