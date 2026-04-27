import { type FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
    advancedNotes,
    clarityQuestions,
    nonsurgicalRhinoplasty,
    rhinoplastyCanDo,
    rhinoplastyCantDo,
    rhinoplastyOverview,
    rhinoplastySummary,
    surgeonSelection,
    surgicalApproaches,
} from '../constants/rhinoplastyContent';

interface RhinoplastyDetailsProps {
    isOpen: boolean;
    onClose: () => void;
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const panelVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

const ListBlock: FC<{ items: string[]; tone?: 'gold' | 'neutral' }> = ({ items, tone = 'neutral' }) => {
    return (
        <ul className="space-y-3">
            {items.map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base leading-relaxed text-gray-300">
                    <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${tone === 'gold' ? 'bg-yellow-500' : 'bg-gray-600'}`}></span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
};

const RhinoplastyDetails: FC<RhinoplastyDetailsProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.dispatchEvent(new CustomEvent('modal-scroll-lock', { detail: true }));
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.dispatchEvent(new CustomEvent('modal-scroll-lock', { detail: false }));
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-xl px-3 py-3 md:px-8 md:py-8"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="rhinoplasty-title"
                    onClick={onClose}
                    data-lenis-prevent
                >
                    <motion.article
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                        data-lenis-prevent
                    >
                        <div className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0b0b]/95 px-5 py-4 backdrop-blur md:px-8">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="mb-1 text-xs uppercase tracking-[0.35em] text-yellow-500">{rhinoplastyOverview.eyebrow}</p>
                                    <h2 id="rhinoplasty-title" className="font-serif text-2xl leading-tight text-white md:text-4xl">
                                        {rhinoplastyOverview.title}
                                    </h2>
                                </div>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="relative h-11 w-11 flex-shrink-0 rounded-full border border-white/15 text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
                                    aria-label="Close rhinoplasty details"
                                >
                                    <span className="absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current"></span>
                                    <span className="absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current"></span>
                                </button>
                            </div>
                        </div>

                        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain" data-lenis-prevent>
                            <div className="relative min-h-[420px] overflow-hidden px-5 py-10 md:px-10 md:py-14">
                                <img
                                    src="/static/optimized/procedure-rhinoplasty.jpg"
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover opacity-20"
                                    loading="eager"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/85 to-[#0b0b0b]/50"></div>
                                <div className="relative max-w-3xl">
                                    <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
                                        {rhinoplastyOverview.author} / {rhinoplastyOverview.role}
                                    </p>
                                    <div className="space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
                                        {rhinoplastyOverview.intro.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                    <div className="mt-8 border-l border-yellow-500/60 bg-white/[0.03] p-5">
                                        <p className="font-serif text-2xl leading-snug text-white md:text-3xl">
                                            {rhinoplastyOverview.goal}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-5 px-5 py-8 md:grid-cols-2 md:px-10">
                                <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-500">What It Can Do</p>
                                    <ListBlock items={rhinoplastyCanDo} tone="gold" />
                                </section>
                                <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">Before You Decide</p>
                                    <ListBlock items={clarityQuestions} />
                                </section>
                            </div>

                            <section className="px-5 py-8 md:px-10">
                                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                                    <div>
                                        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-500">Quick Refinement</p>
                                        <h3 className="mb-4 font-serif text-4xl text-white">{nonsurgicalRhinoplasty.title}</h3>
                                        <p className="mb-4 text-gray-400">{nonsurgicalRhinoplasty.subtitle}</p>
                                        <p className="leading-relaxed text-gray-300">{nonsurgicalRhinoplasty.idealFor}</p>
                                    </div>
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.04] p-6">
                                            <h4 className="mb-4 font-serif text-2xl text-white">Best Benefits</h4>
                                            <ListBlock items={nonsurgicalRhinoplasty.benefits} tone="gold" />
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                            <h4 className="mb-4 font-serif text-2xl text-white">Avoid Fillers When</h4>
                                            <ListBlock items={nonsurgicalRhinoplasty.avoidWhen} />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="px-5 py-8 md:px-10">
                                <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                                    <div>
                                        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-500">Surgical Choices</p>
                                        <h3 className="font-serif text-4xl text-white md:text-5xl">Approaches Explained</h3>
                                    </div>
                                    <p className="max-w-xl text-gray-400">
                                        Closed, open and preservation rhinoplasty are not different goals. They are approaches selected according to the complexity of the nose.
                                    </p>
                                </div>
                                <div className="grid gap-5 lg:grid-cols-3">
                                    {surgicalApproaches.map((approach, index) => (
                                        <motion.div
                                            key={approach.title}
                                            initial={{ opacity: 0, y: 24 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.25 }}
                                            transition={{ duration: 0.5, delay: index * 0.08 }}
                                            className="rounded-2xl border border-white/10 bg-[#111] p-6"
                                        >
                                            <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/30 text-sm text-yellow-500">
                                                0{index + 1}
                                            </span>
                                            <h4 className="mb-3 font-serif text-2xl text-white">{approach.title}</h4>
                                            <p className="mb-5 leading-relaxed text-gray-400">{approach.description}</p>
                                            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">Best For</p>
                                            <p className="mb-5 text-gray-300">{approach.bestFor}</p>
                                            <ListBlock items={approach.highlights} tone="gold" />
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            <section className="grid gap-5 px-5 py-8 md:grid-cols-2 md:px-10">
                                {advancedNotes.map((note) => (
                                    <div key={note.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                        <h3 className="mb-4 font-serif text-3xl text-white">{note.title}</h3>
                                        <p className="leading-relaxed text-gray-300">{note.body}</p>
                                    </div>
                                ))}
                            </section>

                            <section className="px-5 py-8 md:px-10">
                                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 md:p-8">
                                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-500">Limitations</p>
                                    <h3 className="mb-6 font-serif text-4xl text-white">What Rhinoplasty Can't Do</h3>
                                    <ListBlock items={rhinoplastyCantDo} />
                                </div>
                            </section>

                            <section className="grid gap-5 px-5 py-8 md:grid-cols-2 md:px-10">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <h3 className="mb-5 font-serif text-3xl text-white">In Summary</h3>
                                    <ListBlock items={rhinoplastySummary} tone="gold" />
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <h3 className="mb-5 font-serif text-3xl text-white">Choosing Your Surgeon</h3>
                                    <ListBlock items={surgeonSelection} />
                                </div>
                            </section>
                        </div>
                    </motion.article>
                </motion.div>
            )}
        </AnimatePresence>
        ,
        document.body
    );
};

export default RhinoplastyDetails;
