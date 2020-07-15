# ManageEXP
<p align="center">
  <img src=".github/logo.svg" width='90px' />
	
  <p align="center">
  App made to help people to find garbage collection points and recycle!
  </p>
  <p align="center">
    <img src=".github/cover.png" width='900px' />
  </p>
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Henrique-Castro/ManageEXP?color=blue">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Henrique-Castro/ManageEXP?logo=csharp">

  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/Henrique-Castro/ManageEXP?color=blue">

  <br>

  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/last-commit/Henrique-Castro/ManageEXP?color=blue">

</p>

 
# Index

- 🚀 [Project Summary](#%EF%B8%8F-project-summary)
- 👨‍💻️ [Technologies Used](#%EF%B8%8F-technologies-used)
- 📦️ [How to install the project](#%EF%B8%8F-how-to-install-the-project)
- 🤔️ [How can you contribute?](#%EF%B8%8F-how-can-you-contribute)
- 🔮 [Future Improvements](#-future-improvements)

---
## 🚀 Project Summary

The ManageEXP platform aims to facilitate data control by integrating with Zabbix in an intelligent, fast and simple way!
 
---
## 👨‍💻️ Technologies Used

This project was developed using the technologies bellow:

### Backend

  - [C#](https://docs.microsoft.com/pt-br/dotnet/csharp/)
  
### Data Base

  - [Postgres](https://www.postgresql.org/)
  
### Frontend

  - [React JS](https://reactjs.org/)
  
### Mobile

  - [React Native](https://reactnative.dev/)
  
### Dependencies

  **Backend**

  - []()
  - []()
  - []()

  **Frontend**
  - [Typescript](https://www.typescriptlang.org/)
  - [React Router DOM](https://reacttraining.com/react-router/)
  - [Styled-components](https://styled-components.com/)
  - [Styled-icons](https://styled-icons.js.org/)
  - [Axios](https://github.com/axios/axios)
  - [Docz](https://www.docz.site/) 
  
### Code patterns

  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

### IDE

  - [Visual Studio](https://visualstudio.microsoft.com/pt-br/vs/)
  - [Visual Studio Code](https://code.visualstudio.com/)

---
 
## 📦️ How to install the project

> [Node.js](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) are required

To clone the project, use the commands bellow:

```bash
  # Clone the repository
  ❯ git clone https://github.com/Henrique-Castro/ManageEXP.git

  # Enter directory
  ❯ cd ManageEXP
```

### Backend

To run backend [Docker](https://www.docker.com/) is required

```bash
  # Enter backend directory
  > cd ManageEXP.Solution

  # Make docker local build
  ❯ docker build . -t manage-exp-web-api 

  # run the project
  ❯ docker run -d -p 8080:80 --name manage-exp-web-api manage-exp-web-api
```

Now open ```Insominia``` or ```Postman``` and import the ```Insomnia_2020-06-28.json``` workspace file at **root** folder.

The backend will be running at [http:/localhost:8080]().

### Frontend

To install dependencies and initialize the project, you can use **Yarn** or **NPM**:

**Using yarn**

```bash
  # Enter frontend directory
  > cd web

  # Install the dependencies
  ❯ yarn

  # Start the project
  ❯ yarn start
```

**Using npm**

*If you use NPM, delete `yarn.lock` file to see all installed dependencies in the best way.*

```bash
  # Enter frontend directory
  > cd web
  
  # Install the dependencies
  ❯ npm install

  # Start the project
  ❯ npm start
```

### Documentation

**Using yarn**

```bash
  # Enter frontend directory
  > cd web

  # Build documentation
  ❯ yarn docz build

  # Run documentation
  ❯ yarn docz dev
```

**Using npm**

```bash
  # Enter frontend directory
  > cd web
  
  # Build documentation
  ❯ npm docz build

  # Run documentation
  ❯ npm docz dev
```

---
 
## 🤔️ How can you contribute?

1. `fork` this repository
2. Create a branch with your feature:
   - `$ git checkout -b my_feature`
3. Commit your branch:
   - `$ git commit -m "feature: My new feature"`
4. Submit your branch:
   - `$ git push origin my_feature`
   
---

## License
[MIT License](/LICENSE)

---

<h4 align="center">
  Made with 💙 by TeamTime!
</h4>