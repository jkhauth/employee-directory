import React from 'react';
import EmployeeItem from "./employeeItem"
const EmployeeTable = ({items, isLoading}) => {

    return isLoading ? (<h1>Loading....</h1>) : 
    (<section>
    {items.map((item) => (<EmployeeItem key={item.name.last} item={item}></EmployeeItem>
    ))}
    </section>)
}

export default EmployeeTable;