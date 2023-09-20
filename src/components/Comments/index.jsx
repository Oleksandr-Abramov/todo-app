import { useDispatch, useSelector } from "react-redux";
import s from "./comments.module.css";
import { getActiveItem } from "store/todos/todosSelectors";
import CommentsList from "components/CommentsList";
import { useState } from "react";
import { addComment, setActiveItem } from "store/todos/todosSlice";

const Comments = () => {
  const [color, setColor] = useState("#000000");
  const [commentText, setCommentText] = useState("");
  const activeItem = useSelector(getActiveItem);

  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    setCommentText(e.target.value);
  };

  const handlerAddComment = (e) => {
    e.preventDefault();
    const comment = {
      id: `${activeItem.id}-${activeItem.comments.length}`,
      body: commentText,
      color,
    };

    dispatch(addComment(comment));
    dispatch(setActiveItem(activeItem.id));

    setCommentText("");
  };

  return (
    <div className={s.container}>
      <h2>Comments #{activeItem?.id}</h2>
      <CommentsList comments={activeItem?.comments} />
      <div className={s.formWrapper}>
        <form className={s.form} onSubmit={(e) => handlerAddComment(e)}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <textarea
            type="text"
            name="comment"
            placeholder="Type comment here..."
            value={commentText}
            onChange={handleChangeForm}
            required
          />
          <button className={s.btn} type="submit">
            Add New
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
