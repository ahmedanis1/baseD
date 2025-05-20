# Book Search Use cases with Authentication

This is a React + TypeScript application that allows users to **log in** and search for books using a table view with filtering capabilities. The app is styled using **LESS** and leverages **Ant Design** components.

## ✨ Features

- 🔒 User authentication (mocked)
- 📚 Book table with:
  - Search by title or author
  - Protected Routes
  - added Navbar for easily routing
  - Display of genres, authors, and average ratings
  - Double-click row functionality
- ⚙️ Ant Design UI with LESS styling
- 💻 Fully typed using TypeScript
- Redux toolkit
- axios used for Http requests

---

## 🧱 Tech Stack

- **React** (with Hooks)
- **TypeScript**
- **React Router DOM**
- **Ant Design (antd)**
- **LESS (CSS preprocessor)**
- **Redux**

---
## Authorization
![image](https://github.com/user-attachments/assets/30347aa8-cf56-4158-b7d2-df8eb335506a)
if user are not logged in protected routed root redirect it to the login
## Book Table With Redux with PAgination
![image](https://github.com/user-attachments/assets/95cb444c-379f-457e-8224-f0fa8ecad4e7)
and added search based on title and author
search based on title
![image](https://github.com/user-attachments/assets/c513971d-1478-4932-bbb4-592061cbafdd)
search based on Author
![image](https://github.com/user-attachments/assets/3dec1bcf-9d48-42f0-b90c-f0f81a248f4f)
## Book Details and Rating System
on double click on row it will open book detail
![image](https://github.com/user-attachments/assets/190f7c34-dc89-4bbf-a7d5-2687c2d715bd)
here you can give reating and review which can be saved in redux
also added notification if its save or not
![image](https://github.com/user-attachments/assets/3b917666-b15b-4d64-a5f0-ce318ff81f1e)
and also if something fails
![image](https://github.com/user-attachments/assets/5183ec6e-722a-464f-aa7b-1ea5b2a0ed2a)
review and ratings are saved when you return and these will be lost once the page is reloded


## Instructions for setup and installation
just clone the repo and do npm install and then run it with npm start
add user name password and it will redirect you to the table page where you can search or see the detail of the book
gitclone: https://github.com/ahmedanis1/baseD.git
cd my-app
npm install
npm start






