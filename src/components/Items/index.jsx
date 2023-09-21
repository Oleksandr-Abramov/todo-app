import Item from "components/ItemsList";
import s from "./items.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, setActiveItem } from "store/todos/todosSlice";
import getId from "helpers/getId";
import { getActiveItem, getItems } from "store/todos/todosSelectors";

const Items = () => {
  const [itemName, setItemName] = useState("");
  const items = useSelector(getItems);
  const activeItem = useSelector(getActiveItem);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!items.map(({ id }) => id).includes(activeItem?.id)) {
      dispatch(setActiveItem(items[items.length - 1]?.id));
    }
  }, [items, activeItem, dispatch]);

  const handleChangeForm = (e) => {
    setItemName(e.target.value);
  };

  const handlerAddItem = (e) => {
    e.preventDefault();
    const item = {
      id: getId(items),
      name: itemName,
      comments: [],
    };
    dispatch(addItem(item));
    setItemName("");
  };

  const handleSetActiveItem = (id) => {
    dispatch(setActiveItem(id));
  };

  const handleRemoveItem = (e, id) => {
    e.stopPropagation();
    dispatch(removeItem(id));
  };

  return (
    <div className={s.container}>
      <h2>Items</h2>
      <form className={s.form} onSubmit={(e) => handlerAddItem(e)}>
        <input
          type="text"
          name="itemName"
          placeholder="Type name here..."
          value={itemName}
          onChange={handleChangeForm}
          required
        />

        <button className={s.btn} type="submit">
          Add New
        </button>
      </form>
      <Item
        items={items}
        activeItem={activeItem?.id}
        setActiveItem={handleSetActiveItem}
        removeItem={handleRemoveItem}
      />
    </div>
  );
};

export default Items;
