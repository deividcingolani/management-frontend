import axios from "axios";

export default async function(url) {
  const response = await axios.get(
    "https://gestionturnos.herokuapp.com/api/v1.0"+url
  );
  return response.data;
}
