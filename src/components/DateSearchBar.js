import * as React from "react";
import dayjs from "dayjs";
import { DemoItem, DemoContainer } from "@mui/x-date-pickers/internals/demo/DemoContainer.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Box } from "@mui/material";

export default function ResponsiveDatePickers() {
  return (
    <Box sx={{ minWidth: 120, m: 8, marginBottom: 0, marginTop: 1 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem label="Date:">
            <DatePicker defaultValue={dayjs("2023-06-22")} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </Box> 
  );
}