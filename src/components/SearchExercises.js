import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  //useState hook for the searching input
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  //useEffect to fetch the api for the categories
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      //fetched the body parts data into bodyPartsData now saving all the data into the state of body part
      //with the spread operator it copy all the data
      setBodyParts(["all", ...bodyPartsData]);
    };

    //callig the function as soon as the app loads thats why we put it in useEffect
    fetchExercisesData();
  }, []);

  //handleSearch function is activated when ever we search in the input box and click the button to search
  const handleSearch = async () => {
    //if there is something in the search then do this
    if (search) {
      //calling the function fetchData() from the utility folder of functions
      //exerciseOptions -- these are the options which include key of rapid api which allows us to fetchdata from the rapidapi url
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      // console.log(exerciseData);

      //applything filter method on the data which is coming from the api according to the search request which is coming, and we give four options to search
      //searching the data and saving to the state so we can use it and making the search to empty as well
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight={700}
        textAlign='center'
        mb='50px'
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Awesome Exercises You <br /> should know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          height='76px'
          type='tex'
          value={search}
          placeholder='Search Exercises'
          onChange={(e) => setSearch(e.target.value.toLowerCase())} //we implemented the .toLowerCase() function because when someone search there must be nothing different so we want everytime words in the lowercase
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          className='search-btn'
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
