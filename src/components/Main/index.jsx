import Items from "components/Items";
import s from "./main.module.css";
import Comments from "components/Comments";

const Main = () => {
  return (
    <div className={s.container}>
      <Items />
      <Comments />
    </div>
  );
};

export default Main;
