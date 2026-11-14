
const steps = [
  {
    number: "01",
    title: "Add a Task",
    description: "Enter the task you want to complete.",
  },
  {
    number: "02",
    title: "Complete Tasks",
    description: "Mark a task as completed when you finish it.",
  },
  {
    number: "03",
    title: "Track Progress",
    description: "View your pending and completed tasks.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white px-5 py-20 transition-colors dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            How It Works
          </h2>

          <p className="mt-3 text-slate-600 dark:text-gray-400">
            Get started in three simple steps.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {step.number}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-2 text-slate-600 dark:text-gray-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
