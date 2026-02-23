import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        docs: collection({
            label: 'Documentation',
            slugField: 'title',
            path: 'src/content/docs/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                section: fields.select({
                    label: 'Section',
                    options: [
                        { label: 'Getting Started', value: 'getting-started' },
                        { label: 'Foundations', value: 'foundations' },
                        { label: 'Components', value: 'components' },
                    ],
                    defaultValue: 'getting-started',
                }),
                order: fields.integer({ label: 'Order', defaultValue: 0 }),
                content: fields.markdoc({
                    label: 'Content',
                }),
            },
        }),
    },
    singletons: {
        tokens: singleton({
            label: 'Design Tokens',
            path: 'src/data/tokens',
            schema: {
                colors: fields.object(
                    {
                        brand: fields.text({ label: 'Brand Color', defaultValue: '#000000' }),
                        text: fields.text({ label: 'Text Color', defaultValue: '#000000' }),
                        background: fields.text({ label: 'Background Color', defaultValue: '#ffffff' }),
                    },
                    { label: 'Colors' }
                ),
            },
        }),
    },
});
