export type SearchItem = {
  title: string;
  href: string;
  section: string;
  sectionLabel: string;
};

type DocEntry = {
  slug: string;
  entry: {
    title: string;
    section: string;
  };
};

export function buildSearchIndex(
  docs: DocEntry[],
  sections: Record<string, { label: string }>
): SearchItem[] {
  return docs.map((doc) => ({
    title: doc.entry.title,
    href: `/docs/${doc.slug}`,
    section: doc.entry.section,
    sectionLabel: sections[doc.entry.section]?.label || doc.entry.section
  }));
}

export function normalizeSearchItems(
  items: SearchItem[],
  sections: Record<string, { label: string }>
): SearchItem[] {
  return items.map((item) => ({
    ...item,
    sectionLabel: item.sectionLabel || sections[item.section]?.label || item.section
  }));
}
