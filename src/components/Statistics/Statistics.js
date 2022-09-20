import PropTypes from 'prop-types';

import { StatBox, StatTitle, StatList, StatItem, ItemLabel, Itempercantage} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
<StatBox>
  {title && <StatTitle>{title}</StatTitle>}

  <StatList>
      {dataParse(stats)}
  </StatList>
</StatBox>
    )
};

const dataParse = (stats) => {
  return stats.map(({ id, label, percentage }) => {
    return (
      <StatItem key={id}>
        <ItemLabel>{label}</ItemLabel>
        <Itempercantage>{percentage}</Itempercantage>
      </StatItem>
    )
  })
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

