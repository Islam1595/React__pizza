import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="131" cy="107" r="107" />
      <rect x="0" y="227" rx="4" ry="4" width="280" height="24" />
      <rect x="0" y="259" rx="10" ry="10" width="280" height="84" />
      <rect x="1" y="368" rx="5" ry="5" width="90" height="27" />
      <rect x="119" y="361" rx="30" ry="30" width="152" height="44" />
    </ContentLoader>
  );
}

export default LoadingBlock;
