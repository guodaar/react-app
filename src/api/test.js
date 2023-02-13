import axios from "axios";

const TEST_API_URL = "https://api.github.com/repos/tannerlinsley/react-query";

export const fetchTestData = async () => {
  const response = await axios.get(TEST_API_URL);
  return response.data;
};
