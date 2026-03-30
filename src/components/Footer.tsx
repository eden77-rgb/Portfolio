import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <section id="footer" className="pb-16 px-4">
            <div className="max-w-5xl mx-auto mt-16">

                <div className="pt-8 border-t border-emerald-500/20 text-center">

                    <div className="flex justify-center gap-8 mb-6">
                        <a
                            href="https://github.com/eden77-rgb/"
                            target='_blank'
                            className="text-gray-400 hover:text-emerald-400 transition-all hover:scale-110"
                            aria-label="GitHub"
                        >
                            <Github size={22} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/eden-vandewatyne/"
                            target='_blank'
                            className="text-gray-400 hover:text-emerald-400 transition-all hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={22} />
                        </a>

                        <a
                            href="mailto:eden.vandewatyne11@gmail.com"
                            target='_blank'
                            className="text-gray-400 hover:text-emerald-500 transition-colors duration-300"
                        >
                            <Mail size={24} />
                        </a>
                    </div>

                    <div className="text-gray-500 text-sm tracking-wide">
                        <p>&copy; 2026 <span className="text-gray-300">Eden Vandewatyne</span>. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer