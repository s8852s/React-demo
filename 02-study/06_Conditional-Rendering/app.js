// TODO: 1 start
/*
function UserGreeting({name="default"}){
  return <h1>{name}登入成功</h1>
}
const GuestGreeting = () => {
  return <h1>Please sign up.</h1>;
}

// 如果 ArrowFunction 只有一行 return 的話，可以用以下縮寫
const GuestGreetingES6 = ()=> (<h1>Please sign up.</h1>);
// */
// TODO: 1 end

class App extends React.Component {
  // TODO: 2 start 直接用 Constructor 變數縮寫
  // // https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
  /*
  state = { isLoggedIn: false }
  clickHandler = () =>{
    this.setState((state) => {
      return {
        isLoggedIn: !state.isLoggedIn
      }
    });
  }
  // */
  // TODO: 2 end
  render(){
    // TODO: 3 start
    /*
    const { isLoggedIn } = this.state;
    return (
      <div className="app">
        <button onClick={this.clickHandler}>{isLoggedIn? '登出' : '登入'}</button>
        {isLoggedIn ? <UserGreeting />: <GuestGreeting />}
        {isLoggedIn && <UserGreeting name="milkmidi" />}
      </div>
    )
    // */
    // TODO: 3 end
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);