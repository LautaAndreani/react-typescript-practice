import { Sub } from '../types/types.d';

interface Props {
  subs: Sub[];
}

const List = ({ subs }: Props) => {
  return (
    <ul>
      {subs.map((sub) => (
        <li key={sub.nick}>
          <img src={sub.avatar} />
          <h4>
            {sub.nick} <small> ({sub.subMonths})</small>{' '}
          </h4>
          <p>{sub.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
