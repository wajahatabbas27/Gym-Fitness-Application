# Fitness Exercise React App

- this is a fitness exercise website, which will fetch data from the api from the rapi api and we are building the forum for the exercise!

- we will use rapid api to show the data of the api's which are coming
- RapidAPI ExerciseDB - https://rapidapi.com/justin-WFnsXH_t6...
- RapidAPI YouTube Search - https://rapidapi.com/h0p3rwe/api/yout...

## depencies to install

- npm install --legacy-peer-deps

## Using routes to route between our home page and the exercise detail page in our application

- import the routes from react-router-dom

import { Route, Routes } from "react-router-dom";

- This is how we route in app.js

  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/exercise/:id' element={<ExerciseDetail />} />
  </Routes>

- To complete the router process we need to wrap the App component with browser router;

import { BrowserRouter } from "react-router-dom";

root.render(
<BrowserRouter>
<App />
</BrowserRouter>
);

- we also have link in the react-router-dom as well which we will be using to link the routes.

  import { Link } from "react-router-dom";

## material-ui component:

- Box - we used the box to wrap the whole application
- Stack - we are using the stack in the navbar
- Typography - instead of using the p (paragraph) tag we use the typography which has some extra styles as well
- Button - using mui button which has the property called variant-contained using this else i can change it as well, cannot use the custom color in the button
- sx - it is used to style things like we do in css but in the material ui component we can just open up the sx attribute and style there as well for responsive ui for lg,md and sm screens, we can also open up the objects where we will make it responsive actually
