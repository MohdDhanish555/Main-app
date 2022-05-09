import InputBar from "../components/InputBar";
import "./css/ContactUs.css";
const ContactUs = ({ value, setValue, label }: any) => {
  return (
    <div className="contactus-container">
      <h1> CONTACT US PAGE!</h1>
      <InputBar value={value} setValue={setValue} label={label} />

      <p>Thank You , will get back to you soon!!</p>
    </div>
  );
};

export default ContactUs;
