import type { FormEvent } from "react";

interface MonsterFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const MonsterForm: React.FC<MonsterFormProps> = ({ onSubmit }) => {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(e);
  }

  return (
    <form onSubmit={handleSubmit} className="creation-page-content-container">
      <h1>Créer un nouveau monstre</h1>
      <label>
        Image :
        <input name="picture" type="file" />
      </label>
      <label>
        Nom :
        <input name="name" type="text" />
      </label>
      <label>
        Famille :
        <input name="family" type="text" />
      </label>
      <label>
        Points de vie :
        <input name="health" type="text" />
      </label>
      <label>
        Points de mouvement :
        <input name="movementPoints" type="text" />
      </label>
      <label>
        Points d'action :
        <input name="actionPoints" type="text" />
      </label>
      <h3>Résistances :</h3>
      <label>
        Neutre :
        <input name="resNeu" type="text" />
      </label>
      <label>
        Force :
        <input name="resFo" type="text" />
      </label>
      <label>
        Intelligence :
        <input name="resIne" type="text" />
      </label>
      <label>
        Chance :
        <input name="resCha" type="text" />
      </label>
      <label>
        Agilité :
        <input name="resAge" type="text" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default MonsterForm;
