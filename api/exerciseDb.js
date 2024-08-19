import axios from "axios";
import { rapidApiKey } from "../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": "0fcd470ff0mshf98676035edce6bp1be2cdjsnd9a7a7a9a4b3",
        "X-RapidAPI-Host": "exercisedb.p. rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("error: ", err.message);
  }
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
  let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
