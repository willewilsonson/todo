import './TodoCard.css';

const TodoCard = props => {
  const {
    todo, index, doneTodo, removeTodo,
  } = props;

  return (
      <article className={todo.isDone ? 'todo-list__todo--done' : 'todo-list__todo'}>
        <p className={todo.isDone ? 'todo__text--underlined' : 'todo__text'}>{ todo.text }</p>
        <button
          className='todo-list__button-done'
          onClick={() => doneTodo(index)}
          >
            {todo.isDone ? 'Not Done' : 'Done'}
          </button>
        <button className={todo.isDone ? 'todo-list__button-remove' : 'todo-list__button-remove--hidden'} onClick={() => removeTodo(index)}>x</button>
      </article>
  );
};

export default TodoCard;
