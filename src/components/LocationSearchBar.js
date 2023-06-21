import * as React from "react";
import { Box, InputLabel, FormControl, NativeSelect } from '@mui/material';

export default function LocationSearchBar() {
  return (
    <Box sx={{ minWidth: 120, m: 8, marginBottom: 30, marginTop: -5 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Location
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "Location",
            id: "uncontrolled-native"
          }}
        >
          <option value={1}>Location1</option>
          <option value={2}>Location2</option>
          <option value={3}>Location3</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}