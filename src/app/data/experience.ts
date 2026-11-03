import { Experience } from './models';

export const EXPERIENCE: Experience[] = [
  {
    company: 'Medgrupo',
    badge: 'Atual · 8 anos',
    site: 'https://medycorp.com.br/inscricao-medgrupo/medcurso-e-med/inicio',
    summary:
      'Desenvolvedor Front-End na jornada de inscrição e venda dos cursos: do site em que o aluno se matricula ao painel em que a equipe comercial configura tudo sem depender de desenvolvimento. Também atuo no back-end, com APIs em Node.js.',
    highlights: [
      {
        title: 'Site de inscrição e compra',
        description:
          'Fluxo completo de matrícula: login ou cadastro, escolha de pacote e turma, cupom e pagamento por Pix, boleto ou cartão. A ordem de venda é acompanhada em tempo real e cada site é montado pelo painel, sem deploy.',
        stack: ['Angular', 'Ionic', 'NGXS', 'SignalR', 'Storybook'],
      },
      {
        title: 'Painel de vendas',
        description:
          'Microfrontend em que a equipe comercial cadastra produtos, pacotes, preços por ano, formas de pagamento, parcelamento, cupons e contratos, e cria os próprios sites de inscrição.',
        stack: ['Angular', 'single-spa', 'Angular Material'],
      },
      {
        title: 'API de configuração dos sites',
        description:
          'Guarda tema, textos e regras de cada site de inscrição. Os textos das telas são marcados com metadados e sincronizados com o painel, então qualquer frase pode ser editada sem mexer no código.',
        stack: ['Node.js', 'Express', 'MongoDB'],
      },
      {
        title: 'API de integrações e monitoramento',
        description:
          'Conecta os sistemas de inscrição ao Slack, ao CRM, ao DocuSign e ao Kanbanize: alerta falhas de matrícula, registra cada etapa do funil no CRM, concilia contratos assinados e automatiza rotinas do time.',
        stack: ['Node.js', 'TypeScript', 'MongoDB', 'SQL Server', 'AWS S3'],
      },
    ],
  },
  {
    company: 'Unhide School',
    badge: 'Atual · 2 anos',
    site: 'https://unhideschool.com/',
    summary:
      'Desenvolvedor Front-End em uma plataforma de cursos de arte digital: área do aluno, área para empresas, biblioteca de componentes e checkout.',
    highlights: [
      {
        title: 'Plataforma de cursos',
        description:
          'Player com progresso das aulas, trilhas e carreiras, Meus Cursos, assinaturas e fórum, além do painel para criar e editar cursos e aulas. Interface em português e inglês.',
        stack: ['Angular', 'NGXS', 'GraphQL', 'Nx'],
      },
      {
        title: 'Workspaces para empresas',
        description:
          'Área B2B em que empresas convidam colaboradores, atribuem cargos ligados a trilhas de carreira e acompanham o progresso do time em um dashboard.',
        stack: ['Angular', 'NGXS', 'GraphQL'],
      },
      {
        title: 'Biblioteca de Web Components',
        description:
          'Design system da plataforma em Stencil, documentado no Storybook. Trabalhei em mais de 90 componentes, de banners e cards a seções inteiras das páginas.',
        stack: ['Stencil', 'Web Components', 'Storybook'],
      },
      {
        title: 'Checkout de assinaturas',
        description:
          'Microsite de pagamento em que implementei o Pix com tela de confirmação, campanhas com vários cupons ativos ao mesmo tempo (como a Black Friday), regras de parcelamento e eventos de analytics.',
        stack: ['Angular', 'GraphQL'],
      },
    ],
  },
  {
    company: 'Lightfarm Studios',
    badge: 'Freelance',
    site: 'https://lightfarm.com.br/',
    summary:
      'Ajudei a construir o site de um estúdio de animação 2D e 3D premiado: front-end em Next.js, conteúdo no Strapi e biblioteca de componentes em Stencil.',
    highlights: [
      {
        title: 'Páginas montadas pelo CMS',
        description:
          'Cada página é composta no Strapi a partir de módulos (hero, vídeo, grid de mídia, equipe, vagas, prêmios) e o front renderiza cada bloco pelo seu registro. O estúdio publica conteúdo sem depender de desenvolvimento.',
        stack: ['Next.js', 'React', 'Strapi'],
      },
      {
        title: 'Portfólio de trabalhos',
        description:
          'Página de cada trabalho do estúdio com galeria, prêmios e sugestões de outros trabalhos, além de busca e filtros de serviços com seleção múltipla definidos pelo admin.',
        stack: ['Next.js', 'React', 'TypeScript'],
      },
      {
        title: 'Componentes em Stencil',
        description:
          'Biblioteca de Web Components do site, documentada no Storybook: menu, cabeçalho, galerias e modais, com ajustes de layout para mobile.',
        stack: ['Stencil', 'Web Components', 'Storybook'],
      },
      {
        title: 'SEO e analytics',
        description:
          'Renderização no servidor, metadados de SEO e Open Graph em todas as páginas e eventos de analytics via Google Tag Manager.',
        stack: ['Next.js', 'SSR', 'Google Tag Manager'],
      },
    ],
  },
];
