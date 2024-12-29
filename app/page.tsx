import { data } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container max-w-3xl mx-auto p-8 xl:p-24">
      <div className="min-h-screen flex flex-col gap-20">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold whitespace-nowrap">
            {data.informations.titre}
          </h1>
          <div>{data.informations.date}</div>
          <div className="border-t border-muted pt-4 text-sm">
            {data.informations.lieu}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className=" text-2xl font-bold">
            {Object.keys(data)[1].replaceAll("_", " ")}
          </h2>
          <nav className="flex flex-col gap-2 bg-secondary p-4 rounded-lg">
            {Object.keys(data.Ordre_de_la_messe).map((key) => (
              <Link
                href={`#${key}`}
                key={key}
                className="flex items-center justify-between w-full gap-2"
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  {key}
                </span>
                <span className="text-sm whitespace-nowrap text-muted-foreground/70">
                  {typeof data.Ordre_de_la_messe[key] === "number"
                    ? data.Ordre_de_la_messe[key]
                    : Object.entries(data.Ordre_de_la_messe[key]).reduce(
                        (acc, [key, value]) =>
                          acc +
                          (typeof value === "number" ? value : value.temps),
                        0
                      )}
                  &quot;
                </span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className=" text-2xl font-bold">
            {Object.keys(data.informations)[3]}
          </h2>
          <div className="flex flex-col gap-2">
            {Object.entries(data.informations.Célébrants).map(
              ([key, value]) => (
                <div key={key}>
                  <span className="font-bold">{key.replaceAll("_", " ")}:</span>{" "}
                  {value.join(", ")}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {Object.entries(data.Ordre_de_la_messe).map(([key, value]) => (
        <section id={key} key={key} className="mb-12">
          <h2 className="text-3xl flex h-full justify-between items-center font-bold mb-8">
            <span className="underline">{key}</span>
            <span className=" whitespace-nowrap  text-muted-foreground/70">
              {typeof value === "number"
                ? value
                : Object.entries(value).reduce(
                    (acc, [_, value]) =>
                      acc + (typeof value === "number" ? value : value.temps),
                    0
                  )}
              &quot;
            </span>
          </h2>
          {Object.entries(value).map(([key, value]) => (
            <article className="py-2 mx-auto  max-w-2xl" key={key}>
              <p className="text-2xl font-bold mb-2 flex justify-between">
                {typeof value === "number" ? key : value.Titre}
                <span className="text-sm whitespace-nowrap text-muted-foreground/70">
                  {typeof value === "number" ? value : value.temps}&quot;
                </span>
              </p>
              {typeof value !== "number" && value.Contenu && (
                <pre className="bg-secondary rounded-lg p-4 pb-8 my-4 whitespace-pre-wrap font-sans">
                  {value.Contenu}
                </pre>
              )}
            </article>
          ))}
          <div className="h-0.5 bg-muted mt-4"></div>
        </section>
      ))}
    </main>
  );
}
