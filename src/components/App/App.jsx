// import { FaBeer } from "react-icons/fa";
// import AppBar from "../AppBar/";
// import officers from "../../officers.json";
// import OfficerList from "../OfficerList/OfficerList";
import ProfileSection from "../ProfileSection";
import css from "./App.module.css";
// import { Children } from "react";

export default function App() {
  return (
    <div className={css.container}>
      <ProfileSection title="Рейтинг">
        <div>Олексій Міхєєв</div>
      </ProfileSection>
      <ProfileSection
        title="Що це за очки досвіду та рівні?
"
      >
        <ul>
          <li>
            У GoIT ми дбаємо про освітній досвід наших студентів, і хочемо, щоб
            вам було цікаво та весело вчитися.
          </li>
        </ul>
      </ProfileSection>
      <ProfileSection
        title="Як отримати більше очків досвіду?
"
      >
        <ul>
          <li>Виконуй домашні завдання та автоперевірки</li>
        </ul>
      </ProfileSection>
      {/* <AppBar />
      <h1 className={css.title}>
        ~Dream Team~ <FaBeer className={css.icon} />
      </h1>
      <OfficerList items={officers} /> */}
    </div>
  );
}

// const App = () => {
//   return <p>Hello React</p>
// };
// export default App;
