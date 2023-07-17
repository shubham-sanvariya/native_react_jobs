import axios from "axios";
import { useState } from "react"

const useFetch = (endpoint, qurey) => {
    const [data, setData ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error , setError] = useState(false);

    const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {...qurey},
  
};

    const fetchData = async () => {
    setIsLoading(true);

    try {
        const response = await axios.request(options);

        setData(response.data.data);
        setIsLoading(false);
    } catch (error) {
        setError(error)
        alert('there is an error wrong')
    } finally {
        setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return {data, isLoading, error, refetch}

}

export default useFetch;