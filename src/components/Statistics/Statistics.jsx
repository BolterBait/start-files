import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const icons = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];
export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatisticTitle>{title}</StatisticTitle>
      <StatisticsList>
        {stats.map((item, idx) => {
          return (
            <StatisticItem
              key={item.id}
              text={item.title}
              counter={item.total}
              Icon={icons[idx]}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};
