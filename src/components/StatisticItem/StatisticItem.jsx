import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ Icon, text, counter }) => {
  // const Icon = { icon.icon };
  // console.log(icon);
  return (
    <>
      <StatisticBox>
        <Icon />
        <StatisticCounter>{counter}</StatisticCounter>
        <StatisticText>{text}</StatisticText>
      </StatisticBox>
    </>
  );
};
