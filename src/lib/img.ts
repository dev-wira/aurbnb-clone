// Tag + lock based placeholder photo (returns a real, thematically-relevant photo).
// `lock` pins a specific photo so it stays consistent across renders/reloads.
export function imgUrl(tag: string, lock: number, w = 900, h = 700) {
  return `https://loremflickr.com/${w}/${h}/${tag}?lock=${lock}`;
}

// Fallback if the tagged service ever fails to load — keeps a visual, never a broken icon.
export function imgFallback(lock: number, w = 900, h = 700) {
  return `https://picsum.photos/seed/${lock}/${w}/${h}`;
}
