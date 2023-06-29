import { supabase } from "../../configuration/supabaseClient";

// fetching booking history
export const fetchBookingHistory = async (user) => {
  if (!user) {
    return "Please login.";
  }

  try {
    const { data, error } = await supabase
      .from("booking")
      .select()
      .eq("user_id", user.id);

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
  startTime,
  duration,
  endTime,
  type
) => {
  // Logic to handle the new booking
  // Redirect the user to the new booking page or show a modal, etc.
  if (!user) {
    return "Please login.";
  }

  const days = [
    "Sunday", // dummy 
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[date.getDay()];

  try {
    const { data, error } = await supabase
      .from("booking")
      .insert({
        venue_id: venue_id,
        date: date,
        day: day,
        startTime: startTime,
        duration: duration,
        endTime: endTime,
        type: type,
      })
      .select();

    if (error) {
      throw error;
    } else {
      // will see how view want to format the result
      return data.id;
    }
  } catch (error) {}
};
