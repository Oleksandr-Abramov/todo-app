import s from "./itemsList.Module.css";

const Item = ({ item, coments, id }) => {
  return (
    <div className={s.container}>
      {item}
      {coments}
    </div>
  );
};

export default Item;
