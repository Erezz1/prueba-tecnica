interface Employee {
  id: string;
  empName: string;
  empFirstName: string;
  empLastName: string;
  empBirthDate: string;
  empSystemAccess: boolean;
}

interface User {
  id: string;
  employeeId: string;
  usrEmail: string;
  usrName: string;
  usrPassword: string;
  usrAreas: string[];
}

interface Area {
  id: string;
  joaName: string;
  joaAbbreviation: string;
}
