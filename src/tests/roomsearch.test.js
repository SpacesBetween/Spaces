import {
  fetchBookingHistory,
  roomSearchStudy,
  handleNewBooking,
  handleCancellation,
} from "../model/room/roomFunc.js";
import { badUser, user } from "./roomSearchTestingContext.js";

/* Booking records */

// test 1: user with records
test("User with records", async () => {
  await expect(fetchBookingHistory(user)).resolves.toHaveLength(1);
});

// test 2: no user ( = null)
test("Null user", async () => {
  await expect(fetchBookingHistory(null)).resolves.toThrow(
    /^Please login$/
  );
});

/* Searching rooms to study */

// test 1: successful search
test("RoomSearch function", async () => {
  await expect(
    roomSearchStudy({
      location: "AS",
      date: new Date(),
      time: "8",
      durationRaw: "2 hr",
    })
  ).resolves.toContain("AS1-0201");
});

// test 2: fully booked
test("RoomSearch unsuccess: fully booked", async () => {
  await expect(
    roomSearchStudy({
      location: "NAK-AUD",
      date: new Date("2023-07-21"),
      time: "8",
      durationRaw: "2 hr",
    })
  ).resolves.toHaveLength(0);
});

// test 3: missing input
test("Roomsearch missing input", async () => {
  await expect(
    roomSearchStudy({ location: "COM", date: new Date(), time: "10" })
  ).resolves.toThrow(/^Missing inputs$/);
});

/* Make new booking */

// test 1: successful booking
test("Successful booking", async () => {
  await expect(
    handleNewBooking(
      user,
      "COM3-01-20",
      new Date("2023-07-31"),
      "8",
      "2 hr",
      true
    )
  ).resolves.toBeTruthy();
});

// test 2: booking past dates

test("Retrospective booking", async () => {
  await expect(
    handleNewBooking(
      user,
      "COM3-01-20",
      new Date("2023-01-27"),
      "8",
      "2 hr",
      true
    )
  ).resolves.toThrow(/^Illegal move: booking retrospective dates.$/);
});

/* Cancel a booking */

// test 1: successful cancellation
test("Successful booking cancellation", async () => {
  await expect(handleCancellation("107", user)).resolves.toBe(
    "Successfully deleted"
  );
});

// test 2: oter user trying to cancel another user's booking
test("Booking attack", async () => {
  await expect(handleCancellation("79", badUser)).resolves.toThrow();
});
