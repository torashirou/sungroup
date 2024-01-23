import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import Inputs from '../assets/Types';
import literals from "../assets/Literals";
import { AlternativeBtn } from "../styled/Btn";
import StyledForm from '../styled/StyledForm';
import StyledFormGroup from '../styled/StyledFormGroup';
import Select from "./Select";
import FormGroup from "../molecules/FormGroup";
import FormDescription from "../molecules/FormDescription";

function Form() {
  const methods = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
        <small>{literals.links.testRideMenuDesc}</small>
        <h2>{literals.form.testRide}</h2>
        <StyledFormGroup>
          <Select />
          <FormGroup />
        </StyledFormGroup>
        <FormDescription />
        <AlternativeBtn onClick={methods.handleSubmit(onSubmit)} href={literals.links.testRide}>{literals.links.testRideDesc}</AlternativeBtn>
      </StyledForm>
    </FormProvider>
  );
}

export default Form;
