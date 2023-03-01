import "./App.css";
import Header from "./components/Header";

import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
// import Fields from "./components/Fields";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState(true);

  useEffect(() => {
    if (name !== "" && email !== "") {
      setBtn(false);
    } else {
      setBtn(true);
    }

    // window.alert("Use effect");s
  }, [name, email]);

  const addData = () => {
    if (name === "" || email === "") {
      setBtn(false);
      return;
    }

    setData([...data, { name, email }]);
    setName("");
    setEmail("");
    // setBtn(true);
  };
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  const handlePress = (event) => {
    if (event.key === "Enter") {
      addData();
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            onKeyPress={(e) => handlePress(e)}
            className="text"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onKeyPress={(e) => handlePress(e)}
            className="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button
            onClick={addData}
            variant="contained"
            color="success"
            className="addBtn"
            disabled={btn}
          >
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button
                  onClick={() => removeItem(index)}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
