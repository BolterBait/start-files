import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ items }) => {
  // const { id, price, amount, date } = items;
  // console.log(items);
  // console.log(items.);
  return (
    <div>
      <BaseTable>
        <THead>
          <tr>
            <Th>№</Th>
            <Th>PRICE</Th>
            <Th>AMOUNT</Th>
            <Th>DATE</Th>
          </tr>
        </THead>

        <tbody>
          {items.map(item => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.price}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.date}</Td>
            </Tr>
          ))}
        </tbody>
      </BaseTable>
    </div>
  );
};
