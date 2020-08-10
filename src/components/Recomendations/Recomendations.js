import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getFoodsByName } from '../../services/api';

const RecContainer = styled.div`
  width: 100vw;
  height: fit-content;
`;

RecContainer.Carousel = styled.div`
  display: flex;
`;
RecContainer.RecCard = styled.div`
  display: flex;
  flex-direction: column;
`;

RecContainer.Img = styled.img`
  width: 40vw;
  padding: 10%;
`;

RecContainer.InvisibleImg = styled.img`
  visibility: hidden;
`;

const Recomendations = ({ type }) => {
  const [loading, setLoading] = useState(true);
  const [recomendations, setRecomendations] = useState([]);
  const recType = type === 'meal' ? 'cocktail' : 'meal';
  const recKey = type === 'meal' ? 'Drink' : 'Meal';

  useEffect(() => {
    getFoodsByName(recType, '').then((resp) => {
      setRecomendations(resp);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h3>Recomendations</h3>
      <RecContainer>
        <RecContainer.Carousel>
          {recomendations.slice(0, 6).map((recomendation, index) => {
            if (index <= 1) {
              return (
                <RecContainer.RecCard>
                  <RecContainer.Img
                    data-testid={`${index}-recomendation-card`}
                    src={recomendation[`str${recKey}Thumb`]}
                    alt={recomendation[`str${recKey}`]}
                  />
                  <p data-testid={`${index}-recomendation-title`}>
                    {recomendation[`str${recKey}`]}
                  </p>
                </RecContainer.RecCard>
              );
            }
            return (
              <RecContainer.RecCard>
                <RecContainer.InvisibleImg
                  data-testid={`${index}-recomendation-card`}
                  src={recomendation[`str${recKey}Thumb`]}
                  alt={recomendation[`str${recKey}`]}
                />
                <p data-testid={`${index}-recomendation-title`}>{recomendation[`str${recKey}`]}</p>
              </RecContainer.RecCard>
            );
          })}
        </RecContainer.Carousel>
      </RecContainer>
    </div>
  );
};

export default Recomendations;

Recomendations.propTypes = {
  type: PropTypes.string.isRequired,
};
