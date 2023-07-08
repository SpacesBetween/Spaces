import * as React from "react";
import {
  Box,
  InputLabel,
  FormControl,
  NativeSelect,
  Typography
} from "@mui/material";

export default function DurationSearchBar({ onSelect }) {
  return (
    <Box sx={{ minWidth: 120, m: 30, marginTop: -5, marginLeft: 8 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Duration
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: "Duration",
            id: "uncontrolled-native"
          }}
          onChange={e => onSelect(e)}
        >
          <option value={0.5}>0.5 hr</option>
          <option value={1}>1 hr</option>
          <option value={1.5}>1.5 hr</option>
          <option value={2}>2 hr</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
