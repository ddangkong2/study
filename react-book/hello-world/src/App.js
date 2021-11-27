import "./App.css";
import MyComponent from "./myComponent";

function App() {
  return (
    <MyComponent name="react" number={3}>
      {/* 왜 숫자를 그냥 넣지 못하지 */}
      children-props
    </MyComponent>
  );
}

export default App;
