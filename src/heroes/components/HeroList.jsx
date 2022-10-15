import { getHeroesByPublisher } from "../helpers";

export const HeroList = (publisher) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};
