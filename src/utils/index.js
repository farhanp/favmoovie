export function formatRating(rating) {
  return rating?.replace(/\.0$/, "");
}

export function formatTime(duration) {
  if (duration) {
    const minutes = duration.split(" ")[0];
    return `${Math.floor(minutes / 60)}h ${Math.floor(minutes % 60)}min`;
  }
}

export function formatList(list) {
  if (list) {
    return list?.split(",");
  }
}
