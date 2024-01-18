import StyledFormCheckbox from '../styled/StyledFormCheckbox';

function FormCheckbox(props) {
  const handleChange = (e) => {
    const value = e.target.checked;
    console.log(value);
    props.setData(value);
  }

  return (
    <StyledFormCheckbox>
      <input type="checkbox" id={props.id} onChange={handleChange}/>
      <label htmlFor={props.id}>{props.label}</label>
    </StyledFormCheckbox>
  );
}

export default FormCheckbox;
