import PropTypes from 'prop-types';

import {Table, TableTitle,} from './TransactionHistory.styled'

import { Transaction } from './Transaction/Transaction';

export const TransactionHistory = ({items}) => {
    return (
        <Table className="transaction-history">
            <thead>
                <tr>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (<Transaction key={id} type={type} amount={amount} currency={currency}/>)
                })}
            </tbody>
        </Table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
