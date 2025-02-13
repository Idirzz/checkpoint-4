import type { FormEvent } from "react";
import type { Monster } from "../../types/Monster";

interface MonsterFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  title: string;
  actionName: string;
  noImg?: boolean;
  defaultValues?: Monster;
}

const MonsterForm: React.FC<MonsterFormProps> = ({
  onSubmit,
  title,
  actionName,
  defaultValues,
  noImg,
}) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(event);
  }

  return (
    <form onSubmit={handleSubmit} className="creation-page-content-container">
      <h1>{title}</h1>
      <div className="carac-form-container">
        {!noImg && (
          <label>
            Image :
            <input name="picture" type="file" />
          </label>
        )}
        <label>
          Nom :
          <input defaultValue={defaultValues?.name} name="name" type="text" />
        </label>
        <label>
          Famille :
          <input
            defaultValue={defaultValues?.family}
            name="family"
            type="text"
          />
        </label>
        <label>
          Points de vie :
          <input
            defaultValue={defaultValues?.health}
            name="health"
            type="text"
          />
        </label>
        <label>
          Points de mouvement :
          <input
            defaultValue={defaultValues?.movement_points}
            name="movementPoints"
            type="text"
          />
        </label>
        <label>
          Points d'action :
          <input
            defaultValue={defaultValues?.action_points}
            name="actionPoints"
            type="text"
          />
        </label>
      </div>
      <h3>Résistances :</h3>
      <div className="resists-form-container">
        <label>
          Neutre :
          <input
            defaultValue={defaultValues?.resists.neu}
            name="resNeu"
            type="text"
          />
        </label>
        <label>
          Force :
          <input
            defaultValue={defaultValues?.resists.fo}
            name="resFo"
            type="text"
          />
        </label>
        <label>
          Intelligence :
          <input
            defaultValue={defaultValues?.resists.ine}
            name="resIne"
            type="text"
          />
        </label>
        <label>
          Chance :
          <input
            defaultValue={defaultValues?.resists.cha}
            name="resCha"
            type="text"
          />
        </label>
        <label>
          Agilité :
          <input
            defaultValue={defaultValues?.resists.cha}
            name="resAge"
            type="text"
          />
        </label>
      </div>
      <input type="submit" value={actionName} />
    </form>
  );
};

export default MonsterForm;
