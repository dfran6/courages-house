export function lerp(start, end, t) {
  return start + (end - start) * t;
}

export function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

export function rangeProgress(value, start, end) {
  if (value <= start) return 0;
  if (value >= end) return 1;

  return (value - start) / (end - start);
}