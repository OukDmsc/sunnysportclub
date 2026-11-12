// Stadium opening hours and hourly prices. Change these values to update the
// booking page — no other code changes are needed.
window.SUNNY_STADIUM = {
  currency: "USD",
  open: "07:30",
  close: "20:00",
  slotMinutes: 30,
  minMinutes: 60,
  maxMinutes: 180,
  advanceDays: 60,
  weekday: {
    label: "Monday–Friday",
    rates: [
      { from: "07:30", to: "17:00", price: 10 },
      { from: "17:00", to: "20:00", price: 15 },
    ],
  },
  weekend: {
    label: "Saturday–Sunday",
    rates: [
      { from: "07:30", to: "17:00", price: 15 },
      { from: "17:00", to: "20:00", price: 20 },
    ],
  },
};
