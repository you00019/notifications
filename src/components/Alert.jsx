function Alert({ color, children }) {
  return (
    <div className={`alert alert-${color}`} role="alert">
      {children}
    </div>
  );
}

export default Alert;
