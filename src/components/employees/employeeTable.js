import React from 'react';
import EmployeeItem from "./employeeItem"

const EmployeeTable = ({employees, isLoading, descendingAge, ascendingAge}) => {
   
    return isLoading ? (<h1>Loading....</h1>) : 
    (<table className="text-center flex-containter">
    <tbody>
    <td className="tableheadings">Thumbnail</td>
    <td className="tableheadings">Name</td>
    <td className="tableheadings"><button type="button" className="btn sortbutton" onClick={descendingAge}>\/</button>DOB<button type="button" className="btn sortbutton" onClick={ascendingAge}>/\</button></td>
    <td className="tableheadings">Email</td>
    </tbody>
    {employees.map((employee) => (<EmployeeItem key={employee.name.first+employee.name.last} employee={employee}></EmployeeItem>))}
    </table>)

}

export default EmployeeTable;