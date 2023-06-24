import * as React from "react";
import {
  Box,
  InputLabel,
  FormControl,
  NativeSelect,
  Typography
} from "@mui/material";

export default function TimeSearchBar() {
  return (
    <Box sx={{ minWidth: 120, m: 8, marginTop: 3 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Time
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: "Time",
            id: "uncontrolled-native"
          }}
        >
          <option value={10}>0800</option>
          <option value={10}>0900</option>
          <option value={10}>1000</option>
          <option value={10}>1100</option>
          <option value={10}>1200</option>
          <option value={10}>1300</option>
          <option value={10}>1400</option>
          <option value={10}>1500</option>
          <option value={10}>1600</option>
          <option value={10}>1700</option>
          <option value={10}>1800</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
