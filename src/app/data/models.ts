export interface Profile {
  name: string;
  handle: string;
  /** Palavras que alternam no efeito de digitação do hero ("Desenvolvedor <palavra>"). */
  roles: string[];
  summary: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface Experience {
  company: string;
  badge: string;
  summary: string;
  highlights: Highlight[];
  stack: string[];
}

export interface Tech {
  name: string;
  /** Caminho do ícone em /public. */
  icon: string;
}

export interface StackGroup {
  label: string;
  items: Tech[];
}

export interface ProjectMedia {
  /** Arquivo em /public (ex.: 'projects/historicar.gif') ou URL absoluta. */
  src: string;
  alt: string;
  /** 'image' cobre PNG, JPG, WebP e GIF; 'video' para MP4/WebM (mais leve que GIF). */
  type?: 'image' | 'video';
  /** 'cover' preenche o card (padrão); 'contain' mostra a mídia inteira. */
  fit?: 'cover' | 'contain';
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  repoUrl: string;
  /** Link do projeto rodando em produção. Quando existe, o card ganha o botão "Ver online". */
  liveUrl?: string;
  media?: ProjectMedia;
}
