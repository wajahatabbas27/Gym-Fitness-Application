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

  <!-- <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/exercise/:id' element={<ExerciseDetail />} />
  </Routes> -->

- To complete the router process we need to wrap the App component with browser router;

import { BrowserRouter } from "react-router-dom";

<!--
root.render(
<BrowserRouter>
<App />
</BrowserRouter>
); -->

- we also have link in the react-router-dom as well which we will be using to link the routes.

  import { Link } from "react-router-dom";

## material-ui component:

- If we want to apply css material ui has its own css attributes which we give inside the tag and also there is we also have material sx attribute in which we can also give the css property as well.

- Box - we used the box to wrap the whole application
- Stack - we are using the stack in the navbar
- Typography - instead of using the p (paragraph) tag we use the typography which has some extra styles as well
- Button - using mui button which has the property called variant-contained using this else i can change it as well, cannot use the custom color in the button
- sx - it is used to style things like we do in css but in the material ui component we can just open up the sx attribute and style there as well for responsive ui for lg,md and sm screens, we can also open up the objects where we will make it responsive actually
- css position-relative parent element ko deinge take childrens ko absolute krsakein parent ke relative, relative se hota kuch nhi hai bs childs ko yh pta chal jata hai ke kske relative krna hai child ko absolute.
- TextField - it is a component in the material-UI for the input field with different attributes
- while we are using the abolute positon we must have to define the right 0 or top left or bottom, so it should stay on the same position.

### created the utils folder for the utility functions to have clean structure of code

- util folder will have all the functions and we call it from there all the time when we want to use the data.
- It will have the functions of the fetching apis from the rapid api.
- All we will do is call the functions inside the component whereever we needed, basically we are fetching the data in the util folders asynchronously.

### Using the ExerciseDB API from the RapidApi

const options = {
method: 'GET',
url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
headers: {
'X-RapidAPI-Key': 'f510550226msh6168d0b1277d400p1e5986jsn1624aee656ed',
'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}
};

- there is url, key from the rapid api which we will save in the environment variable

### Environment Variable

- created the environment varible for the key of rapid api
