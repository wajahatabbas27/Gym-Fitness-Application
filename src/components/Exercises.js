import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setcurrentPage] = useState(1);
  //total exercise per page to pagnate them to the next page as well
  const exercisePerPage = 9;

  //wants to show only minimum exercises on the page here
  //so we want to apply the logic

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;

  //we have given the slice function with the firstindex and the lastexercise
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  //paginate function to take us to the next page
  const paginate = (e, value) => {
    //jb value pe click ho page ki to uspe chala jae3
    setcurrentPage(value);

    //aur jb jae to window screen ke top pe bhi chala jae yh
    window.scrollTo({ top: "1800", behavior: "smooth" });
  };

  // console.log(exercises);
  return (
    <Box id='exercises' sx={{ mt: { lg: "110px" } }} mt='50px' p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {/* instead of mapping the all exercises, we will map the current exercise as we have sliced them */}
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {/* Applything pagination logic and applying the pagination in the code when the length is increased */}
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage} //this is the page where we are standing at this time so we created the state to update and to setup it
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
