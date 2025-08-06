export function toKebabCase(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove non-alphanumeric characters except space
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}
