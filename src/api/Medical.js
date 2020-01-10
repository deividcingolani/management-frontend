import axios from "axios";

export default async term => {
  const response = await axios.get(
    "https:/localhost:3000"
  );

  return response.data.Brastlewark;
};
