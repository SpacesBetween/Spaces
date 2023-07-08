import {
  roomSearchStudy,
  handleNewBooking,
} from "../model/room/roomFunc.js";
import { handleLogin } from "../model/auth/auth.js";
import { supabase } from "../configuration/supabaseClient.js";

/*test("RoomSearch with no booking records", async () => {
  await expect(
    roomSearchStudy({
      location: "AS1",
      date: new Date(),
      time: "8",
      durationRaw: "2 hr",
    })
  ).resolves.toContain("AS1-0201");
});*/

const {
  data: { user },
} = await supabase.auth.signInWithPassword({
  email: "e0968931@u.nus.edu",
  password: "ncsfkjsbf99",
});

handleNewBooking(
  user,
  "COM3-01-20",
  new Date("2023-01-27"),
  "8",
  "2 hr",
  true
).then((msg) => console.log(msg));
