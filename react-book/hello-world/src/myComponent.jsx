import React from "react";
import PropTypes from "prop-types";

//rsc > 함수형 컴포넌트 스켈레톤
const MyComponent = (props) => {
  const { name, number, children } = props;

  return (
    <div>
      {name}
      <br />
      children value is {children}
      <br />
      my number is {number}
    </div>
  );
};

MyComponent.defaultProps = {
  // 위에서 return을 실행하고 아래에서 선언해주는데 어떻게 되는거지 호이스팅이 되나
  // 위로 올리니까 선언이 안되어 있었다고 나오는데..
  name: "default name",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired,
};

export default MyComponent;
