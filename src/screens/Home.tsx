import InputBar from "../components/InputBar";
import "./css/Home.css";

interface Props {
  value: string;
  setValue: any;
  label: string;
}

const Home = ({ value, setValue, label }: Props) => {
  return (
    <div className="home-container">
      <h1>HELLO {value || "USER"} !!</h1>
      <InputBar
        value={value}
        setValue={setValue}
        label={label}
        helperText="Enter Your Name"
        className="inputBar"
      />
    </div>
  );
};

export default Home;
