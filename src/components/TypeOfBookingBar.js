import * as React from "react";
import { Box, InputLabel, FormControl, NativeSelect } from "@mui/material";

export default function TypeOfBookingBar() {
  return (
    <Box sx={{ minWidth: 120, m: 8, marginBottom: 30, marginTop: 0 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Type Of Booking
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "Type Of Booking",
            id: "uncontrolled-native"
          }}
        >
          <option value={1}>Room</option>
          <option value={2}>StudySpots</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
