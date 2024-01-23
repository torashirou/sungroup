import StyledFormWrapper from "../styled/StyledFormWrapper";
import Form from "../organisms/Form";

function FormWrapper() {
  return (
    <StyledFormWrapper>
      <div className="container">
        <Form />
      </div>
    </StyledFormWrapper>
  );
}

export default FormWrapper;
