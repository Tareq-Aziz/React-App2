const Boxes = (props) => {
  return (
    <div
      style={{
        width: '220px',
        height: '170px',
        backgroundColor: '#FFFFFF',
        margin: '35px 35px 0px 40px',
        float: 'left',
      }}
    >
      <p
        style={{
          fontSize: '16px',
          fontFamily: 'arial',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {props.title}
      </p>
      <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
        {props.updown}
        {props.digits}
      </p>
      <p style={{ color: '#969897' }}>{props.progress}</p>
      {props.children}
    </div>
  );
};
export default Boxes;
