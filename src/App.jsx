import { useState } from "react";
import "./App.css";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";

function App() {
  const [number, setNumber] = useState();
  const [datePicked, setDatePicked] = useState(dayjs())

  const getSumDigits = (num) => {
    let total = 0;

    while (num > 0) {
      total += num % 10;
      num = parseInt(num / 10);
    }
    
    return total;
  }

  const onClick = () => {
    console.log(datePicked.$M + 1, datePicked.$D, datePicked.$y);

    let total = 0

    let month = getSumDigits(datePicked.$M + 1)
    let day = getSumDigits(datePicked.$D)
    let year = getSumDigits(datePicked.$y)

    const number = getSumDigits(month + day + year)

    setNumber(number);
  }

  return (
    <>
      <h1>What is your life's number?</h1>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker value={datePicked} onChange={(newDate) => setDatePicked(newDate)} onAccept={onClick} />
      </LocalizationProvider>

      <div className="card">
        <button onClick={onClick}>
          Your number is {number}
        </button>
      </div>

      <p className="read-the-docs">Created by Thomas Nguyen</p>
    </>
  );
}

export default App;
