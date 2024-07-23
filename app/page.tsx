import Image from 'next/image'
import { data } from '../components/data'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {Object.entries(data.messe).map(([key, value]) => (
        <section key={key} className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{key}</h2>
          {Object.entries(value).map(([key, value]) => (
            <article key={key} className="mb-4">
              <h3 className="text-2xl font-bold mb-2">{key}</h3>
              <p>{typeof value === 'string' ? value : value.Titre}</p>
              {typeof value !== 'string' && value.Contenu && (
                <p>{value.Contenu}</p>
              )}
              
            </article>
          ))}
        </section>
      ))}

    </main>
  )
}
