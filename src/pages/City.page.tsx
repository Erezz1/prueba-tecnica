import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCity } from '../redux/slices/counter.slice';

import './city-page.scss';

const CityPage = () => {
  const id = useParams().id as string;

  const { city } = useAppSelector(state => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCity(id))
  }, [id])

  if (!city) {
    return <p>No hay datos para mostrar</p>
  }

  return (
    <div>
      <Link to="/">Regresar</Link>

      <h2>{city.name}</h2>

      <ul>
        {Object.entries(city).map((data, index) => (
          <li key={index}>{data[0]} - {data[1]}</li>
        ))}
      </ul>
    </div>
  )
}

export default CityPage;
