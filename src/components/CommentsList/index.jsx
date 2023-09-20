import s from "./commentsList.module.css";

const CommentsList = ({ comments }) => {
  return (
    <ul className={s.container}>
      {comments.map(({ id, body, color }) => (
        <li key={id} className={s.item}>
          <div style={{ backgroundColor: color }} className={s.icon}></div>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;