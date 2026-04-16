/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, Twitter, Mail } from 'lucide-react';
import heroImg from './hero.png';

export default function App() {
  const dadosRef = useRef<HTMLElement>(null);
  const { scrollYProgress: scrollYProgressDados } = useScroll({
    target: dadosRef,
    offset: ["start end", "start 40%"]
  });

  const xDados = useTransform(scrollYProgressDados, [0, 1], ["-100%", "0%"]);
  const opacityDados = useTransform(scrollYProgressDados, [0, 1], [0, 1]);

  const relatoriosRef = useRef<HTMLElement>(null);
  const { scrollYProgress: scrollYProgressRelatorios } = useScroll({
    target: relatoriosRef,
    offset: ["start end", "start 40%"]
  });

  const xRelatorios = useTransform(scrollYProgressRelatorios, [0, 1], ["100%", "0%"]);
  const opacityRelatorios = useTransform(scrollYProgressRelatorios, [0, 1], [0, 1]);

  const contatoRef = useRef<HTMLElement>(null);
  const { scrollYProgress: scrollYProgressContato } = useScroll({
    target: contatoRef,
    offset: ["start end", "start 60%"]
  });

  const yContato = useTransform(scrollYProgressContato, [0, 1], ["100%", "0%"]);
  const opacityContato = useTransform(scrollYProgressContato, [0, 1], [0, 1]);

  return (
    <main className="min-h-screen w-full">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src={heroImg}
          alt="Education Background"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Pantone Ultra Violet Filter (#5F4B8B) */}
        <div className="absolute inset-0 bg-[#5F4B8B] mix-blend-color"></div>
        {/* Additional darkening overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#5F4B8B]/40 mix-blend-multiply"></div>
      </div>

      {/* Hero & Sobre Section */}
      <section className="relative z-10 flex min-h-screen w-full flex-col">
        {/* Title at Top Center */}
        <div className="flex w-full justify-center pt-8 sm:pt-12 md:pt-16">
          <h1 className="font-tienne text-3xl font-black tracking-wide text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            dados da educação
          </h1>
        </div>

        {/* Sobre Section at ~2/3 of the page */}
        <div className="mt-[55vh] w-full px-6 pb-12 sm:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center font-tienne text-2xl font-bold text-white drop-shadow-md sm:text-3xl">
              Sobre
            </h2>
            {/* Blurring background box adapted to theme */}
            <div className="rounded-2xl border border-white/20 bg-white/60 p-8 shadow-2xl backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-900/60 sm:p-10 text-center">
              <p className="text-lg leading-relaxed text-slate-900 dark:text-slate-100 sm:text-xl">
                O Dados da Educação surge em 2026 como um projeto que procura <strong>popularizar</strong> o acesso a dados educacionais de forma prática e fácil. Essa democratização pode ser tanto na identificação de possíveis fontes de informação, uma vez que existem diversas bases de dados com informações educacionais sendo produzidas por diversas fontes, ou em uma pequena orientação em como utilizá-las. O objetivo é permitir que pesquisadores, gestores ou cidadãos consigam, de alguma forma, <strong>responder às suas perguntas</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relatórios Section */}
      <section ref={relatoriosRef} className="relative z-10 flex w-full flex-col justify-start px-6 pt-12 pb-12 sm:px-12 overflow-hidden">
        <motion.div 
          style={{ x: xRelatorios, opacity: opacityRelatorios }}
          className="mx-auto w-full max-w-4xl"
        >
          <h2 className="mb-6 text-center font-tienne text-2xl font-bold text-white drop-shadow-md sm:text-3xl">
            Relatórios
          </h2>
          {/* Blurring background box adapted to theme */}
          <div className="rounded-2xl border border-white/20 bg-white/60 p-8 shadow-2xl backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-900/60 sm:p-10 text-center">
            <p className="text-lg leading-relaxed text-slate-900 dark:text-slate-100 sm:text-xl">
              Em breve, o trabalho de nossa autoria estará por aqui.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Dados Section */}
      <section ref={dadosRef} className="relative z-10 flex w-full flex-col justify-start px-6 pt-12 pb-12 sm:px-12 overflow-hidden">
        <motion.div 
          style={{ x: xDados, opacity: opacityDados }}
          className="mx-auto w-full max-w-4xl"
        >
          <h2 className="mb-6 text-center font-tienne text-2xl font-bold text-white drop-shadow-md sm:text-3xl">
            Dados
          </h2>
          {/* Blurring background box adapted to theme */}
          <div className="rounded-2xl border border-white/20 bg-white/60 p-8 shadow-2xl backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-900/60 sm:p-10 text-center">
            <p className="text-lg leading-relaxed text-slate-900 dark:text-slate-100 sm:text-xl">
              Em breve, nossas bases de dados estarão disponíveis para acesso.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contato Section */}
      <section ref={contatoRef} className="relative z-10 flex min-h-[70vh] w-full flex-col justify-start px-6 pt-12 pb-24 sm:px-12 overflow-hidden">
        <motion.div 
          style={{ y: yContato, opacity: opacityContato }}
          className="mx-auto w-full max-w-4xl"
        >
          <h2 className="mb-6 text-center font-tienne text-2xl font-bold text-white drop-shadow-md sm:text-3xl">
            Contato
          </h2>
          {/* Blurring background box adapted to theme */}
          <div className="rounded-2xl border border-white/20 bg-white/60 p-8 shadow-2xl backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-900/60 sm:p-10 text-center">
            <p className="text-lg leading-relaxed text-slate-900 dark:text-slate-100 sm:text-xl">
              Quer acompanhar nossas novidades ou conversar com a gente? Siga-nos nas redes sociais ou entre em contato por e-mail.
            </p>
            <div className="mt-8 flex justify-center gap-8">
              <a href="#" aria-label="Instagram" className="text-slate-900 transition-transform hover:scale-110 hover:text-[#5F4B8B] dark:text-slate-100 dark:hover:text-[#a288d9]">
                <Instagram size={36} />
              </a>
              <a href="#" aria-label="X (Twitter)" className="text-slate-900 transition-transform hover:scale-110 hover:text-[#5F4B8B] dark:text-slate-100 dark:hover:text-[#a288d9]">
                <Twitter size={36} />
              </a>
              <a href="mailto:contato@dadosdaeducacao.com.br" aria-label="E-mail" className="text-slate-900 transition-transform hover:scale-110 hover:text-[#5F4B8B] dark:text-slate-100 dark:hover:text-[#a288d9]">
                <Mail size={36} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footnote */}
      <p className="relative z-10 pb-8 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} Dados da Educação. Todos os direitos reservados.
      </p>
    </main>
  );
}
