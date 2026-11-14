
const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For personal task management.",
    features: [
      "Create tasks",
      "Complete tasks",
      "Delete tasks",
      "Track progress",
    ],
    buttonText: "Get Started",
    buttonLink: "/app",
    primary: true,
  },
  {
    name: "Pro",
    price: "$12",
    description: "For teams and growing projects.",
    features: [
      "Everything in Free",
      "More project options",
      "Team collaboration",
      "Priority support",
    ],
    buttonText: "Contact Us",
    buttonLink: "#contact",
    primary: false,
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-y border-slate-200 bg-slate-50 px-5 py-20 transition-colors dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Pricing
          </h2>

          <p className="mt-3 text-slate-600 dark:text-gray-400">
            Choose a plan that works for you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="border border-slate-200 bg-white p-7 transition-colors dark:border-gray-800 dark:bg-gray-950"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {plan.name}
              </h3>

              <p className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
                {plan.price}
                {plan.name === "Pro" && (
                  <span className="text-sm font-normal text-slate-500 dark:text-gray-400">
                    {" "}/ user / month
                  </span>
                )}
              </p>

              <p className="mt-2 text-slate-600 dark:text-gray-400">
                {plan.description}
              </p>

              <ul className="my-6 space-y-3 text-sm text-slate-600 dark:text-gray-400">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <a
                href={plan.buttonLink}
                className={`block rounded-md px-4 py-3 text-center text-sm font-medium transition ${
                  plan.primary
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
                }`}
              >
                {plan.buttonText}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500 dark:text-gray-500">
          Sample pricing for demonstration. No payment is processed.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
