import React from 'react';
import './App.css';

// 화면에 뿌려주는 것은 컴포넌트
class Number extends React.Component {
  // 컴포넌트의 state 초기화
  state = {
    clicked: false, // click 상태를 저장
  };

  onClick() {
    this.setState({
      // setState 함수는 state 값을 변경한다.
      clicked: true,
    });
  }

  render() {
    // return 값을 화면에 뿌려줌
    return (
      <td
        // 컴포넌트의 state의 clicked 값이 true면 "clicked"
        // 아니면 false
        className={this.state.clicked && 'clicked'}
        // 클릭 시 컴포넌트의 onClick 함수를 수행
        onClick={this.onClick.bind(this)}
      >
        {/* 상위 컴포넌트에서 넘어온 properties 중
        태그 사이에 있는 값을 불러옴 */}
        {this.props.children}
      </td>
    );
  }
}

class App extends React.Component {
  state = {
    name: 'name',
  };

  render() {
    return (
      <>
        <table border="1">
          <tr>
            <Number>13</Number>
            <Number>1</Number>
            <Number>3</Number>
            <Number>4</Number>
            <Number>23</Number>
          </tr>
          <tr>
            <Number>24</Number>
            <Number>25</Number>
            <Number>2</Number>
            <Number>12</Number>
            <Number>7</Number>
          </tr>
          <tr>
            <Number>21</Number>
            <Number>6</Number>
            <Number>5</Number>
            <Number>22</Number>
            <Number>15</Number>
          </tr>
          <tr>
            <Number>11</Number>
            <Number>14</Number>
            <Number>16</Number>
            <Number>9</Number>
            <Number>18</Number>
          </tr>
          <tr>
            <Number>17</Number>
            <Number>20</Number>
            <Number>19</Number>
            <Number>10</Number>
            <Number>8</Number>
          </tr>
        </table>
      </>
    );
  }
}

export default App;
