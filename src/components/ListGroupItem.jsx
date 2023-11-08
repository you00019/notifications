function ListGroupItem({ id, children, color, onClickHandler }) {
  //   const handleDelete = () => {
  //     onItemClick(id);
  //   };

  return (
    <li
      className={
        color ? `list-group-item list-group-item-${color}` : "list-group-item"
      }
    >
      {children} <br />
      <button
        onClick={() => onClickHandler(id)} // id is the real id,not a parameter
        type="button"
        className="btn btn-warning"
      >
        Delete
      </button>
    </li>
  );
}

export default ListGroupItem;
