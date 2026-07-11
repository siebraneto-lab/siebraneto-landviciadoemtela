import { useEffect, useState } from "react";

const STORAGE_KEY = "nr_offer_deadline";
const DURATION_MS = 30 * 60 * 1000; // 30 minutes

function getDeadline() {
  try {
    const stored = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
    if (stored && stored > Date.now()) return stored;
  } catch (e) {
    // localStorage unavailable, fallback below
  }
  const fresh = Date.now() + DURATION_MS;
  try {
    localStorage.setItem(STORAGE_KEY, String(fresh));
  } catch (e) {
    // ignore
  }
  return fresh;
}

export function useCountdown() {
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, getDeadline() - Date.now())
  );

  useEffect(() => {
    const id = setInterval(() => {
      let deadline;
      try {
        deadline = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
      } catch (e) {
        deadline = 0;
      }
      let rem = deadline - Date.now();
      if (rem <= 0) {
        // evergreen: restart the offer window
        deadline = Date.now() + DURATION_MS;
        try {
          localStorage.setItem(STORAGE_KEY, String(deadline));
        } catch (e) {
          // ignore
        }
        rem = deadline - Date.now();
      }
      setRemaining(rem);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const totalSeconds = Math.max(0, Math.floor(remaining / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return { minutes, seconds };
}
