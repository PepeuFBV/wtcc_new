export type Minicurso = {
    index: number;
    title: string;
    alternateTitle: string;
    picture: string;
    alternatePicture?: string;
    date: string;
    tags?: {
        name: string;
        color: string;
        index: number;
    }[];
    description: string;
    prerequesites?: string[];
    palestrantes: Palestrante[];
};

export type Palestrante = {
    name: string;
    bio: string;
    social?: SocialMedia;
    picture?: string;
};

export type SocialMedia = {
    github?: string;
    instagram?: string;
    email?: string;
    linkedin?: string;
};

export type Tag = {
    name: string;
    color: string;
    index: number;
};

export type Palestra = {
    name: string;
    description: string;
    descriptionCont?: string;
    speaker: Palestrante;
    img: string;
};

export type Question = {
    key: number;
    question: string;
    answer: string;
};

export type Faq = {
    questions: Question[];
};

export type Atividade = {
    index: number;
    dia: number;
    hora: string;
    titulo: string;
    descricao: string;
    localizacao: string;
};

export type Imagem = {
    index: number;
    src: string;
    descricao: string;
    alt: string;
};