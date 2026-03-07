import { config, fields, collection, singleton } from '@keystatic/core';

const cloudProject =
  import.meta.env.PUBLIC_KEYSTATIC_CLOUD_PROJECT ||
  (typeof process !== 'undefined' ? process.env.KEYSTATIC_CLOUD_PROJECT : undefined);
const branchPrefix =
  import.meta.env.PUBLIC_KEYSTATIC_BRANCH_PREFIX ||
  (typeof process !== 'undefined' ? process.env.KEYSTATIC_BRANCH_PREFIX : undefined);

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
            format: { data: 'json' },
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
                            {
                                label: 'Background',
                                itemLabel: (props) => props.fields.name.value || 'Background token',
                            }
                        ),
                        border: fields.array(
                            fields.object({
                                name: fields.text({ label: 'Name' }),
                                token: fields.text({ label: 'Token' }),
                                value: fields.text({ label: 'Value' }),
                                usage: fields.text({ label: 'Usage' }),
                            }),
                            {
                                label: 'Border',
                                itemLabel: (props) => props.fields.name.value || 'Border token',
                            }
                        ),
                        foreground: fields.array(
                            fields.object({
                                name: fields.text({ label: 'Name' }),
                                token: fields.text({ label: 'Token' }),
                                value: fields.text({ label: 'Value' }),
                                usage: fields.text({ label: 'Usage' }),
                            }),
                            {
                                label: 'Foreground',
                                itemLabel: (props) => props.fields.name.value || 'Foreground token',
                            }
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
                            {
                                label: 'Families',
                                itemLabel: (props) => props.fields.name.value || 'Family',
                            }
                        ),
                        sizes: fields.array(
                            fields.object({
                                name: fields.text({ label: 'Name' }),
                                token: fields.text({ label: 'Token' }),
                                value: fields.text({ label: 'Value' }),
                                px: fields.text({ label: 'PX' }),
                            }),
                            {
                                label: 'Sizes',
                                itemLabel: (props) => props.fields.name.value || 'Size',
                            }
                        ),
                        weights: fields.array(
                            fields.object({
                                name: fields.text({ label: 'Name' }),
                                token: fields.text({ label: 'Token' }),
                                value: fields.text({ label: 'Value' }),
                            }),
                            {
                                label: 'Weights',
                                itemLabel: (props) => props.fields.name.value || 'Weight',
                            }
                        ),
                    },
                    { label: 'Typography' }
                ),
            },
        }),
    },
});
