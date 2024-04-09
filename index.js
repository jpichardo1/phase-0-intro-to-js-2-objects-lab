
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {
      ...employee,
      [key]: value,
    };
  
    return updatedEmployee;
  }
  
  const employee = {
    name: "John Doe",
    age: 30,
    department: "Sales",
  };

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee;
  }

  const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "department", "Marketing");
  console.log(updatedEmployee);

  function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
  }

deleteFromEmployeeByKey(employee, "department");
console.log(updatedEmployee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

destructivelyDeleteFromEmployeeByKey(employee, "department");
console.log(updatedEmployee);