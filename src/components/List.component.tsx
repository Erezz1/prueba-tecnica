import { FC } from 'react';

import Item from './Item.component';
import { ConficionesAtmosfericas } from '../interfaces/ConficionesAtmosfericas.interface';

interface Props {
  page: number;
  data: ConficionesAtmosfericas;
}
const List: FC<Props> = ({ data }) => {

  if (!data) {
    return <p>No hay datos para mostrar</p>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>_id</th>
          <th>cityId</th>
          <th>name</th>
          <th>state</th>
          <th>probability of precip</th>
          <th>relative humidity</th>
          <th>Last report time</th>
          <th>Llueve</th>
        </tr>
      </thead>
      <tbody>
        {data.results.map(result => (
          <Item item={result} key={result._id} />
        ))}
      </tbody>
    </table>
  )
}

export default List;
