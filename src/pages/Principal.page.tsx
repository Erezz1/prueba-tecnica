import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchData } from '../redux/slices/counter.slice';

import List from '../components/List.component';
import './principal-page.scss'

const PrincipalPage = () => {
  const [page, setPage] = useState<number>(1);

  const { data } = useAppSelector(state => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData(page))
  }, [page])

  if (!data) {
    return <p>No hay datos para mostrar</p>
  }

  return (
    <div className="container">
      <List
        page={page}
        data={data}
      />
      <div>
        {page > 1 && <button onClick={() => setPage(prev => prev - 1)}>{'<'} Anterior</button>}

        {page < Math.round(data?.pagination.total / data?.pagination.pageSize)
          && <button onClick={() => setPage(prev => prev + 1)}>Siguiente {'>'}</button>}
      </div>
    </div>
  )
}

export default PrincipalPage;
