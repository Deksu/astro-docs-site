import { config, fields, collection, singleton } from '@keystatic/core';

const cloudProject = process.env.KEYSTATIC_CLOUD_PROJECT;
const branchPrefix = process.env.KEYSTATIC_BRANCH_PREFIX;

const storage = cloudProject
  ? {
      kind: 'cloud' as const,
      ...(branchPrefix ? { branchPrefix } : {}),
    }
  : { kind: 'local' as const };

export default config({
    storage,
    ...(cloudProject ? { cloud: { project: cloudProject } } : {}),
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
                color: fields.object(
                    {
                        background: fields.array(
                            fields.object({
                                name: fields.text({ label: 'Name' }),
                                token: fields.text({ label: 'Token' }),
                                value: fields.text({ label: 'Value' }),
                                usage: fields.text({ label: 'Usage' }),
                            }),
                            { label: 'Background' }
                        ),
                        border: fields.array(
                            fields.object({
                                name: fields.text({ label: 'Name' }),
                                token: fields.text({ label: 'Token' }),
                                value: fields.text({ label: 'Value' }),
                                usage: fields.text({ label: 'Usage' }),
                            }),
                            { label: 'Border' }
                        ),
                        foreground: fields.array(
                            fields.object({
                                name: fields.text({ label: 'Name' }),
                                token: fields.text({ label: 'Token' }),
                                value: fields.text({ label: 'Value' }),
                                usage: fields.text({ label: 'Usage' }),
                            }),
                            { label: 'Foreground' }
                        ),
                    },
                    { label: 'Color' }
                ),
                typography: fields.object(
                    {
                        families: fields.array(
                            fields.object({
                                name: fields.text({ label: 'Name' }),
                                token: fields.text({ label: 'Token' }),
                                value: fields.text({ label: 'Value' }),
                                usage: fields.text({ label: 'Usage' }),
                            }),
                            { label: 'Families' }
                        ),
                        sizes: fields.array(
                            fields.object({
                                name: fields.text({ label: 'Name' }),
                                token: fields.text({ label: 'Token' }),
                                value: fields.text({ label: 'Value' }),
                                px: fields.text({ label: 'PX' }),
                            }),
                            { label: 'Sizes' }
                        ),
                        weights: fields.array(
                            fields.object({
                                name: fields.text({ label: 'Name' }),
                                token: fields.text({ label: 'Token' }),
                                value: fields.text({ label: 'Value' }),
                            }),
                            { label: 'Weights' }
                        ),
                    },
                    { label: 'Typography' }
                ),
            },
        }),
    },
});
