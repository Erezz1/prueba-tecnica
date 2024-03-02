import { ChangeEventHandler, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Switch } from '@mui/material';

import { Button, Input, Text } from '../components';
import { saveUser, updateEmployee, updateUser, validateForm } from '../utils';
import { useFetch } from '../hooks';

const EditEmployee = () => {

  const { employeeId } = useParams();
  const navigate = useNavigate();

  const employeeFetch = useFetch<Employee | null>({
    defaultState: null,
    url: `http://localhost:3000/employees/${employeeId}`
  });
  const userFetch = useFetch<User | null>({
    defaultState: null,
    url: `http://localhost:3000/users/${employeeId}`
  });
  const [user, setUser] = useState<User | undefined>();
  const [employee, setEmployee] = useState<Employee | undefined>();
  const [accessSystem, setAccessSystem] = useState(employeeFetch.state?.empSystemAccess);

  const handleEmployeeChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {
    // @ts-ignore
    setEmployee(prev => ({
      ...prev,
      [target.name]: target.value
    }));
  }

  const handleUserChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {
    // @ts-ignore
    setUser(prev => ({
      ...prev,
      [target.name]: target.value
    }));
  }

  const handleSave = async () => {
    validateForm({employee, user});

    await updateEmployee({
      ...employee,
      empSystemAccess: accessSystem
    });


    if (accessSystem && user && !userFetch.state) {
      await saveUser({
        ...user,
        employeeId: employeeId as string,
        usrAreas: [],
        id: employeeId as string
      });
    };

    if (accessSystem && user && userFetch.state) {
      await updateUser({
        ...user,
        employeeId: employeeId as string,
        usrAreas: [],
      });
    }

    navigate('/');
  }

  useEffect(() => {
    if (!employeeFetch.state) return;

    setEmployee(employeeFetch.state);
    setAccessSystem(employeeFetch.state.empSystemAccess);

    if (!employeeFetch.state.empSystemAccess || !userFetch.state) return;
    setUser(userFetch.state);
  }, [userFetch.state, employeeFetch.state]);

  if (!employee || employeeFetch.error) {
    return null;
  }

  return (
    <div>
      <Text type="title">
        Editar Empleado
      </Text>

      <form
        style={{
          display: 'grid',
          gap: '1rem',
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto',
          marginTop: '2rem'
        }}
        onSubmit={handleSave}
      >
        <Input
          value={employee?.empName}
          name="empName"
          onChange={handleEmployeeChange}
          placeholder="Nombre"
        />
        <Input
          value={employee?.empFirstName}
          name="empFirstName"
          onChange={handleEmployeeChange}
          placeholder="Apellido Paterno"
        />
        <Input
          value={employee?.empLastName}
          name="empLastName"
          onChange={handleEmployeeChange}
          placeholder="Apellido Materno"
        />
        <Input
          value={employee?.empBirthDate}
          name="empBirthDate"
          onChange={handleEmployeeChange}
          placeholder="Fecha de nacimiento"
          type="date"
        />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Text>¿Acceso al sistema?</Text>

          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <Text>No</Text>
            <Switch
              checked={accessSystem}
              onChange={() => setAccessSystem(prev => !prev)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <Text>Si</Text>
          </div>
        </div>

        {accessSystem && (<>
          <Input
            value={user?.usrName}
            name="usrName"
            onChange={handleUserChange}
            placeholder="Nombre de usuario"
          />
          <Input
            value={user?.usrEmail}
            name="usrEmail"
            onChange={handleUserChange}
            placeholder="Correo"
            type="email"
          />
          <Input
            value={user?.usrPassword}
            name="usrPassword"
            onChange={handleUserChange}
            placeholder="Contraseña"
            type="password"
          />
        </>)}

        <div style={{
          display: 'flex',
          gap: '1rem'
        }}>
          <Button
            style={{ width: '100%' }}
            type="grey"
            onClick={() => navigate('/')}
          >
            Cancelar
          </Button>

          <Button
            style={{ width: '100%' }}
            onClick={handleSave}
          >
            Guardar
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditEmployee;
