import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-20 px-8 text-center sm:px-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
          Modern HR Platform
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          A comprehensive, GDPR-compliant HR SaaS platform tailored for the European market.
          Streamline your human resources, from onboarding to performance management.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center w-full">
          <a
            className="flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-medium text-white transition-colors hover:bg-blue-700 w-full sm:w-auto"
            href="#"
          >
            Go to Dashboard
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-lg border border-zinc-200 bg-white px-8 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 w-full sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
