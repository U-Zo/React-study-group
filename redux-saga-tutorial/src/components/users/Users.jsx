import React from 'react';

/**
 * 유저 객체를 출력하기 위한 Users의 하위 컴포넌트
 * Users 컴포넌트가 ul 태그로 감싸고 있으므로
 * li 태그로 유저 정보 출력
 *
 * @param {Object} props
 * @param {Number} props.id - 유저 식별 번호
 * @param {String} props.name - 유저 이름
 */
const User = ({ id, name }) => {
  return (
    <li>
      {id}: {name}
    </li>
  );
};

/**
 * 유저 목록을 출력하는 컴포넌트
 * 서버와 통신을 하기 때문에
 * 서버로부터 유저 정보가 넘어왔는지 로딩 상태를 체크
 * 유저 목록을 출력하기 위해 ul 요소로 출력함
 *
 * @param {Object} props
 * @param {Array} props.users - 유저 정보들을 담고 있는 배열
 * @param {Boolean} props.loading - 유저 정보가 로딩됐는지 판단
 */
const Users = ({ users, loading }) => {
  return (
    <div>
      <ul>
        {users && users.map((user) => <User id={user.id} name={user.name} />)}
      </ul>
    </div>
  );
};

export default Users;
