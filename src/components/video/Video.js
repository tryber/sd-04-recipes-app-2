import React from 'react';

const Video = (key, food) => (
  <div data-testid="video">
    {key === 'Meal' && (
      <iframe
        title={food[`str${key}`]}
        width="420"
        height="315"
        src={food.strYoutube.replace('watch?v=', 'embed/')}
      />
    )}
  </div>
);

export default Video;
