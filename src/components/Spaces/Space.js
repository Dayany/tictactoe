function Space({ value, markSquare }) {
  return (
    <button className="space" onClick={markSquare}>
      <spam>{value}</spam>
    </button>
  );
}

export default Space;
