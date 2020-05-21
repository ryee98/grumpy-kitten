import React from 'react';

//import carToolPageStyles from './misc.modules.css';

import carToolPageStyles from './misc.module.css';

export const HeaderCell = ({ children }) => {
    return <th className={carToolPageStyles.carTableHeaderCell}>{children}</th>;
};

export const DataCell = ({children}) => {
    return <td className={carToolPageStyles.carTableDataCell}>{children}</td>;
};

export const CarToolButton = (props) => {
    const { onClick, children} = props;
    const doClick = () => {
        onClick();
    }

    return (<button className={carToolPageStyles.carToolButton} onClick={doClick}>
        {children}
        </button>);
}
/*
export const HeaderCell = ({children}) => {
    return <th className={carToolPageStyles.carTableHeaderCell}>
        {children}
    </th>;
};

export const DataCell = ({children}) => {
    return <td className={carToolPageStyles.carTableDataCell}>
        {children}
    </td>
}
*/

