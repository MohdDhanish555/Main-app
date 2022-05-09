import TextField from "@mui/material/TextField";
import "./css/InputBar.css";
const InputBar = ({ value, label, setValue, helperText }: any) => (
  <>
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      helperText={helperText}
    />
  </>
);

export default InputBar;
