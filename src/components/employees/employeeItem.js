import React from 'react';

const EmployeeItem = ({item}) => {
    return (
        <div>
            {item.name.first} {item.name.last}
        </div>
    )
}

export default EmployeeItem;