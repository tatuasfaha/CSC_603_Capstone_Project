import { readFileSync } from "node:fs";

export const sources = JSON.parse(
  readFileSync(
    new URL("../data/sources.json", import.meta.url),
    "utf8"
  )
);

export const sourceById = new Map(
  sources.map(source => [source.id, source])
);

export function publicSources(ids) {
  return [...new Set(ids)]
    .filter(id => sourceById.has(id))
    .map(id => {
      const { title, url, reviewed } = sourceById.get(id);

      return {
        id,
        title,
        url,
        reviewed
      };
    });
}

export function demoLookup(text) {
  const lower = text.toLowerCase();

  // Keyword matching is only for the offline preview.
  return sources
    .map(source => ({
      ...source,

      score: source.keywords.filter(keyword =>
        lower.includes(keyword)
      ).length
    }))
    .filter(source => source.score > 0)
    .sort((first, second) => second.score - first.score)
    .slice(0, 2);
}