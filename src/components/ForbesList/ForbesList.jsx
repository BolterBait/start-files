import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  // const { id, name, capital, avatar, isIncrease } = list;
  return (
    <div>
      <LeaderBoard>
        <BoardHeader>
          <BoardTitle>
            <TitleTop>Forbes</TitleTop>
            <TitleBottom>Leader board</TitleBottom>
          </BoardTitle>
        </BoardHeader>

        <LeaderBoardProfiles>
          {list.map(item => {
            // console.log(item);
            return <ForbesListItem key={item.id} item={item} />;
          })}
          {/* Довільна кіл-сть FriendListItem */}
        </LeaderBoardProfiles>
      </LeaderBoard>
    </div>
  );
};
