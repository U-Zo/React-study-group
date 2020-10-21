import React from 'react';
import PropsChild from './PropsChild';

const Props = () => {
  const a = '머시기';
  const b = () => {
    console.log('배시기');
  };

  return (
    <div>
      <PropsChild //
        data="준이 미현이"
        name="우조"
        a={a}
        func={b}
      />
    </div>
  );
};

export default Props;
