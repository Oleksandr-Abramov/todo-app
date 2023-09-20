import Items from "components/Items";
import s from "./main.module.css";
import Comments from "components/Comments";

const Main = () => {
  return (
    <div className={s.container}>
      <aside className={s.sideBar}>
        <h1>DAYRY APP</h1>
        <p>Comment whit no sense</p>
      </aside>

      <main className={s.main}>
        <Items />
        <Comments />
      </main>
    </div>
  );
};

export default Main;
