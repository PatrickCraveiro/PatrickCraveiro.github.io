import { Project } from './models';

/**
 * Projetos exibidos na seção "Projetos pessoais", na ordem do array.
 *
 * Para adicionar um GIF/vídeo, coloque o arquivo em public/projects/ e preencha `media`.
 * Para o link de produção, preencha `liveUrl`.
 */
export const PROJECTS: Project[] = [
  {
    title: 'Emulador',
    description:
      'Launcher de jogos retrô com visual de console portátil de tela dupla. Lê as ROMs de uma pasta, mostra capas animadas e abre cada jogo no emulador certo — por teclado, mouse ou controle.',
    stack: ['Electron', 'React', 'TypeScript'],
    repoUrl: 'https://github.com/PatrickCraveiro/Emulador',
    media: {
      type: 'video',
      src: 'projects/emulador.mp4',
      poster: 'projects/emulador.jpg',
      alt: 'Emulador em uso: navegando entre plataformas e jogos, com a capa animada de cada jogo na tela de cima',
      fit: 'contain',
    },
  },
  {
    title: 'Roblox Zombies',
    description:
      'Sobrevivência cooperativa em primeira pessoa: zumbis em ondas cada vez mais difíceis, pontos por acerto e armas compradas na parede. Lobby e fases são montados por código.',
    stack: ['Luau', 'Roblox', 'Rojo'],
    repoUrl: 'https://github.com/PatrickCraveiro/roblox-zombie',
    media: {
      type: 'video',
      src: 'projects/roblox-zombies.mp4',
      poster: 'projects/roblox-zombies.jpg',
      alt: 'Partida no supermercado: o jogador atira em zumbis, ganha pontos e conclui a rodada',
    },
  },
  {
    title: 'Historicar',
    description:
      'Oficinas registram o histórico de manutenção de cada veículo e geram um QR code fixo para o para-brisa. Quem escaneia vê o histórico atualizado e baixa um PDF.',
    stack: ['Next.js', 'MongoDB', 'TypeScript'],
    repoUrl: 'https://github.com/PatrickCraveiro/historicar',
    liveUrl: 'https://historicar.vercel.app',
    media: {
      type: 'video',
      src: 'projects/historicar.mp4',
      poster: 'projects/historicar.jpg',
      alt: 'Painel do Historicar: cadastro de um veículo, registro de um serviço e geração do adesivo com QR code',
    },
  },
  {
    title: 'TCC',
    description:
      'Trabalho de conclusão do curso de Ciência da Computação sobre arquiteturas de software, com foco no padrão MVC: uma API em Node.js e um front-end separado.',
    stack: ['JavaScript', 'Node.js'],
    repoUrl: 'https://github.com/PatrickCraveiro/TCC',
        media: {
      type: 'video',
      src: 'projects/tcc.mp4',
      poster: 'projects/tcc.png',
      alt: 'Painel do TCC: demonstração da API e do front-end',
    },
  },
];
