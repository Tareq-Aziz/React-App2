import Button from './button';
const Divs = (props) => {
  return (
    <div style={{ border: '0.5px solid #30C6DC' }}>
      {props.pic}
      <span style={{ fontWeight: 'bold' }}>{props.heading} </span>
      <Button color='#30C6DC' name='Aprove' />
      <Button color='#636588' name='Reject' />
      <br />
      <span style={{ color: '#969897' }}>{props.text}</span>
      <span style={{ float: 'right', color: '#808181' }}>{props.time} </span>
      {props.children}
    </div>
  );
};
export default Divs;
