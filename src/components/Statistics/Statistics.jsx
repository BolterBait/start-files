import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
const icon = [FaRegThumbsUp, MdPeople, MdOutlineProductionQuantityLimits, GiTreeDoor]

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatisticTitle>{ title }</StatisticTitle>
<StatisticsList>{stats.map((i, idx) => {
  return <StatisticItem key={i.id} text={i.title} counter = {i.total} Icon ={icon[idx]}/>})}
  </StatisticsList>
    </>
  );
};
