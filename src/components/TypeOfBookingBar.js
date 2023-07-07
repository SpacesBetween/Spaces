import * as React from "react";
import { Box, InputLabel, FormControl, NativeSelect } from "@mui/material";

export default function TypeOfBookingBar({ onSelect }) {
  const [type, setType] = React.useState("");

  onSelect(type);

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
            id: "uncontrolled-native",
          }}
          onChange={e => setType(e)} // Call func onSelect when a menu is selected
        >
          <option value={1}>Room</option>
          <option value={2}>StudySpots</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
