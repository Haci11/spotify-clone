export function formatTime(ms) {
  const seconds = ms / 1000;
  const rest = (seconds % 60).toFixed(0);
  const minutes = Math.floor(seconds / 60);
  const restSeconds = rest < 10 ? `0${rest}` : rest;
  return `${minutes}:${restSeconds}`;
}
