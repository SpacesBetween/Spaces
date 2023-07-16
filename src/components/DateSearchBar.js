import * as React from "react";
import dayjs from "dayjs";
import {
  DemoItem,
  DemoContainer,
} from "@mui/x-date-pickers/internals/demo/DemoContainer.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Box } from "@mui/material";

export default function DateSearchBar({ onSelect }) {
  // check if a date is weekend
  const isWeekend = (date) => {
    const day = date.day();

    return day === 0 || day === 6;
  };

  const nextWeekday = () => {
    // Room can only book in advance, so default
    // date can only book from tomorrow onwards.
    const tomorrow = dayjs().add(1, 'day');
    
    // check if today is a weekend or not
    return isWeekend(tomorrow) 
           ? dayjs().startOf('week').add(1, 'week')
           : tomorrow;
  };

  return (
    <Box sx={{ minWidth: 120, m: 8, marginBottom: 0, marginTop: 1 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem label="Date:">
            <DatePicker
              defaultValue={nextWeekday()}
              disablePast
              shouldDisableDate={isWeekend}
              onChange={(e) => onSelect(e)}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}
