import PropTypes, { arrayOf } from 'prop-types';

import { Table, TableTitle, TableValue } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, currency, type, amount }) => {
          return (
            <tr key={id}>
              <TableValue>{type}</TableValue>
              <TableValue>{amount}</TableValue>
              <TableValue>{currency}</TableValue>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};
