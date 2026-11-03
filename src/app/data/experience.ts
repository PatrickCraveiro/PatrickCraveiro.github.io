import { Experience } from './models';

export const EXPERIENCE: Experience[] = [
  {
    company: 'Medgrupo',
    badge: 'Atual',
    summary: 'Desenvolvedor Front-End. Ferramentas que eliminam a dependência do time de desenvolvimento.',
    highlights: [
      {
        title: 'Construtor de sites de venda',
        description:
          'Sistema administrativo para clientes criarem sozinhos seus sites de inscrição e venda de cursos.',
      },
      {
        title: 'Editor de apostilas digitais',
        description: 'Professores produzem apostilas digitais sem depender do time de desenvolvimento.',
      },
    ],
    stack: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  {
    company: 'Unhide School',
    badge: 'Atual · 2 anos',
    summary: 'Desenvolvedor Front-End em uma plataforma de cursos de design digital e UX.',
    highlights: [
      {
        title: 'Área do aluno',
        description:
          'Manutenção e evolução do site onde os alunos assistem às aulas e acessam os conteúdos.',
      },
      {
        title: 'Área administrativa',
        description:
          'Painel para cadastrar novas aulas, conteúdos e preços, consumindo a API em GraphQL.',
      },
    ],
    stack: ['Angular', 'TypeScript', 'GraphQL'],
  },
];
