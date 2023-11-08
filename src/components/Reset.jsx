function Reset({ resetHandler }) {
  return (
    <button onClick={resetHandler} type="button" className="btn btn-warning">
      {" "}
      Detele all
    </button>
  );
}

export default Reset;
