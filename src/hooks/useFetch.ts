import { useState, useEffect } from 'react';

export const useFetch = <T>({
  url, defaultState
}: {
  url: string,
  defaultState: T,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<T>(defaultState);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json()
        setState(data);

      } catch (error) {
        console.log(error);
        setError('Ocurrio un error');

      } finally {
        setIsLoading(false);
      }
    }
    getEmployees();
  }, []);

  return { state, isLoading, error }
}
