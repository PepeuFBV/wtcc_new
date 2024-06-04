import Link from 'next/link';

import { Step } from './definitions';

import { HiCursorClick } from 'react-icons/hi';

export const steps: Step[] = [
    {
        index: 0,
        title: "Achando os minicursos disponíveis",
        image: "/imagens-inscrever-se/minicursos/img1.png",
        imageDesc: "Dentro do site do SIGAA",
        content: (
            <p>Para inscrever-se nos minicursos que ocorrerão na parte da tarde, clique nesse botão na aba do evento!</p>
        )
    },
    {
        index: 1,
        title: "Inscrevendo-se no minicurso",
        image: "/imagens-inscrever-se/minicursos/img2.png",
        imageDesc: "Selecionando o minicurso",
        content: (
            <div className="flex flex-col gap-3">
                <p>Escolha seu minicurso e inscreva-se! Fique atento a data do minicurso.</p>
                <p>As datas oficiais dos minicursos estão na página de <Link href="/eventos/minicursos" legacyBehavior passHref><span className="italic cursor-pointer">minicursos<HiCursorClick className="inline-flex ml-[0.2rem] mb-[0.5rem]" size={10} /></span></Link></p>
            </div>
        )
    }
];