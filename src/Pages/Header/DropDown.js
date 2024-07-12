import React from 'react';

export default function DropDown({children}) {
    return (
        <>
            <div className="dropdown-btn open"></div>{children}
        </>
    )
}