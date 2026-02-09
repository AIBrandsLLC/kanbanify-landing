import React from 'react';
import cookiesContent from '../../assets/doc/kanbanify-cookies.json';

type Block = {
    type: string;
    text?: string;
    ordered?: boolean;
    items?: string[];
};

type Section = {
    id: string;
    title: string | null;
    blocks: Block[];
};

type CookiesContent = {
    slug: string;
    title: string;
    meta: { effective_date?: string; version?: string };
    sections: Section[];
};

const content: CookiesContent = cookiesContent;

const renderBlock = (block: Block, index: number) => {
    switch (block.type) {
        case 'paragraph':
            // Basic markdown bold handling: **text** -> <strong>text</strong>
            const parts = (block.text || '').split(/(\*\*.*?\*\*)/g);
            return (
                <p key={index} className="mb-4 text-text-light leading-relaxed">
                    {parts.map((part: string, i: number) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i} className="font-semibold text-text">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                    })}
                </p>
            );
        case 'subheading':
            return (
                <h3 key={index} className="text-xl font-semibold text-text mt-8 mb-4">
                    {block.text}
                </h3>
            );
        case 'list':
            const ListTag = block.ordered ? 'ol' : 'ul';
            return (
                <ListTag key={index} className={`mb-4 pl-6 ${block.ordered ? 'list-decimal' : 'list-disc'} text-text-light space-y-2`}>
                    {block.items?.map((item: string, i: number) => {
                        const parts = item.split(/(\*\*.*?\*\*)/g);
                        return (
                            <li key={i}>
                                {parts.map((part: string, k: number) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={k} className="font-semibold text-text">{part.slice(2, -2)}</strong>;
                                    }
                                    return part;
                                })}
                            </li>
                        )
                    })}
                </ListTag>
            );
        default:
            return null;
    }
};

export default function CookiesPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8 bg-background-light">
            <div className="mb-8">
                <a href="/" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                    &larr; Back to Home
                </a>
            </div>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl mb-4">
                {content.title}
            </h1>
            <div className="flex gap-4 mb-8">
                {content.meta.effective_date && (
                    <p className="text-sm text-text-light">Effective Date: {content.meta.effective_date}</p>
                )}
                {content.meta.version && (
                    <p className="text-sm text-text-light">Version: {content.meta.version}</p>
                )}
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
                {content.sections.map((section) => (
                    <section key={section.id} className="mb-8 last:mb-0">
                        {section.title && (
                            <h2 className="font-heading text-2xl font-bold text-text mt-10 mb-6 pb-2 border-b border-gray-100">
                                {section.title}
                            </h2>
                        )}
                        {section.blocks.map((block, index) => renderBlock(block, index))}
                    </section>
                ))}
            </div>
        </div>
    );
}
