import { supabase } from "../../configuration/supabaseClient.js";

/* Booking Records */
export const fetchBookingHistory = async (user) => {
  if (!user) {
    return "Please login.";
  }

  try {
    const { data, error } = await supabase
      .from("booking")
      .select()
      .eq("user_email", user.email);

    if (error) {
      throw error;
    } else {
      // will see how view want to format the data
      return data;
    }
  } catch (error) {
    // will check how view want to format error messages
    return error.message;
  }
};

// handle booking cancellation
export const handleCancellation = async (bookingId, user) => {
  if (!user) {
    return "Please login.";
  }

  // Perform cancellation logic for the specified bookingId

  // console.log(`Cancellation requested for booking ID: ${bookingId}`);

  // Update the 'bookings' state to reflect the cancellation
  // Example:
  // const updatedBookings = cancelBooking(bookingId);
  // setBookings(updatedBookings);

  try {
    const { error } = await supabase
      .from("booking")
      .delete()
      .eq("booking_id", bookingId);

    if (error) {
      throw error;
    } else {
      // will see how view want to format the result
      return "Successfully deleted";
    }
  } catch (error) {
    return error.message;
  }
};

//handle new booking
export const handleNewBooking = async (
  user,
  venue_id,
  date,
  selectedTime,
  duration,
  type
) => {
  // Logic to handle the new booking
  // Redirect the user to the new booking page or show a modal, etc.
  if (!user) {
    return "Please login.";
  }

  // Make a Date object
  const bookedDate = new Date(date);

  // handle day conversion
  const days = [
    "Sunday", // dummy
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[bookedDate.getDay()];

  // handle start time conversion
  let timeString = selectedTime;
  const hours = timeString[0] + timeString[1];
  const startTime = bookedDate.setHours(hours);

  // handle end time conversion
  const endTime = bookedDate.setTime(startTime + duration * 3600000);

  try {
    const { data, error } = await supabase
      .from("booking")
      .insert({
        user_email: user.email,
        user_id : user.id,
        venue_id: venue_id,
        day: day,
        duration: duration,
        bookingTimeRange: [startTime, endTime],
        type: type,
      })
      .select();

    if (error) {
      throw error;
    } else {
      // will see how view want to format the result
      return data; // vital (booking_id needs to be returned)
    }
  } catch (error) {
    return error.message;
  }
};

/* Room searching */

export const roomSearchStudy = async ({
  location,
  date,
  time,
  duration,
}) => {
  // helper function for outputing endtime in Number
  function timeConvertor(duration, timeString) {
    const number = Number(duration);
    const timeNumber = Number(timeString);

    if (duration % 1 === 0) {
      return timeNumber + number * 100;
    } else {
      const working = (number - 0.5) * 100;
      return timeNumber + 30 + working;
    }
  }

  // array of free rooms
  let freeRoomArray = [];

  const searchingDate = new Date(date);
  // handle day conversion
  const days = [
    "Sunday", // dummy
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // the day of the week
  const day = days[searchingDate.getDay()];
  // the start time (type timestamp) of the desired booking
  const startTime = searchingDate.setHours(time[0] + time[1]);
  // the end time (type timestamp) of the desired booking
  const endTime = searchingDate.setTime(startTime + duration * 3600000);
  // the string number representation of end time
  const endTimeString = timeConvertor(duration, time);

  // frist, fetch free rooms with the official lessons
  try {
    const { data: venueData, error } = await supabase
      .from("venueLesson")
      .select(`venueName, timetableAvailability, venues(totalCapacity)`)
      .like("venueName", location + "%") // match location name
      .eq("day", day) // match day of the week

    if (error) {
      throw error;
    } else {
      // filter out venue whose lesson has a start time before the endTime of the booking
      const noLesson = venueData.filter((venueLesson) => {
        if (!venueLesson.timetableAvailability) {
          return true;
        } else {
          for (const lessonTime in venueLesson.timetableAvailability) {
            if (lessonTime < endTimeString && lessonTime >= time) {
              return false;
            }
            continue;
          }

          return true;
        }
      });
      freeRoomArray = noLesson;
    }
  } catch (error) {
    return error.message;
  }

  // then, check against all bookings of that set of rooms

  try {
    for (const room in freeRoomArray) {
      const { data, error } = await supabase
        .from("booking")
        .select("venue_id, type")
        .eq("venue_id", freeRoomArray[room].venueName)
        .overlaps("bookingTimeRange", [startTime, endTime]);

      if (error) {
        throw error;
      } else {
        if (data.length !== 0) {
          freeRoomArray[room].bookings = data;
        }
      }
    }
  } catch (error) {
    return error.message;
  }

  // check if the room is booked whole room or the room has max bookings at that time period
  freeRoomArray.filter((room) => {
    room.bookings?.filter(
      (booking) => booking.type || booking.length >= room.venues[room.venueName]
    );
    return room.bookings ? true : false;
  });

  // format the array to just string of venue names
  freeRoomArray = freeRoomArray.map(roomObj => roomObj.venueName);

  return freeRoomArray;
};
