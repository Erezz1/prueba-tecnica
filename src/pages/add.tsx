import { ChangeEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material';

import { Button, Input, Text } from '../components';
import { saveEmployee, saveUser, validateForm } from '../utils';

const AddEmployee = () => {

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    empName: '',
    empFirstName: '',
    empLastName: '',
    empBirthDate: ''
  });
  const [user, setUser] = useState({
    usrName: '',
    usrEmail: '',
    usrPassword: ''
  });
  const [accessSystem, setAccessSystem] = useState(false);

  const handleEmployeeChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {
    setEmployee(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  const handleUserChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {
    setUser(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  const handleSave = async () => {
    validateForm({employee, user});

    const resEmployee = await saveEmployee({
      ...employee,
      empSystemAccess: accessSystem
    });

    if (accessSystem && resEmployee) {
      await saveUser({
        ...user,
        employeeId: resEmployee?.id,
        usrAreas: [],
        id: resEmployee.id
      })
    };

    navigate('/');
  }

  return (
    <div>
      <Text type="title">
        Agregar Empleado
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
          value={employee.empName}
          name="empName"
          onChange={handleEmployeeChange}
          placeholder="Nombre"
        />
        <Input
          value={employee.empFirstName}
          name="empFirstName"
          onChange={handleEmployeeChange}
          placeholder="Apellido Paterno"
        />
        <Input
          value={employee.empLastName}
          name="empLastName"
          onChange={handleEmployeeChange}
          placeholder="Apellido Materno"
        />
        <Input
          value={employee.empBirthDate}
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
            value={user.usrName}
            name="usrName"
            onChange={handleUserChange}
            placeholder="Nombre de usuario"
          />
          <Input
            value={user.usrEmail}
            name="usrEmail"
            onChange={handleUserChange}
            placeholder="Correo"
            type="email"
          />
          <Input
            value={user.usrPassword}
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

export default AddEmployee;
