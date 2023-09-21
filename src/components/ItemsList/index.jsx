import s from "./ItemsList.module.css";
const Item = ({ items, activeItem, setActiveItem, removeItem }) => {
  return (
    <ul className={s.container}>
      {items?.map(({ id, name, comments }) => (
        <li
          className={`${s.item} ${activeItem === id ? s.active : ""}`}
          key={id}
          onClick={() => setActiveItem(id)}
        >
          {name}
          <div className={s.btnWrapper}>
            <span>{comments.length}</span>
            <button
              className={s.btn}
              type="click"
              onClick={(e) => removeItem(e, id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Item;
