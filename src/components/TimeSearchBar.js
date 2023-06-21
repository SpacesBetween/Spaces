import * as React from "react";
import {
  Box,
  InputLabel,
  FormControl,
  NativeSelect,
  Typography,
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
            id: "uncontrolled-native",
          }}
        >
          <option value={10}>Now</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
