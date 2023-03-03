import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Result } from '../interfaces/ConficionesAtmosfericas.interface';

interface Props {
  item: Result;
}
const Item: FC<Props> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td style={{ cursor: 'pointer' }} onClick={() => navigate(item._id)}>
        {item._id}
      </td>
      <td>{item.cityid}</td>
      <td>{item.name}</td>
      <td>{item.state}</td>
      <td>{item.probabilityofprecip}</td>
      <td>{item.relativehumidity}</td>
      <td>{item.lastreporttime}</td>
      <td>{
        +item.probabilityofprecip > 60 || +item.relativehumidity > 50
          ? 'SI'
          : 'NO'
      }</td>
    </tr>
  )
}

export default Item;
