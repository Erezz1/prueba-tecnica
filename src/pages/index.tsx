import { useNavigate } from 'react-router-dom';
import {
  Text,
  Button,
  Table
} from '../components';
import { useFetch } from '../hooks';

const Home = () => {

  const navigate = useNavigate();
  const { state: employees, error, isLoading } = useFetch<Employee[]>({
    url: 'http://localhost:3000/employees',
    defaultState: []
  });

  const handleAdd = () => navigate(`/add`)

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <Text type="title">
        Empleados
      </Text>
      <Button
        type="text"
        style={{ alignSelf: 'flex-end' }}
        onClick={handleAdd}
      >Agregar</Button>

      <Table employees={employees} />
    </div>
  )
}

export default Home;