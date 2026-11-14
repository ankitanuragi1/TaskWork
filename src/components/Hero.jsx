
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  Plus,
  CalendarDays,
} from "lucide-react";

function Hero() {
  return (
    <section className="overflow-hidden bg-white transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
            <CheckCircle2 size={16} />
            A simpler way to manage your work
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
            Get your work done.
            <span className="text-blue-600 dark:text-blue-400"> Stay in control.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-600 dark:text-gray-400">
            Stop juggling tasks and forgetting deadlines. TaskWork helps you
            organize your work, track your progress, and focus on what matters.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Start managing tasks
              <ArrowRight size={17} />
            </Link>

            <a
              href="#features"
              className="px-3 py-3.5 text-sm font-semibold text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Explore features
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-blue-600" />
              Simple to use
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-blue-600" />
              No setup required
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="border border-gray-200 bg-white shadow-xl shadow-gray-200/60 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20">
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 dark:border-gray-800">
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">My Tasks</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Your day, organized.
                </p>
              </div>

              <span className="flex h-10 w-10 items-center justify-center bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <CalendarDays size={20} />
              </span>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-200 dark:border-gray-800">
              <div className="px-5 py-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">08</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Total tasks</p>
              </div>
              <div className="border-x border-gray-200 px-5 py-4 dark:border-gray-800">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">05</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Pending</p>
              </div>
              <div className="px-5 py-4">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">03</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Completed</p>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Today's overview
                </h3>
                <span className="text-xs text-gray-400 dark:text-gray-500">Sample preview</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 border border-gray-100 p-4 dark:border-gray-800">
                  <CheckCircle2 size={19} className="shrink-0 text-green-500" />
                  <span className="flex-1 text-sm text-gray-400 line-through">
                    Review project requirements
                  </span>
                  <span className="text-xs text-green-600 dark:text-green-400">Done</span>
                </div>

                <div className="flex items-center gap-3 border border-gray-200 p-4 dark:border-gray-800">
                  <Circle size={19} className="shrink-0 text-gray-300 dark:text-gray-600" />
                  <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                    Build landing page
                  </span>
                  <span className="text-xs text-blue-600 dark:text-blue-400">Today</span>
                </div>

                <div className="flex items-center gap-3 border border-gray-200 p-4 dark:border-gray-800">
                  <Circle size={19} className="shrink-0 text-gray-300 dark:text-gray-600" />
                  <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                    Prepare presentation
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">Tomorrow</span>
                </div>

                <div className="flex items-center gap-3 border border-gray-200 p-4 dark:border-gray-800">
                  <Circle size={19} className="shrink-0 text-gray-300 dark:text-gray-600" />
                  <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                    Check team updates
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">Tomorrow</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5 dark:border-gray-800">
                <span className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <Clock3 size={15} />
                  Keep moving forward
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                  <Plus size={15} />
                  Add a task
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 bg-blue-50 dark:bg-blue-950" />
          <div className="absolute -right-5 -top-5 -z-10 h-28 w-28 bg-gray-100 dark:bg-gray-900" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
