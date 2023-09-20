import s from "./itemsList.Module.css";

const Item = ({ items, activeItem, setActiveItem, removeItem }) => {
  return (
    <ul className={s.container}>
      {items?.map(({ id, name, comments }) => (
        <li key={id} onClick={() => setActiveItem(id)}>
          {activeItem === id && <span>+++</span>}
          <span>{name}</span>
          <span>{comments.length}</span>

          <button type="click" onClick={(e) => removeItem(e, id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Item;
