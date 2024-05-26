import React from 'react';
import { Minicurso, SocialMedia } from '@/lib/definitions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip } from 'antd';
import { GithubIcon } from '@/components/ui/icons';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { Button } from '@/components/ui/button';

interface ModalContentProps { minicourse: Minicurso; };
const ModalContent: React.FC<ModalContentProps> = ({ minicourse }) => {
    return (
        <div className="w-full sm:grid sm:grid-cols-12 flex flex-col mb-3">
            <div className="sm:col-span-7 flex flex-col gap-4 sm:mr-8">
                <h1 className="text-3xl font-semibold">{minicourse.title}</h1>
                <p className="ml-2 text-base tracking-wide text-justify hyphens-auto">{minicourse.description}</p>
            </div>
            <div className="hidden sm:block sm:col-span-5 mt-10">
                {minicourse.alternatePicture ? (
                    <img src={minicourse.alternatePicture} alt={minicourse.title} className="w-full h-full rounded-md object-cover" />
                ) : (
                    <img src={minicourse.picture} alt={minicourse.title} className="w-full h-60 rounded-md object-cover" />
                )}
            </div>
            <div className="sm:col-span-12 mt-4 sm:mt-7">
                {minicourse.prerequesites && minicourse.prerequesites.length > 0 ? (
                    <>
                        <h3 className="text-lg font-semibold">Pré-requisitos:</h3>
                        <ul className="list-disc">
                            {minicourse.prerequesites.map((prerequisite, index) => (
                                <li key={index} className="ml-8 text-base tracking-wide">{prerequisite}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <h3 className="text-lg font-semibold text-center sm:text-left pb-6">Não há pré-requisitos</h3>
                )}
            </div>
            <div className="sm:col-span-12 w-full sm:grid sm:grid-cols-12 flex justify-center">
                <Button
                    variant="default"
                    size="lg"
                    className="sm:col-start-9 sm:col-span-3 bg-sky-400 hover:bg-sky-500 px-12 sm:px-0"
                >
                    Inscreva-se
                </Button>
            </div>
            <div className="sm:col-span-12 mb-3 mt-5 sm:mx-3">
                <div className="border-t border-gray-300 my-6"></div>
                {minicourse.palestrantes.length > 1 ? (
                    <div className="flex sm:flex-row flex-col gap-12 font-mono tracking-tighter items-center sm:items-start">
                        <div className="flex flex-col sm:w-1/2">
                            <div className="flex gap-4">
                                <Avatar size="large">
                                    <AvatarImage src={minicourse.palestrantes[0].picture} alt={minicourse.palestrantes[0].name} />
                                    <AvatarFallback>None</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <h3 className="text-base ml-1 font-semibold">{minicourse.palestrantes[0].name}</h3>
                                    {minicourse.palestrantes[0].bio.length > 114 ? (
                                        <Tooltip
                                            title={minicourse.palestrantes[0].bio}
                                            color='white'
                                            overlayInnerStyle={{ color: 'black' }}
                                        >
                                            <p className="line-clamp-3 text-justify hyphens-auto text-sm">{minicourse.palestrantes[0].bio}</p>
                                        </Tooltip>
                                    ) : (
                                        <p className="line-clamp-3 text-justify hyphens-auto">{minicourse.palestrantes[0].bio}</p>
                                    )}
                                </div>
                            </div>
                            <div className="mx-3 mt-2">
                                <SocialMediaShowcase social={minicourse.palestrantes[0].social} />
                            </div>
                        </div>
                        <div className="flex flex-col sm:w-1/2">
                            <div className="flex gap-4">
                                <div className="flex flex-col">
                                    <h3 className="text-base ml-1 font-semibold">{minicourse.palestrantes[1].name}</h3>
                                    {minicourse.palestrantes[1].bio.length > 114 ? (
                                        <Tooltip
                                            title={minicourse.palestrantes[1].bio}
                                            color='white'
                                            overlayInnerStyle={{ color: 'black' }}
                                        >
                                            <p className="line-clamp-3 text-justify hyphens-auto text-sm">{minicourse.palestrantes[1].bio}</p>
                                        </Tooltip>
                                    ) : (
                                        <p className="line-clamp-3 text-justify hyphens-auto">{minicourse.palestrantes[1].bio}</p>
                                    )}
                                </div>
                                <Avatar size="large">
                                    <AvatarImage src={minicourse.palestrantes[1].picture} alt={minicourse.palestrantes[1].name} />
                                    <AvatarFallback>None</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="mx-3 mt-2">
                                <SocialMediaShowcase social={minicourse.palestrantes[1].social} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 font-mono tracking-tighter">
                        <div className="flex gap-4">
                            <Avatar size="large">
                                <AvatarImage src={minicourse.palestrantes[0].picture} alt={minicourse.palestrantes[0].name} />
                                <AvatarFallback>None</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h3 className="text-base font-semibold ml-1">{minicourse.palestrantes[0].name}</h3>
                                {minicourse.palestrantes[0].bio.length > 114 && minicourse.palestrantes.length > 1 ? (
                                    <Tooltip
                                        title={minicourse.palestrantes[0].bio}
                                        color='white'
                                        overlayInnerStyle={{ color: 'black' }}
                                    >
                                        <p className="line-clamp-3 text-justify hyphens-auto">{minicourse.palestrantes[0].bio}</p>
                                    </Tooltip>
                                ) : (
                                    <p className="line-clamp-3 text-justify hyphens-auto text-sm">{minicourse.palestrantes[0].bio}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-center items-center mx-3 ml-12">
                            <SocialMediaShowcase social={minicourse.palestrantes[0].social} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

interface SocialMediaProps { social?: SocialMedia; };
const SocialMediaShowcase: React.FC<SocialMediaProps> = ({ social }) => {
    return (
        <div className="flex justify-center gap-10">
            {social?.github && (
                <a href={social.github} target="_blank" rel="noreferrer">
                    <GithubIcon size={25} />
                </a>
            )}
            {social?.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin size={25} />
                </a>
            )}
            {social?.instagram && (
                <a href={social.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram size={25} />
                </a>
            )}
            {social?.email && (
                <a href={`mailto:${social.email}`}>
                    <IoMail size={25} />
                </a>
            )}
        </div >
    );
};

export { ModalContent };