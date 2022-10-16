import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';



export const StatisticItem = ({text, counter, Icon}) => {
 
  return <StatisticBox>
    <Icon/>
      <StatisticText>{text}</StatisticText>
      <StatisticCounter>{counter}</StatisticCounter>
    </StatisticBox>
}
