import { useState, useEffect } from 'react'
import literals from "../assets/Literals";
import { AlternativeBtn } from "../styled/Btn";
import StyledForm from '../styled/StyledForm';
import Select from "../organisms/Select";
import FormGroup from "../molecules/FormGroup";
import FormDescription from "../molecules/FormDescription";

function Form() {
  const [car, setCar] = useState('')
  const [firstName, setFirstName] = useState('')
  const [surname, setSurname] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [checkboxPersonal, setCheckboxPersonal] = useState(false)
  const [checkboxMail, setCheckboxMail] = useState(false)
  const [checkboxPhone, setCheckboxPhone] = useState(false)
  const [checkboxSms, setCheckboxSms] = useState(false)
  const [data, setData] = useState({
    car: car,
    firstName: firstName,
    surname: surname,
    mail: mail,
    phone: phone,
    checkboxPersonal: checkboxPersonal,
    checkboxMail: checkboxMail,
    checkboxPhone: checkboxPhone,
    checkboxSms: checkboxSms
  })

  useEffect(() => {
    setData({
      car: car,
      firstName: firstName,
      surname: surname,
      mail: mail,
      phone: phone,
      checkboxPersonal: checkboxPersonal,
      checkboxMail: checkboxMail,
      checkboxPhone: checkboxPhone,
      checkboxSms: checkboxSms
    })
  }, [car, firstName, surname, mail, phone, checkboxPersonal, checkboxMail, checkboxPhone, checkboxSms])

  const handleSubmit = () => {
    console.log(data);
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <small>{literals.links.testRideMenuDesc}</small>
      <h2>{literals.form.testRide}</h2>
      <Select setData={setCar} />
      <FormGroup setFirstName={setFirstName} setSurname={setSurname} setMail={setMail} setPhone={setPhone} />
      <FormDescription setCheckboxPersonal={setCheckboxPersonal} setCheckboxMail={setCheckboxMail} setCheckboxPhone={setCheckboxPhone} setCheckboxSms={setCheckboxSms} />
      <AlternativeBtn onClick={handleSubmit} href={literals.links.testRide}>{literals.links.testRideDesc}</AlternativeBtn>
    </StyledForm>
  );
}

export default Form;
