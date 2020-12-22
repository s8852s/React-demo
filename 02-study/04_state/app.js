/**
  放兩個 Counter Component
  一個 count 為 0
  另一個 count 為 1
 */

function Counter(props){
  const atClick = () => {
    setCount(count + 1)
  }
  const [count, setCount] = React.useState(props.count);
  return (
    <div className="counter">
      <h1>Counter</h1>,
      <div className="count">{count}</div>
      <h2>{count}</h2>
      <button onClick={atClick}>+1</button>
    </div>
  );
  
  /* // TODO
  var [count, setCount] = React.useState(0);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">{count}</div>
    </div>
  );
  // */
}

ReactDOM.render(
  <div>
    <Counter count={0}/>
    <Counter count={1} />
  </div>,
  
  document.getElementById('app')
);