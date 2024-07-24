import { ChevronRightIcon } from "lucide-react";
import { data } from "../lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container max-w-3xl mx-auto p-8 xl:p-24">
      <div className="min-h-screen flex flex-col gap-20">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold whitespace-nowrap">
            Messe de mariage
          </h1>
          <div>Anissah et Thomas</div>
          <div>Mercredi 24 Juillet 2024</div>
          <div className="border-t border-muted pt-4 text-sm">
            Eglise Saint Michel, <br />6 rue d Aboville, 29200 Brest
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className=" text-2xl font-bold">Ordre de la messe</h2>
          <nav className="flex flex-col gap-2 bg-secondary p-4 rounded-lg">
            {Object.keys(data.messe).map((key) => (
              <Link
                href={`#${key}`}
                key={key}
                className="flex items-center gap-2"
              >
                <ChevronRightIcon className="h-4 w-4" />
                {key}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className=" text-2xl font-bold">Célébrants</h2>
          <div className="flex flex-col gap-2 mb-12">
            <div>
              <span className="font-bold">Prêtre:</span> Père Joseph
            </div>
            <div>
              <span className="font-bold">Assistante liturgique:</span> Sœur
              Marie
            </div>
            <div>
              <span className="font-bold">Chant:</span> Gabrielle
            </div>
            <div>
              <span className="font-bold">Violoncelle:</span> Maïwenn
            </div>
          </div>
        </div>
      </div>

      {Object.entries(data.messe).map(([key, value]) => (
        <section id={key} key={key} className="mb-12">
          <h2 className="text-3xl font-bold  mb-4">{key}</h2>
          {Object.entries(value).map(([key, value]) => (
            <article className="py-4 mx-auto  max-w-2xl" key={key}>
              <p className="text-2xl font-bold mb-2">
                {typeof value === "string" ? value : value.Titre}
              </p>
              {typeof value !== "string" && value.Contenu && (
                <pre className="bg-secondary rounded-lg p-4 my-4 whitespace-pre-wrap font-sans">
                  {value.Contenu}
                </pre>
              )}
            </article>
          ))}
        </section>
      ))}
    </main>
  );
}
