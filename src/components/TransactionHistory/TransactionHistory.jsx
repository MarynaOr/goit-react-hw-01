import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <div className={s.tabCon}>
      <table>
        <thead className={s.tabTread}>
          <tr className={s.tab}>
            <th> Type </th>
            <th> Amount </th>
            <th> Currency </th>
          </tr>
        </thead>

        <tbody className={s.tab}>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={s.taTr}>
                <td> {type} </td>
                <td> {amount} </td>
                <td> {currency} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
