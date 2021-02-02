import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';

const Search = () => {
    return (
        <section>
            <form>
                <input type="text" className="form-control" placeholder="Search Employees" value="" />
            </form>
        </section>
    )
}

export default Search;