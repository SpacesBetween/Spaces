import * as React from "react";
import {
  Box,
  InputLabel,
  FormControl,
  NativeSelect,
  Typography,
} from "@mui/material";

export default function TimeSearchBar({ onSelect }) {
  return (
    <Box sx={{ minWidth: 120, m: 8, marginTop: 3 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Time
        </InputLabel>
        <NativeSelect
          defaultValue={8}
          inputProps={{
            name: "Time",
            id: "uncontrolled-native",
          }}
          onChange={(e) => onSelect(e)}
        >
          <option value={8}>0800</option>
          <option value={9}>0900</option>
          <option value={10}>1000</option>
          <option value={11}>1100</option>
          <option value={12}>1200</option>
          <option value={13}>1300</option>
          <option value={14}>1400</option>
          <option value={15}>1500</option>
          <option value={16}>1600</option>
          <option value={17}>1700</option>
          <option value={18}>1800</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
