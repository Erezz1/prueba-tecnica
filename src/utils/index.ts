export const saveEmployee = async (employee: Omit<Employee, 'id'>) => {
  try {
    const res = await fetch('http://localhost:3000/employees', {
      method: 'POST',
      body: JSON.stringify(employee)
    });
    const data = await res.json() as Employee;
    return data;

  } catch (error) {
    console.log(error);
  }
}

export const saveUser = async (user: User) => {
  try {
    const res = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(user)
    });
    const data = await res.json();
    return data;

  } catch (error) {
    console.log(error);
  }
}

export const updateEmployee = async (employee: Partial<Employee>) => {
  try {
    const res = await fetch(`http://localhost:3000/employees/${employee.id}`, {
      method: 'PUT',
      body: JSON.stringify(employee)
    });
    const data = await res.json() as Employee;
    return data;

  } catch (error) {
    console.log(error);
  }
}

export const updateUser = async (user: Partial<User>) => {
  try {
    const res = await fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user)
    });
    const data = await res.json() as Employee;
    return data;

  } catch (error) {
    console.log(error);
  }
}

export const validateForm = ({
  employee, user
} : {
  employee?: Omit<Employee, 'id' | 'empSystemAccess'>,
  user?: Omit<User, 'id' | 'usrAreas' | 'employeeId'>
}) => {
  if (employee && employee.empName) {
    if (
      employee.empName.length <= 4 ||
      employee.empFirstName.length <= 4 ||
      employee.empLastName.length <= 4
    ) {
      alert('Todos los campos deben estar llenos')
      throw new Error('Todos los campos deben estar llenos');
    }
  }

  if (user && user.usrName) {
    if (
      user.usrEmail.length <= 4 ||
      user.usrName.length <= 4 ||
      user.usrPassword.length <= 4
    ) {
      alert('Coloca datos validos')
      throw new Error('Coloca datos validos');
    }
  }
}
