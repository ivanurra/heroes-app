import { useParams, Navigate, Route, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const hero = getHeroById(id);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h1 className="mb-3">{hero.superhero}</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b>
            {hero.first_appearance}
          </li>
          <li className="list-group-item">
            <b>Characters: </b>
            {hero.characters}
          </li>
        </ul>
        <button className="btn btn-secondary mt-3" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
