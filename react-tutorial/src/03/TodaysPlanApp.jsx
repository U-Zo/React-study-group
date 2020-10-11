import React from 'react';
import TodaysPlan from './TodaysPlan';

const TodaysPlanApp = ({ onButtonClick, hasPlan }) => {
  return (
    <div>
      {hasPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>계획 없음</button>
    </div>
  );
};

export default TodaysPlanApp;
