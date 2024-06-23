import { FaBeer } from "react-icons/fa";
import AppBar from "../AppBar/AppBar";
import officers from "../../officers.json";
import OfficerList from "../OfficerList/OfficerList";
import css from "./App.module.css";
// import ProfileSection from "../ProfileSection/ProfileSection";
// import { Children } from "react";

// const UserInfo = () => {
//   return <div>Олексій Міхєєв</div>;
// };

// const Points = () => {
//   return (
//     <ul>
//       <li>
//         У GoIT ми дбаємо про освітній досвід наших студентів, і хочемо, щоб вам
//         було цікаво та весело вчитися.
//       </li>
//     </ul>
//   );
// };

// const Levels = () => {
//   return (
//     <ul>
//       <li>Виконуй домашні завдання та автоперевірки</li>
//     </ul>
//   );
// };

export default function App() {
  return (
    <div className={css.container}>
      {/* <ProfileSection title="Рейтинг">
        <UserInfo />
      </ProfileSection>
      <ProfileSection
        title="Що це за очки досвіду та рівні?
"
      >
        <Points />
      </ProfileSection>
      <ProfileSection
        title="Як отримати більше очків досвіду?
"
      >
        <Levels />
      </ProfileSection> */}
      <AppBar />
      <h1 className={css.title}>
        ~Dream Team~ <FaBeer className={css.icon} />
      </h1>
      <OfficerList items={officers} />
    </div>
  );
}

// const App = () => {
//   return <p>Hello React</p>
// };
// export default App;
