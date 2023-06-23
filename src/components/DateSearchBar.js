import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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