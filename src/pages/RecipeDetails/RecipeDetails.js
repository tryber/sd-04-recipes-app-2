import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Loading,
  Ingredients,
  Instructions,
  Video,
  Recomendations,
  Category,
} from '../../components';
import addToInProgressRecipes from '../../helpers/addToInProgressRecipes';
import useFoodDetails from '../../hooks/useFoodDetails';
import Button from '../../styledComponents/Button/styles';

const RecipeDetails = ({
  match: {
    params: { id },
    path,
  },
}) => {
  const { type, loading, food, inProgress, isInProgress } = useFoodDetails(path, id);

  if (loading) return <Loading />;

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={food.item[`str${food.key}Thumb`]}
        alt={food[`str${food.key}`]}
        style={{ width: '30vw' }}
      />
      <h1 data-testid="recipe-title">{food.item[`str${food.key}`]}</h1>
      <Category food={food.item} type={type} />
      <button type="button" data-testid="share-btn">
        Icone twitter
      </button>
      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>
      <Ingredients food={food.item} path={path} />
      <Instructions instructions={food.item.strInstructions} />
      {!inProgress && (
        <div>
          {food.item.strYoutube && <Video path={path} food={food.item} />}
          <Recomendations type={type} />
          <Link to={`/${food.path}/${food.item[`id${food.key}`]}/in-progress`}>
            <Button.fixed
              data-testid="start-recipe-btn"
              onClick={() => addToInProgressRecipes(food, isInProgress)}
            >
              {isInProgress ? 'Continuar Receita' : 'Iniciar Receita'}
            </Button.fixed>
          </Link>
        </div>
      )}
      {inProgress && (
        <Link to="/receitas-feitas">
          <Button.fixed data-testid="finish-recipe-btn">Finish Recipe</Button.fixed>
        </Link>
      )}
    </div>
  );
};

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.number }),
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeDetails;
