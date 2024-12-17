import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarData = async () => {
      const cleanUrl = url.trim(); // Elimină spațiile sau newline-urile
      const response = await fetch(cleanUrl);
      if (!response.ok) {
        throw new Error('Something is wrong! could not fetch data');
      }
      const data = await response.json();
  
      setData(data);
      setIsPending(false);
      setError(null);
    };
  
    fetchCarData().catch(err => {
      setIsPending(false);
      setError(err.message);
    });
  }, [url]);
  

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
