
function Clock() {
  React.useEffect(() => {
    console.log('componentDidMount');
    return() => {
      console.log('componentWillUnmount');
    }
    
  }, []);
  
  /* // TODO
  React.useEffect(() => {
    console.log('componentDidMount')
    return () => {
      console.log('componentWillUnmount');
    }
  }, []);
  // */

  return (
    <div className="my-component">
      <h2>react useEffect</h2>
    </div>
  )
}
