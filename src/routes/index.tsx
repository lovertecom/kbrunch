import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Check, Instagram } from "lucide-react";
import { useState, type FormEvent } from "react";

import laurenPortrait from "@/assets/lauren.png.asset.json";
import beautyRitual from "@/assets/beauty-ritual.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Loverte × Lauren K-Beauty Brunch" },
      {
        name: "description",
        content: "Kutse Loverte × Lauren K-Beauty Brunchile 4. oktoobril Blessa Stuudios.",
      },
      { property: "og:title", content: "Loverte × Lauren K-Beauty Brunch" },
      {
        property: "og:description",
        content: "Brunch, matcha, näojooga ja K-beauty — kohtume 4. oktoobril Blessa Stuudios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const partners = ["Dr.Ceuracle", "medicube", "TIRTIR", "Centellian24", "BEAUTY OF JOSEON"];

function Index() {
  const [confirmed, setConfirmed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setConfirmed(true);
  }

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="invitation-shell px-4 py-4 sm:px-8 sm:py-8 lg:px-12 lg:py-12">
        <div className="mx-auto grid min-h-[calc(100svh-6rem)] max-w-[1440px] overflow-hidden bg-card shadow-editorial lg:grid-cols-[1.02fr_0.98fr]">
          <figure className="relative min-h-[52svh] overflow-hidden bg-secondary lg:min-h-[760px]">
            <img src={laurenPortrait.url} alt="Lauren K-Beauty Brunchi portree" width={1366} height={768} className="absolute inset-0 h-full w-full object-cover object-[68%_center] lg:object-[66%_center]" />
            <div className="portrait-shade absolute inset-0" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-primary-foreground sm:p-10 lg:p-12">
              <p className="max-w-md font-display text-2xl font-semibold leading-tight sm:text-3xl">Ilu algab hetkest,<br />mille võtad iseendale.</p>
              <span className="hidden text-right text-[9px] font-bold uppercase tracking-[0.18em] opacity-75 sm:block">Loverte × Lauren<br />K-Beauty Brunch</span>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 lg:py-14 xl:px-20">
            <div className="reveal-up">
              <p className="eyebrow mb-7 flex items-center gap-4"><span className="h-px w-10 bg-accent" />Hei, kaunis! Oled oodatud</p>
              <h1 className="max-w-xl font-display text-[clamp(2.9rem,5.3vw,5.9rem)] font-semibold leading-[0.9]">
                Loverte × Lauren<br /><span className="text-accent-strong">K-Beauty Brunch</span>
              </h1>
              <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground">Üks rahulik pühapäevahommik brunchi, matcha, näojooga ja Korea ilurituaalidega.</p>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 border-y border-border py-6 text-sm">
              <div><dt className="eyebrow mb-2">Millal</dt><dd className="font-semibold">4. oktoober 2026<br />11:00–14:00</dd></div>
              <div><dt className="eyebrow mb-2">Kus</dt><dd className="font-semibold">Blessa Stuudio<br /><span className="font-normal text-muted-foreground">Noblessner</span></dd></div>
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Button asChild variant="invitation" size="invitation" className="rounded-none px-8">
                <a href="#rsvp">Kinnitan tuleku <ArrowDown /></a>
              </Button>
              <span className="text-xs text-muted-foreground">Palun vasta hiljemalt 27. septembriks</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Partnerbrändid" className="border-y border-border bg-card py-6">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 sm:justify-between sm:px-10">
          {partners.map((partner) => <span key={partner} className="font-display text-xs font-semibold uppercase text-muted-foreground sm:text-sm">{partner}</span>)}
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-7">01 / Hommik sinule</p>
            <h2 className="max-w-2xl font-display text-[clamp(2.8rem,5.5vw,6rem)] font-semibold leading-[0.94]">Brunch, matcha, näojooga, K-Beauty + Sina?</h2>
          </div>
          <div className="grid content-start gap-10 lg:pt-16">
            <div className="max-w-xl space-y-5 text-base leading-8 text-muted-foreground">
              <p>Pühapäevahommikud on loodud selleks, et tõmmata hinge, tulla hetkesse ja pöörata pilk kõige olulisemale, mis kiires elutempos sageli ununema kipub – iseendale.</p>
              <p>Kutsume Sind veetma üht tõeliselt mõnusat hommikupoolikut, mis on pühendatud Sinu heaolule, rahulikule kulgemisele ja enesehoolitsusele.</p>
              <p>Sinu pühapäeva teevad eriliseks Nudisti tervitusmull, Yook matcha- ja kohvibaar ning Nomad Food Trucki koreapärased ampsud. Päevale lisavad ilu Evelin Allvee näojooga töötuba ja Laureni K-Beauty rituaal.</p>
            </div>
            <img src={beautyRitual} alt="K-beauty hooldustooted ja matcha" loading="lazy" width={1088} height={1360} className="aspect-[16/9] w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="rsvp" className="bg-accent-soft py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-5 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-7">02 / Sinu kutse</p>
            <h2 className="font-display text-[clamp(3.2rem,6vw,6.5rem)] font-semibold leading-[0.9]">Kohtume<br />pühapäeval?</h2>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-foreground/20 pt-7 text-sm">
              <div><dt className="eyebrow mb-2">Millal?</dt><dd>4. oktoober · 11:00–14:00</dd></div>
              <div><dt className="eyebrow mb-2">Kus?</dt><dd><a href="https://blessa.ee" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">Blessa Stuudio <ArrowUpRight className="inline size-3" /></a><br /><span className="text-muted-foreground">Vesilennuki 20, Noblessner</span></dd></div>
              <div><dt className="eyebrow mb-2">Dresscode?</dt><dd>No Stress & No Makeup</dd></div>
            </dl>
          </div>

          <form onSubmit={handleSubmit} className="border border-border bg-card p-7 sm:p-12">
            {confirmed ? (
              <div className="flex min-h-[390px] flex-col items-start justify-center" role="status">
                <span className="mb-7 grid size-12 place-items-center bg-primary text-primary-foreground"><Check /></span>
                <h3 className="font-display text-4xl font-semibold sm:text-5xl">Koht on kinnitatud.</h3>
                <p className="mt-5 max-w-md leading-7 text-muted-foreground">Aitäh! Sinu vastus on vastu võetud. Kohtumiseni Loverte × Lauren K-Beauty Brunchil.</p>
              </div>
            ) : (
              <>
                <p className="eyebrow">RSVP</p>
                <h3 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Kinnitan tuleku</h3>
                <div className="mt-10 space-y-8">
                  <label className="eyebrow block">Sinu nimi<input required name="name" autoComplete="name" placeholder="Ees- ja perekonnanimi" className="mt-3 w-full border-0 border-b border-input bg-transparent px-0 py-4 text-base font-normal normal-case outline-none placeholder:text-muted-foreground focus:border-accent-strong" /></label>
                  <label className="eyebrow block">E-posti aadress<input required name="email" type="email" autoComplete="email" placeholder="sinu@email.ee" className="mt-3 w-full border-0 border-b border-input bg-transparent px-0 py-4 text-base font-normal normal-case outline-none placeholder:text-muted-foreground focus:border-accent-strong" /></label>
                </div>
                <Button type="submit" variant="invitation" size="invitation" className="mt-10 w-full rounded-none">Kinnitan tuleku <ArrowUpRight /></Button>
                <p className="mt-5 text-xs leading-5 text-muted-foreground">Kasutame sinu andmeid ainult selle ürituse korraldamiseks.</p>
              </>
            )}
          </form>
        </div>

        <footer className="mx-auto mt-24 flex max-w-[1440px] flex-col gap-5 border-t border-foreground/20 px-5 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span className="font-display font-semibold uppercase">Loverte × Lauren</span>
          <div className="flex items-center gap-5"><span className="flex items-center gap-2"><Instagram className="size-4" /> loverte</span><span className="flex items-center gap-2"><Instagram className="size-4" /> laurenvlm</span></div>
        </footer>
      </section>
    </main>
  );
}