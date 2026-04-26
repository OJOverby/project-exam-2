export function normalizeDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getDatesInRange(startDate, endDate) {
  const dates = [];
  const current = new Date(startDate);
  const last = new Date(endDate);

  current.setHours(0, 0, 0, 0);
  last.setHours(0, 0, 0, 0);

  while (current <= last) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

export function getExcludedDates(bookings = []) {
  return bookings.flatMap((booking) =>
    getDatesInRange(new Date(booking.dateFrom), new Date(booking.dateTo))
  );
}

export function isRangeAvailable(start, end, excludedDates = []) {
  if (!start || !end) return false;

  const selectedRange = getDatesInRange(start, end);

  return !selectedRange.some((selectedDate) =>
    excludedDates.some(
      (blockedDate) =>
        normalizeDate(blockedDate).getTime() ===
        normalizeDate(selectedDate).getTime()
    )
  );
}