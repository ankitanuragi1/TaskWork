
const features = [
  {
    title: "Create Tasks",
    description:
      "Add your daily tasks and keep your work organized in one place.",
  },
  {
    title: "Track Progress",
    description:
      "Mark tasks as completed and keep track of your progress.",
  },
  {
    title: "Stay Organized",
    description:
      "Separate pending and completed tasks with simple filters.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-20 border-y border-slate-200 bg-slate-50 px-5 py-20 transition-colors dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Features
          </h2>

          <p className="mt-3 text-slate-600 dark:text-gray-400">
            Everything you need to manage your daily tasks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="border border-slate-200 bg-white p-6 transition-colors dark:border-gray-800 dark:bg-gray-950"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-gray-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
