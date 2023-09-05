import PropTypes, { arrayOf } from 'prop-types';

import {
  StatBox,
  StatTitle,
  StatList,
  StatItem,
  ItemLabel,
  Itempercantage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatBox>
      <StatTitle>{title}</StatTitle>

      <StatList>
        {stats.map(({id, label, percentage}) => {
            return (
            <StatItem key={id}>
                <ItemLabel>{label}</ItemLabel>
                <Itempercantage>{percentage}%</Itempercantage>
            </StatItem>
            )
        })}
      </StatList>
    </StatBox>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  data: arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
