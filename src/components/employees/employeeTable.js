import React from 'react';

const EmployeeTable = ({items, isLoading}) => {
    return isLoading ? (<h1>Loading....</h1>) : 
    (<section>
    {items.map((item) => (<h1>{item.name.first} {item.name.last}</h1>
    ))}
    </section>)
}

export default EmployeeTable;