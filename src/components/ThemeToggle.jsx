import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ dark, onToggle }) {
    return (
        <button
            onClick={onToggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800
                 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400
                 hover:border-indigo-300 dark:hover:border-indigo-600
                 transition-all duration-200 cursor-pointer"
        >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
