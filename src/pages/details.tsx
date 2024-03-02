import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

import { Text } from '../components';
import { useFetch } from '../hooks';

const Details = () => {

  const { employeeId } = useParams();
  const navigate = useNavigate();

  const { state, isLoading, error } = useFetch<Employee | null>({
    defaultState: null,
    url: `http://localhost:3000/employees/${employeeId}`
  });
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    if (state?.empSystemAccess) {
      fetch(`http://localhost:3000/users/${employeeId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }
  }, [state]);

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (error || !state) {
    return <p>{error}</p>
  }

  return (
    <div style={{
      display: 'grid',
      gap: '1rem',
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
      marginTop: '2rem'
    }}>
      <Text type="title">
        Detalles del Empleado
      </Text>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Text>
          Nombre
        </Text>
        <Text>
          {state.empName}
        </Text>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Text>
          Apellido paterno
        </Text>
        <Text>
          {state.empFirstName}
        </Text>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Text>
          Apellido materno
        </Text>
        <Text>
          {state.empLastName}
        </Text>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Text>
          Fecha de nacimiento
        </Text>
        <Text>
          {state.empBirthDate}
        </Text>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Text>
          ¿Acceso al sistema?
        </Text>
        <Text>
          {state.empSystemAccess ? 'Si' : 'No'}
        </Text>
      </div>

      {state.empSystemAccess && user && (
        <div style={{
          border: '2px solid #ccc',
          padding: '1rem',
          borderRadius: '10px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <IconButton
              aria-label="details"
              color="default"
                style={{
                border: '1px solid grey',
                borderRadius: '10px',
                color: 'black'
              }}
              onClick={() => {}}
            >
              <AccountTreeIcon />
            </IconButton>
            <IconButton
              aria-label="details"
              color="default"
                style={{
                border: '1px solid grey',
                borderRadius: '10px',
                color: 'black'
              }}
              onClick={() => navigate(`/edit/${employeeId}`)}
            >
              <ModeEditIcon />
            </IconButton>
          </div>
          <div>
            <Text style={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: '1.5rem'
            }}>
              Usuario
            </Text>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Text>
                Nombre de usuario
              </Text>
              <Text>
                {user.usrName}
              </Text>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Text>
                Correo
              </Text>
              <Text>
                {user.usrEmail}
              </Text>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Text>
                Areas
              </Text>
              <div style={{ display: 'flex' }}>
                {user.usrAreas.map(area => (
                  <Text key={area}>Area {area},</Text>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Details;
