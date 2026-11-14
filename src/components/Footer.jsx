
import { Link } from "react-router-dom";
import { CheckCheck, ArrowUpRight, Mail } from "lucide-react";

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#about" },
  { label: "Pricing", href: "/#pricing" },
];

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-gray-900 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                <CheckCheck size={20} />
              </span>
              <span className="text-xl font-bold">TaskWork</span>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-gray-600 dark:text-gray-400">
              Organize your tasks, manage your work, and stay focused on what
              matters with TaskWork.
            </p>

            <a
              href="mailto:hello@taskwork.example"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Mail size={16} />
              Get in touch
            </a>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} TaskWork. All rights reserved.
          </p>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
          >
            Open Task Manager
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
