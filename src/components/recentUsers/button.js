const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.color,
        margin: '7px',
        padding: '2px 10px 2px 10px',
        border: 'none',
        borderRadius: '15px',
        float: 'right',
        color: 'white',
      }}
    >
      {props.name}
      {props.children}
    </button>
  );
};
export default Button;
