export function formatRating(rating) {
  return rating?.replace(/\.0$/, "");
}

export function formatTime(duration) {
  if (duration) {
    const min = parseInt(duration.replace(/\D/g, ""), 10);
    return `${Math.floor(min / 60)}h ${Math.floor(min % 60)}min`;
  }
}

export function formatList(list) {
  if (list) {
    return list?.split(",");
  }
}
