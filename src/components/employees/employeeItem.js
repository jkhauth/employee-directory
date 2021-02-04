import React from 'react';

const EmployeeItem = ({employee}) => {
    return (
        <tbody>
           <td><img src={employee.picture.thumbnail} alt="employeethumbnail"></img></td><td>{employee.name.first} {employee.name.last}</td><td>{employee.dob.age}</td><td>{employee.email}</td>
        </tbody>
    )
}

export default EmployeeItem;