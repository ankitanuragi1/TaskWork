
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    Plus,
    Search,
    Circle,
    Trash2,
    ListTodo,
    Clock3,
    CheckCircle2,
    ClipboardList,
    CalendarDays,
    Check,
    X,
    ArrowLeft,
} from "lucide-react";

function Dashboard() {
    const [tasks, setTasks] = useState(() => {
        try {
            const savedTasks = JSON.parse(
                localStorage.getItem("taskWork-tasks")
            );

            return Array.isArray(savedTasks) ? savedTasks : [];
        } catch {
            return [];
        }
    });

    const [taskInput, setTaskInput] = useState("");
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

    useEffect(() => {
        localStorage.setItem("taskWork-tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (e) => {
        e.preventDefault();

        const title = taskInput.trim();

        if (!title) return;

        setTasks((prev) => [
            {
                id: crypto.randomUUID(),
                title,
                completed: false,
                createdAt: new Date().toISOString(),
            },
            ...prev,
        ]);

        setTaskInput("");
    };

    const toggleTask = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const clearCompleted = () => {
        setTasks((prev) => prev.filter((task) => !task.completed));
    };

    const completedCount = tasks.filter((task) => task.completed).length;
    const pendingCount = tasks.length - completedCount;

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            const matchesFilter =
                filter === "all" ||
                (filter === "pending" && !task.completed) ||
                (filter === "completed" && task.completed);

            const matchesSearch = task.title
                .toLowerCase()
                .includes(search.toLowerCase());

            return matchesFilter && matchesSearch;
        });
    }, [tasks, filter, search]);

    const progress =
        tasks.length === 0
            ? 0
            : Math.round((completedCount / tasks.length) * 100);

    const stats = [
        {
            label: "Total Tasks",
            value: tasks.length,
            icon: ClipboardList,
            color: "text-blue-600 dark:text-blue-400",
            bg: "bg-blue-50 dark:bg-blue-950/50",
        },
        {
            label: "Pending",
            value: pendingCount,
            icon: Clock3,
            color: "text-amber-600 dark:text-amber-400",
            bg: "bg-amber-50 dark:bg-amber-950/50",
        },
        {
            label: "Completed",
            value: completedCount,
            icon: CheckCircle2,
            color: "text-green-600 dark:text-green-400",
            bg: "bg-green-50 dark:bg-green-950/50",
        },
    ];

    const cardStyle =
        "border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900";

    const mutedText = "text-gray-500 dark:text-gray-400";
    const headingText = "text-gray-900 dark:text-white";

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
            <div className="mx-auto max-w-5xl px-5 py-6 md:py-10">

                {/* Top Bar */}
                <div className="mb-10 border-b border-gray-200 pb-5 dark:border-gray-800">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                        <ArrowLeft size={17} />
                        Back to Home
                    </Link>
                </div>

                {/* Heading */}
                <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                            Workspace
                        </p>

                        <h1 className={`text-3xl font-bold tracking-tight sm:text-4xl ${headingText}`}>
                            My Tasks
                        </h1>

                        <p className={`mt-2 text-sm leading-6 ${mutedText}`}>
                            Keep your work organized and make progress every day.
                        </p>
                    </div>

                    <div className={`flex items-center gap-2 text-sm ${mutedText}`}>
                        <CalendarDays size={17} />
                        {new Date().toLocaleDateString("en-IN", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </div>
                </div>

                {/* Statistics */}
                <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div key={stat.label} className={`${cardStyle} p-5`}>
                                <div className="flex items-center justify-between">
                                    <p className={`text-sm font-medium ${mutedText}`}>
                                        {stat.label}
                                    </p>

                                    <span
                                        className={`flex h-10 w-10 items-center justify-center ${stat.bg} ${stat.color}`}
                                    >
                                        <Icon size={20} />
                                    </span>
                                </div>

                                <p className={`mt-4 text-3xl font-bold ${headingText}`}>
                                    {stat.value}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Progress */}
                <section className={`${cardStyle} mb-7 p-5 sm:p-6`}>
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h2 className={`font-semibold ${headingText}`}>
                                Overall Progress
                            </h2>

                            <p className={`mt-1 text-sm ${mutedText}`}>
                                Your completed tasks so far
                            </p>
                        </div>

                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            {progress}%
                        </span>
                    </div>

                    <div className="h-2 overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <div
                            className="h-full bg-blue-600 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <p className={`mt-3 text-xs ${mutedText}`}>
                        {completedCount} of {tasks.length} tasks completed
                    </p>
                </section>

                {/* Task Manager */}
                <section className={cardStyle}>
                    <div className="border-b border-gray-200 p-5 dark:border-gray-800 sm:p-6">
                        <h2 className={`text-lg font-bold ${headingText}`}>
                            Manage Tasks
                        </h2>

                        <p className={`mt-1 text-sm ${mutedText}`}>
                            Add a task and start making progress.
                        </p>

                        <form
                            onSubmit={addTask}
                            className="mt-5 flex flex-col gap-3 sm:flex-row"
                        >
                            <input
                                type="text"
                                value={taskInput}
                                onChange={(e) => setTaskInput(e.target.value)}
                                placeholder="What do you need to do?"
                                maxLength={120}
                                className="min-w-0 flex-1 border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-blue-950"
                            />

                            <button
                                type="submit"
                                disabled={!taskInput.trim()}
                                className="inline-flex items-center justify-center gap-2 bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <Plus size={18} />
                                Add Task
                            </button>
                        </form>
                    </div>

                    {/* Filters and Search */}
                    <div className="flex flex-col gap-4 border-b border-gray-200 p-5 dark:border-gray-800 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-wrap gap-2">
                            {[
                                { id: "all", label: "All Tasks", count: tasks.length },
                                { id: "pending", label: "Pending", count: pendingCount },
                                { id: "completed", label: "Completed", count: completedCount },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setFilter(item.id)}
                                    className={`px-3 py-2 text-sm font-medium transition ${
                                        filter === item.id
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                    }`}
                                >
                                    {item.label}
                                    <span className="ml-2 opacity-75">
                                        {item.count}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full lg:max-w-xs">
                            <Search
                                size={17}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search tasks..."
                                className="w-full border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500"
                            />
                        </div>
                    </div>

                    {/* Task List */}
                    <div>
                        {filteredTasks.length > 0 ? (
                            <div className="divide-y divide-gray-100 dark:divide-gray-800">
                                {filteredTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className="group flex items-center gap-3 px-5 py-4 transition hover:bg-gray-50 dark:hover:bg-gray-800/50 sm:px-6"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleTask(task.id)}
                                            aria-label={
                                                task.completed
                                                    ? "Mark as pending"
                                                    : "Mark as completed"
                                            }
                                            className={`shrink-0 transition ${
                                                task.completed
                                                    ? "text-green-600"
                                                    : "text-gray-300 hover:text-blue-600 dark:text-gray-600 dark:hover:text-blue-400"
                                            }`}
                                        >
                                            {task.completed ? (
                                                <CheckCircle2 size={21} />
                                            ) : (
                                                <Circle size={21} />
                                            )}
                                        </button>

                                        <div className="min-w-0 flex-1">
                                            <p
                                                className={`break-words text-sm font-medium ${
                                                    task.completed
                                                        ? "text-gray-400 line-through"
                                                        : "text-gray-800 dark:text-gray-200"
                                                }`}
                                            >
                                                {task.title}
                                            </p>

                                            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                                                Added{" "}
                                                {new Date(task.createdAt).toLocaleDateString("en-IN")}
                                            </p>
                                        </div>

                                        <span
                                            className={`hidden px-2.5 py-1 text-xs font-medium sm:inline-block ${
                                                task.completed
                                                    ? "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-400"
                                                    : "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400"
                                            }`}
                                        >
                                            {task.completed ? "Completed" : "Pending"}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() => deleteTask(task.id)}
                                            aria-label="Delete task"
                                            className="p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40"
                                        >
                                            <Trash2 size={17} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center px-5 py-16 text-center">
                                <span className="mb-4 flex h-14 w-14 items-center justify-center bg-gray-100 text-gray-400 dark:bg-gray-800">
                                    {search ? <Search size={25} /> : <ListTodo size={25} />}
                                </span>

                                <h3 className={`font-semibold ${headingText}`}>
                                    {search
                                        ? "No matching tasks"
                                        : filter === "completed"
                                            ? "No completed tasks yet"
                                            : filter === "pending"
                                                ? "No pending tasks"
                                                : "No tasks yet"}
                                </h3>

                                <p className={`mt-2 max-w-sm text-sm ${mutedText}`}>
                                    {search
                                        ? "Try searching with a different keyword."
                                        : "Add your first task above and it will appear here."}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* List Footer */}
                    {tasks.length > 0 && (
                        <div className="flex flex-col justify-between gap-3 border-t border-gray-200 px-5 py-4 dark:border-gray-800 sm:flex-row sm:items-center sm:px-6">
                            <p className={`text-xs ${mutedText}`}>
                                Showing {filteredTasks.length} of {tasks.length} tasks
                            </p>

                            {completedCount > 0 && (
                                <button
                                    type="button"
                                    onClick={clearCompleted}
                                    className="inline-flex items-center gap-2 text-xs font-medium text-red-600 hover:text-red-700"
                                >
                                    <X size={14} />
                                    Clear completed tasks
                                </button>
                            )}
                        </div>
                    )}
                </section>

                <div className={`mt-6 flex items-start gap-2 text-xs ${mutedText}`}>
                    <Check size={15} className="mt-0.5 shrink-0 text-green-600" />
                    Your tasks are saved automatically in this browser.
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
