// Event adding, searching, deleting, joining
import { supabase } from "../../configuration/supabaseClient.js";

/* helper functions */

function getDaysDiff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

// adding event
export const addEvent = async (
  name,
  expiryDate,
  startDate,
  venue,
  startTime,
  endTime,
  duration,
  persons,
  description,
  creator
) => {
  // Firstly, data validation.

  // all data cannot be empty
  if (
    !name ||
    !expiryDate ||
    !startDate ||
    !venue ||
    !startTime ||
    !endTime ||
    !duration || // N.A. for special event like year long competition.
    // !persons || // nullable
    // !description || // nullable
    !creator
  ) {
    throw new Error("Missing inputs");
  }

  // start date should be after today's date by at least 3 days.
  const today = new Date();
  if (getDaysDiff(today, startDate) < -3) {
    throw new Error(
      "The event official start date has to be at least 3 days after today's date."
    );
  }

  // expiry date should be after start date
  if (getDaysDiff(startDate, expiryDate) < 0) {
    throw new Error("The event's start date cannot be after its end date.");
  }

  // Note: startTime, endTime, duration, persons are String.
  // description helper text (for view) should just be brief, < 500 characters
  if (description.length > 100) {
    throw new Error("Maximum length for description exceeded.");
  }

  // data passed, send to backend for creation
  try {
    const { data, error } = await supabase
      .from("Event")
      .insert({
        ExpiryDate: expiryDate,
        StartingDate: startDate,
        Venue: venue,
        StartTime: startTime,
        Duration: duration,
        EndTime: endTime,
        name: name,
        Creator: creator,
        EventPersonnel: persons ?? "Undisclosed",
        Description: description ?? "This event has no description.",
      })
      .select(); // seelct some only
    if (data) {
      return data;
    } else if (error) {
      throw error;
    } else {
      throw new Error("Something went wrong: empty event?");
    }
  } catch (error) {
    throw error;
  }
};

// joining
export const joinEvent = async (user_id, event_id, user_type) => {
  if (!user_id || !event_id) {
    throw new Error("Missing inputs");
  } else if (!user_type) {
    throw new Error(
      "Sorry, participant type not recognised, it is probably our problem. Please try again."
    );
  }

  try {
    const { data, error } = await supabase
      .from("EventParticipants")
      .insert({
        user_id: user_id,
        event_id: event_id,
        UserType: user_type,
      })
      .select(`Event(Venue, StartTime, Duration, StartingDate)`);

    if (error) {
      throw error;
    } else if (data) {
      return data;
    } else {
      throw new Error("Something unusual occured, please try again!");
    }
  } catch (error) {
    throw error;
  }
};

// fetching events to display on Available Events Page
export const fetchEvents = async (i) => {
  // fetch from a range of 20
  try {
    const { data, error } = await supabase
      .from("Event")
      .select() // select some only
      .range(i, i + 19);

    if (error) {
      throw error;
    } else if (data) {
      console.log(data);
      return data;
    } else {
      throw new Error("Something unusual occured, please try again!");
    }
  } catch (error) {
    throw error;
  }
};

// staff deleting the entire event
export const deleteEvent = async (event_id, event_name, staff_id) => {
  if (!event_id) {
    throw new Error("Missing event ID");
  } else if (!staff_id) {
    throw new Error("Who are you?");
  }

  try {
    const { data, error } = await supabase
      .from("Event")
      .delete()
      .eq("id", event_id);

    if (error) {
      throw error;
    } else if (data) {
      return data;
    } else {
      throw new Error("Something weird occurs... Please try again");
    }
  } catch (error) {
    throw error;
  }
};

// students unjoining an event
