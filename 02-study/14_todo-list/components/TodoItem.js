
function TodoItem(props) {
  const atClick = () => {
    props.onToggleItem(props.id);
  };
  let className = 'todo-item';
  if (props.done) {
    className += ' done';
  }
  return (
    <section data-name='TodoItem.js' className="style-2">
      <li className={className} onclick={atCkick}>
        {props.children}
      </li>
    </section>
  );
  /* // TODO
  const atClick = () => {
    props.onToggleItem(props.id);
  };
  let className = 'todo-item';
  if (props.done) {
    className += ' done';
  }
  return (
    <section data-name="TodoItem.js" className="style-2">
      <li className={className} onClick={atClick}>
        {props.children}
      </li>
    </section>
  );
  // */
}
