import { useState, useEffect } from 'react';
const baseUrl = '//localhost:4000/api/';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch(e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url])

  return { data, error, loading }
}