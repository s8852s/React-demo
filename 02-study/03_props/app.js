
function FunctionalCard(props){
  // TODO: 2 start
  return(
    <div className="card">
      <img src={props.img} alt="" className="img"/>
      <div className="name">{props.name}</div>
      <div className="quote">{props.children}</div>
    </div>
    // children 是特殊的內建關鍵字
  )
  /*
  return (
    <div className="card">
      <img className="img" src={props.img} />
      <div className="name">{props.name}</div>
      <div className="quote">{props.children}</div>
    </div>
  );
  // */
  // TODO: 2 end
}



ReactDOM.render(
  // TODO:3 start
  <div>
    <FunctionalCard
      img="http://fakeimg.pl/200x80/?text=milkmidi"
      name="Component" 
    />
    
    <FunctionalCard
    count={10}
      img="http://fakeimg.pl/200x80/ff0000/?text=pipi"
      name="Component" >
    </FunctionalCard>
  </div>,
  /*
  <div>
    <FunctionalCard 
      img="http://fakeimg.pl/200x80/?text=milkmidi"
      name="Component" />
    <FunctionalCard 
      img="http://fakeimg.pl/200x80/ff0000/?text=pipi"
      name="Component">
      <h1>這裡可以放 children </h1>
    </FunctionalCard>
  </div>,
  // */
  // TODO: 3 end
  
  document.getElementById('app')
);