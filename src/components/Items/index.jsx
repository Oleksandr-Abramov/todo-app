import Item from "components/ItemsList";
import s from "./items.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "store/todos/todosSlice";

const Items = () => {
  const [itemName, setItemName] = useState("");

  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    setItemName(e.target.value);
  };

  const handlerAddTodo = (e) => {
    e.preventDefault();
    const item = {
      id: "123123",
      name: itemName,
      comments: [],
    };
    dispatch(addTodo({ item }));
  };

  return (
    <div className={s.container}>
      <form onSubmit={(e) => handlerAddTodo(e)}>
        <label>
          <p>Items</p>
          <input
            type="text"
            name="itemName"
            placeholder="Type name here..."
            value={itemName}
            onChange={handleChangeForm}
          />
        </label>
        <button type="submit">Add New</button>
      </form>
      <Item item="item" coments="0" id="1233" />
    </div>
  );
};

export default Items;
