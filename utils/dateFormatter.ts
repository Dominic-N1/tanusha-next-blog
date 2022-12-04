export default new Intl.DateTimeFormat(undefined, {
  timeZone: "UTC",
  month: "short",
  year: "numeric",
  day: "numeric",
});

export const dateRu = (date: string): string => {
  return new Intl.DateTimeFormat("ru-RU", {
    timeZone: "UTC",
    month: "short",
    year: "numeric",
    day: "numeric",
  }).format(new Date(date));
};
