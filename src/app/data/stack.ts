import { StackGroup, Tech } from './models';

const tech = (name: string, slug: string): Tech => ({ name, icon: `icons/${slug}.svg` });

export const STACK: StackGroup[] = [
  {
    label: 'Front-end',
    items: [
      tech('Angular', 'angular'),
      tech('TypeScript', 'typescript'),
      tech('React', 'react'),
      tech('Vue.js', 'vuedotjs'),
      tech('JavaScript', 'javascript'),
      tech('HTML', 'html5'),
      tech('CSS', 'css'),
      tech('SCSS', 'sass'),
    ],
  },
  {
    label: 'Back-end',
    items: [
      tech('Node.js', 'nodedotjs'),
      tech('MongoDB', 'mongodb'),
      tech('GraphQL', 'graphql'),
      tech('APIs REST', 'openapiinitiative'),
    ],
  },
  {
    label: 'Ferramentas',
    items: [tech('Git', 'git'), tech('GitHub', 'github'), tech('Claude Code', 'claude')],
  },
];
