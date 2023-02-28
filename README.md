# 🧍 REACT - Login Page

Welcome to the Login Page Demo! This project's aim was to build a fully operative login page using Reactjs and Nodejs, as we will need to resort to a **REST API** to get the allowed users' information to redirect ourselves to the proper page according to our permissions.

## 🌐 Link to the App.

Should you like to take a look to the deployed app, download this repository in your local code editor and enjoy!

> ℹ️ Please note that the first time you open the browser, it takes awhile to load.

---
## 🗂️ Content

1. [Project Structure](#-project-structure)
2. [Process](#️-process)
   1. [Back-end](#️-back-end)
   2. [Front-end](#-front-end)
3. [How to run the Apps](#-how-to-run-the-apps)
   1. [Pre-requeriments](#pre-requeriments)
   2. [Node](#️-node)
4. [Author](#-author)
***

## 🧱 Project structure

```
/
|
|– client
|   |– src
|     |– components
|     |– images
|     |– services
|     |– stylesheets
|     |– templates
|– server
```

> 👉 The project is divided into 2 parts: On the one hand, ```client```, which contains the React App. On the other hand, ```server```, which has the REST API coded in Node.js. 

## ⚒️ Process

### 🗄️ Back-end
***
```
/
|– server
|   |– api-server.js
|   |– user's database
```

### ✳️ Building the REST API

I have faced some challenges along the app building process. One of them at the very beginning, which was using a REST API implemented in ```NodeJS```. 

Up to now I have always used public APIs to get the requested information. Therefore, the first challenge I had to face was to provide the user´s information using NodeJS.

In this case, I have chosen [```Express```](https://expressjs.com/es/) to create a REST API with a ```POST``` endpoint where the user pass its username and password and gets and answer back. If the user is not found in the database then the app will return an "user not found" message. Otherwise it will redirect to the proper welcome page.

At this point, I discovered something called ```CORS```. If you are not yet familiar with it, but you would like to, [click here](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) for further information.

We retrieve the data from a user's database created with SQLite that contains all the information regarding signed up users in the app.

### 💫 Front-end
***

```
/
|
|– client
|   |– public
|   |– src
|   |– components
|   |– services
|   |– stylesheets
|   |– index.js
```

### ✳️ Using React Hooks.

I have built this app using functional components from React. As you could see, I have used the hook ```useState```, linked to the component´s state and life cycle. 

### ✳️ React Router
You could see in [**index.js** file](client/src/index.js) that App component is contained within another component, named *HashRouter*. This is because I have used [**React Router**](https://reactrouter.com/) to specify the routes in the app using my React components.

Once the routes are declared, I can link the different components using *NavLink*.

### ✳️ SASS and BEM

I have used SASS and BEM naming convention to give styles to the components, so that I have a more organized and clearer styles system.

### ✳️ Responsive design

I have followed the "mobile first" design principle as building this project, coding first as the app was being used on a mobile phone and then, using media queries to adapt the view to different devices. In this case, [tablet and desktop](client/src/stylesheets/core/_mixins.scss).

## 🚀 How to run the Apps.

### Pre-requeriments

You need to have [```Node```](https://nodejs.org/es/) previously installed in your computer.

To start using this project, clone this repo to a new directory.
> ```console
>  $ git clone https://github.com/conchaasensiomr/login_page_demo.git
> ```

### ➡️ Node
***

You have to go to server and run npm install in order to install the necesary dependencies.
> ```console
> $ cd login_page_demo
> $ npm install
> ```
Now you need to do the same thing on the client side.
> ```console
> $ cd web
> $ npm install
> ```

Once you have installed the dependencies, you are ready to run the app with ```npm start```. Like above, we need to do it both in server and client sides.
> ```console
> $ cd login_page_demo
> $ npm run dev
> ```

>  ```console
> $ cd web
> $ npm start
> ```

> 👉 Open http://localhost:3000 to view in the browser

```
## 👩‍💻 Author

This App has been developed by [**Yara Paz**](https://github.com/yarapaz).
