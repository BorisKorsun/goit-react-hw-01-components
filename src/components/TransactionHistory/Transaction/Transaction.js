import PropTypes from 'prop-types';

import {TableValue} from './Transaction.styled'

export const Transaction = ({type, amount, currency}) => {
    return (
        <tr>
            <TableValue>{type}</TableValue>
            <TableValue>{amount}</TableValue>
            <TableValue>{currency}</TableValue>
        </tr>
    );
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};