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
import AppContainer from '../../styledComponents/AppContainer/styles';
import addToInProgressRecipes from '../../helpers/addToInProgressRecipes';
import addToFavoriteRecipes from '../../helpers/addToFavoriteRecipes';
import copyToClipboard from '../../helpers/copyToClipboard';
import ShareBtn from '../../images/shareIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';
import useFoodDetails from '../../hooks/useFoodDetails';
import Button from '../../styledComponents/Button/styles';

const RecipeDetails = ({
  match: {
    params: { id },
    path,
  },
}) => {
  const {
    type,
    loading,
    food,
    inProgress,
    isInProgress,
    isFavorite,
    setIsFavorite,
  } = useFoodDetails(path, id);

  if (loading) return <Loading />;

  const heartImage = isFavorite ? blackHeart : whiteHeart;

  return (
    <AppContainer>
      <img
        data-testid="recipe-photo"
        src={food.item[`str${food.key}Thumb`]}
        alt={food[`str${food.key}`]}
        style={{ width: '30vw' }}
      />
      <h1 data-testid="recipe-title">{food.item[`str${food.key}`]}</h1>
      <button
        data-testid="share-btn"
        type="button"
        onClick={(e) => copyToClipboard(food.path, id, e.target)}
      >
        <img src={ShareBtn} alt="share-btn" />
      </button>
      <button
        data-testid="favorite-btn"
        type="button"
        src={heartImage}
        onClick={() => {
          addToFavoriteRecipes(food, isFavorite);
          setIsFavorite(!isFavorite);
        }}
      >
        <img src={heartImage} alt={`isFavorite? ${isFavorite}`} />
      </button>
      <Category food={food.item} type={type} />
      <Ingredients food={food.item} path={path} />
      <Instructions instructions={food.item.strInstructions} />
      {!inProgress && (
        <div>
          {food.item.strYoutube && <Video path={path} food={food.item} />}
          <Recomendations type={type} />
          <Link to={`/${food.path}/${food.item[`id${food.key}`]}/in-progress`}>
            <Button.fixed
              data-testid="start-recipe-btn"
              onClick={() => addToInProgressRecipes(food, type, isInProgress)}
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
    </AppContainer>
  );
};

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeDetails;
