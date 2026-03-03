import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import { contact } from '../data/portfolio';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const formRef = useRef(null);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Name is required.';
        if (!form.email.trim()) e.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
        if (!form.subject.trim()) e.subject = 'Subject is required.';
        if (!form.message.trim()) e.message = 'Message is required.';
        return e;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
        if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const inputBase =
        'w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent';
    const inputNormal = 'border-slate-200 dark:border-slate-700';
    const inputError = 'border-red-400 dark:border-red-600';

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        Get in Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                        {contact.title}
                    </h2>
                    <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm max-w-xl">{contact.text}</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="space-y-6"
                    >
                        <ContactInfoItem
                            icon={<Mail size={18} />}
                            label="Email"
                            value={contact.email}
                            href={`mailto:${contact.email}`}
                        />
                        <ContactInfoItem
                            icon={<Linkedin size={18} />}
                            label="LinkedIn"
                            value={contact.linkedinLabel}
                            href={contact.linkedin}
                            external
                        />
                        <ContactInfoItem
                            icon={<MapPin size={18} />}
                            label="Location"
                            value={contact.location}
                        />

                        <div className="mt-8 p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
                            <p className="text-sm text-indigo-700 dark:text-indigo-300 font-medium">
                                {contact.footerNote}
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        {submitted ? (
                            <div className="h-full flex items-center justify-center">
                                <div className="text-center py-12">
                                    <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                        Thanks! I'll get back to you.
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Your message has been received.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                                <FormField
                                    label="Name"
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                    placeholder="Your name"
                                    className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                                />
                                <FormField
                                    label="Email"
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                    placeholder="your@email.com"
                                    className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                                />
                                <FormField
                                    label="Subject"
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    value={form.subject}
                                    onChange={handleChange}
                                    error={errors.subject}
                                    placeholder="What's this about?"
                                    className={`${inputBase} ${errors.subject ? inputError : inputNormal}`}
                                />
                                <div>
                                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                                        Message <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or opportunity..."
                                        className={`${inputBase} ${errors.message ? inputError : inputNormal} resize-none`}
                                    />
                                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl
                             bg-indigo-600 text-white font-semibold text-sm
                             hover:bg-indigo-700 active:scale-95 transition-all duration-200
                             shadow-lg shadow-indigo-500/25 cursor-pointer"
                                >
                                    <Send size={15} />
                                    Send Message
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function FormField({ label, id, name, type, value, onChange, error, placeholder, className }) {
    return (
        <div>
            <label htmlFor={id} className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                {label} <span className="text-red-400">*</span>
            </label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />
            {error && <p id={`${id}-error`} className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}

function ContactInfoItem({ icon, label, value, href, external }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                {icon}
            </div>
            <div>
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{label}</p>
                {href ? (
                    <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                        {value}
                    </a>
                ) : (
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{value}</p>
                )}
            </div>
        </div>
    );
}
