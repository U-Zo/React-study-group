import React from 'react';

// props = {
//   data: '준이 미현이',
//   name: '우조',
//   b: () => {
//     console.log('배시기');
//   },
// };

const PropsChild = ({ data, name, func }) => {
  func();

  return (
    // jsx 코드를 쓰는 부분
    <div>
      {data} {name}
    </div>
  );
};

export default PropsChild;
