import { describe, it, expect } from 'vitest';
import { buildSearchIndex, normalizeSearchItems } from '../../src/utils/searchIndex';

describe('search index utilities', () => {
  it('buildSearchIndex maps docs with section labels', () => {
    const docs = [
      { slug: 'welcome', entry: { title: 'Welcome', section: 'getting-started' } }
    ];
    const sections = { 'getting-started': { label: 'Getting Started' } };
    const result = buildSearchIndex(docs, sections);
    expect(result[0].sectionLabel).toBe('Getting Started');
    expect(result[0].href).toBe('/docs/welcome');
  });

  it('normalizeSearchItems fills missing sectionLabel', () => {
    const items = [
      { title: 'Colors', href: '/foundations/colors', section: 'foundations', sectionLabel: '' }
    ];
    const sections = { foundations: { label: 'Foundations' } };
    const result = normalizeSearchItems(items, sections);
    expect(result[0].sectionLabel).toBe('Foundations');
  });
});
