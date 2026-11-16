import {
  readFileSync,
  writeFileSync,
  mkdirSync
} from "node:fs";

const sources = JSON.parse(
  readFileSync(
    new URL("../data/sources.json", import.meta.url),
    "utf8"
  )
);

const directory = new URL(
  "../data/knowledge/",
  import.meta.url
);

mkdirSync(directory, { recursive: true });

for (const source of sources) {
  // Use the same information for the preview and retrieval notes.
  const content = [
    `# ${source.id} ${source.title}`,
    "",
    `Source: ${source.url}`,
    `Source checked: ${source.reviewed}`,
    "Type: Short AI-drafted paraphrase. Team review pending.",
    "",
    source.summary,
    ""
  ].join("\n");

  writeFileSync(
    new URL(source.file, directory),
    content
  );
}

console.log(`Created ${sources.length} reference notes.`);