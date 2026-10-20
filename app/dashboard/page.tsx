import axios from 'axios';

const CountPage = async () => {
  const countLocations = await axios.get('http://127.0.0.1:7777/locations');
  console.log(countLocations.data);
  return countLocations?.data?.length;
};

export default CountPage;