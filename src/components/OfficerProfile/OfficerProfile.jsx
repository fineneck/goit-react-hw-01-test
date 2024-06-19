import clsx from "clsx";
import css from "./OfficersProfile.module.css";

export default function OfficerProfile({
  officer: { name, rank, age, spec, active, skills },
}) {
  const statusClsx = clsx(css.text, active ? css.isActive : css.isRetired);
  const containerClsx = clsx(
    css.container,
    active ? css.isActiveC : css.isRetiredC
  );

  //  більш складна умова

  // const statusClasses = clsx(css.text, {
  //   [css.isActive]: active,
  //   [css.isRetired]: !active,
  // });

  // ---------------------------

  return (
    <div className={containerClsx}>
      <p className={css.text}> Rank: {rank}</p>
      <p className={css.text}>Name: {name}</p>
      <p className={css.text}>Age: {age}</p>
      <p className={css.text}>Spec: {spec}</p>
      <p className={statusClsx}>Status: {active ? "Active" : "Retired"}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}> {skill} </li>
        ))}{" "}
      </ul>
    </div>
  );
}
