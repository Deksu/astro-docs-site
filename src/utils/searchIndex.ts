export type SearchItem = {
  title: string;
  href: string;
  section: string;
  sectionLabel: string;
};

type DocEntry = {
  slug: string;
  title: string;
  section: string;
};

export function buildSearchIndex(
  docs: DocEntry[],
  sections: Record<string, { label: string }>
): SearchItem[] {
  return docs.map((doc) => ({
    title: doc.title,
    href: `/docs/${doc.slug}`,
    section: doc.section,
    sectionLabel: sections[doc.section]?.label || doc.section
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
