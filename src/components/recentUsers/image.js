const Image = (props) => {
    return <img
        src={props.picture}
        alt='Alternate'
        width= {props.width}
        height={props.height}
        style={{ marginRight: '25px' }}
    />;
  
}
export default Image;