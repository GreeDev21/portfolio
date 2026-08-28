export type Lang = 'en' | 'es';

export const translations: Record<string, Record<string, string>> = {
	en: {
		'nav.home': 'Home',
		'nav.work': 'Work',
		'nav.about': 'About',
		'site.title': 'GreeDev',
		'hero.title': 'Hello, my name is Agustín Burgos',
		'hero.tagline': 'Frontend Designer & Developer',
		'hero.pill.dev': 'Design',
		'hero.pill.speaker': 'Develop',
		'hero.pill.writer': 'UX',
		'skills.heading.1': 'Frontend Architecture',
		'skills.desc.1':
			'Building scalable, maintainable interfaces with React and Astro.',
		'skills.heading.2': 'UI/UX Design',
		'skills.desc.2':
			'Crafting intuitive, accessible experiences that users love.',
		'skills.heading.3': 'Creative Engineering',
		'skills.desc.3':
			'Bridging design and code to bring ideas to life.',
		'work.section.title': 'Selected Work',
		'work.section.desc': 'Take a look below at some of my featured projects.',
		'work.view_all': 'View All',
		'work.page.title': 'My Work | GreeDev',
		'work.page.tagline': 'See my most recent projects below.',
		'work.page.desc': "GreeDev's portfolio projects",
		'about.title': 'About | GreeDev',
		'about.tagline': 'Thanks for stopping by. Read below to learn more about me.',
		'about.desc': "About GreeDev's background and skills",
		'about.bg.title': 'Background',
		'about.bg.p1':
			"I'm a frontend designer & developer who loves turning complex ideas into clean, intuitive interfaces. I work at the intersection of design and code — where pixels meet logic and user experience drives every decision.",
		'about.bg.p2':
			'I specialize in building responsive, accessible web applications with modern frameworks like React. My workflow blends UI/UX design principles with solid frontend architecture: component libraries, state management, and performance optimization.',
		'about.bg.p3':
			'I am currently studying Systems Analysis, which gives me a strong foundation in algorithmic thinking and software engineering. When I am not coding, you will find me exploring new design trends, contributing to open source, or developing my million-dollar ideas.',
		'about.edu.title': 'Education',
		'about.edu.p1': 'Systems Analysis',
		'about.skills.title': 'Skills',
		'about.skills.p1': 'TypeScript · React · Astro · Node.js · Clean Architecture · TDD · SDD · UI/UX Design · Figma · Responsive Design · Accessibility · State Management',
		'footer.copyright': '© {year} Agustín Burgos',
		'cta.heading': 'Interested in working together?',
		'cta.button': 'Send Me a Message',

		'contact.name': 'Name',
		'contact.email': 'Email',
		'contact.message': 'Message',
		'contact.send': 'Send Message',
		'contact.sending': 'Sending...',
		'contact.success': 'Message sent! I\'ll get back to you soon.',
		'contact.error': 'Something went wrong. Please try again.',

		'lang.en': 'English',
		'lang.es': 'Español',

		'exp.title': 'Experience',

		'exp.webxpert.company': 'WebXpert',
		'exp.webxpert.role': 'Co-founder · Design & Frontend',
		'exp.webxpert.desc': 'Building digital products from concept to deployment, leading design and frontend development.',
		'exp.webxpert.period': '2025 — Present',

		'exp.silicon.company': 'Silicon Misiones',
		'exp.silicon.role': 'Intern · Design & Frontend',
		'exp.silicon.desc': 'Developed user-facing interfaces for "Mi Futuro Misiones", a government education platform, using Next.js, Prisma, and TailwindCSS, as part of a 4-person team.',
		'exp.silicon.period': 'May — Jul 2026',

		'edu.title': 'Education',
		'edu.detail': 'Tecnicatura en Análisis de Sistemas',
		'edu.institute': 'Instituto Superior Combate de Mbororé',
		'edu.period': '2024 — Present',
		'work.detail.back': 'Work',
		'work.detail.github': 'View on GitHub',
		'work.lazy-list.title': 'LazyList · Your Personal Collection',
		'work.lazy-list.description': 'A minimalist, touch-friendly web application to catalog books, games, movies, and more.',
		'work.lazylist.intro': 'LazyList is a minimalist and tactile web application designed to catalog and manage your personal library of games, movies, series, books, and web resources in one place.',
		'work.lazylist.features.title': 'Core Features',
		'work.lazylist.features.f1': 'Virtual Cover Shelf: A beautiful, claymorphic virtual shelf displaying your media covers.',
		'work.lazylist.features.f2': 'Auto-Metadata Resolution: Fetch titles and details automatically by entering a URL or searching.',
		'work.lazylist.features.f3': 'Bilingual Support: Localized in English and Spanish with a client toggle.',
		'work.lazylist.features.f4': 'Local Draft Autosave: Autosaves content locally to prevent progress loss.',
		'work.lazylist.architecture.title': 'Architecture & Design',
		'work.lazylist.architecture.desc': 'The project follows the principles of Clean Architecture (Hexagonal Architecture), dividing the codebase into decoupled layers to facilitate unit testing, network mock-ups, and ease of maintenance.',
		'work.lazylist.stack.title': 'Tech Stack',
		'work.lazylist.stack.fe': 'Frontend: Vanilla HTML5, CSS (Pure Claymorphic Design), and structured JS modules.',
		'work.lazylist.stack.be': 'Backend: FastAPI (Python 3.14) REST API.',
		'work.lazylist.stack.db': 'Database: SQLite with SQLModel (SQLAlchemy & Pydantic).',
		'work.lazylist.stack.int': 'Integrations: Decoupled API clients for TMDB, AniList, Google Books, IGDB, ComicVine, and YouTube.',
	},
	es: {
		'nav.home': 'Inicio',
		'nav.work': 'Trabajos',
		'nav.about': 'Sobre mí',
		'site.title': 'GreeDev',
		'hero.title': 'Hola, mi nombre es Agustín Burgos',
		'hero.tagline': 'Diseñador & Desarrollador Frontend',
		'hero.pill.dev': 'Diseño',
		'hero.pill.speaker': 'Desarrollo',
		'hero.pill.writer': 'UX',
		'skills.heading.1': 'Arquitectura Frontend',
		'skills.desc.1':
			'Construyendo interfaces escalables y mantenibles con React y Astro.',
		'skills.heading.2': 'Diseño UI/UX',
		'skills.desc.2':
			'Creando experiencias intuitivas y accesibles que los usuarios amen.',
		'skills.heading.3': 'Ingeniería Creativa',
		'skills.desc.3':
			'Uniendo diseño y código para dar vida a las ideas.',
		'work.section.title': 'Trabajos Destacados',
		'work.section.desc': 'Mirá algunos de mis proyectos destacados.',
		'work.view_all': 'Ver Todos',
		'work.page.title': 'Mis Trabajos | GreeDev',
		'work.page.tagline': 'Conocé mis proyectos más recientes.',
		'work.page.desc': 'Proyectos del portfolio de GreeDev',
		'about.title': 'Sobre Mí | GreeDev',
		'about.tagline': 'Gracias por pasar. Leé más abajo para conocerme mejor.',
		'about.desc': 'Sobre los antecedentes y habilidades de GreeDev',
		'about.bg.title': 'Trayectoria',
		'about.bg.p1':
			'Soy diseñador & desarrollador frontend apasionado por convertir ideas complejas en interfaces limpias e intuitivas. Trabajo en la intersección entre el diseño y el código — donde los píxeles se encuentran con la lógica y la experiencia de usuario guía cada decisión.',
		'about.bg.p2':
			'Me especializo en construir aplicaciones web responsivas y accesibles con frameworks modernos como React. Mi flujo de trabajo fusiona principios de diseño UI/UX con arquitectura frontend sólida: librerías de componentes, manejo de estado y optimización de rendimiento.',
		'about.bg.p3':
			'Actualmente estudio Análisis de Sistemas, lo que me da una base sólida en pensamiento algorítmico e ingeniería de software. Cuando no estoy codeando, me vas a encontrar explorando nuevas tendencias de diseño, contribuyendo a open source o desarrollando mis ideas millonarias.',
		'about.edu.title': 'Educación',
		'about.edu.p1': 'Análisis de Sistemas',
		'about.skills.title': 'Habilidades',
		'about.skills.p1': 'TypeScript · React · Astro · Node.js · Clean Architecture · TDD · SDD · UI/UX Design · Figma · Diseño Responsive · Accesibilidad · Manejo de Estado',
		'footer.copyright': '© {year} Agustín Burgos',
		'cta.heading': '¿Interesado en trabajar juntos?',
		'cta.button': 'Enviame un Mensaje',

		'contact.name': 'Nombre',
		'contact.email': 'Correo',
		'contact.message': 'Mensaje',
		'contact.send': 'Enviar Mensaje',
		'contact.sending': 'Enviando...',
		'contact.success': '¡Mensaje enviado!',
		'contact.error': 'Algo salió mal. Intentá de nuevo.',

		'lang.en': 'English',
		'lang.es': 'Español',

		'exp.title': 'Experiencia',

		'exp.webxpert.company': 'WebXpert',
		'exp.webxpert.role': 'Cofundador · Diseño & Frontend',
		'exp.webxpert.desc': 'Creando productos digitales desde el concepto hasta el deploy, liderando el diseño y el desarrollo frontend.',
		'exp.webxpert.period': '2025 — Actualidad',

		'exp.silicon.company': 'Silicon Misiones',
		'exp.silicon.role': 'Pasante · Diseño & Frontend',
		'exp.silicon.desc': 'Desarrollé interfaces de usuario para "Mi Futuro Misiones", una plataforma educativa gubernamental, usando Next.js, Prisma y TailwindCSS, en un equipo de 4 desarrolladores.',
		'exp.silicon.period': 'Mayo — Julio 2026',

		'edu.title': 'Educación',
		'edu.detail': 'Tecnicatura en Análisis de Sistemas',
		'edu.institute': 'Instituto Superior Combate de Mbororé',
		'edu.period': '2024 — Actualidad',
		'work.detail.back': 'Trabajos',
		'work.detail.github': 'Ver en GitHub',
		'work.lazy-list.title': 'LazyList · Tu Colección Personal',
		'work.lazy-list.description': 'Una aplicación web claymórfica y minimalista para catalogar libros, juegos, películas y más.',
		'work.lazylist.intro': 'LazyList es una aplicación web minimalista y táctil diseñada para catalogar y gestionar tu biblioteca personal de juegos, películas, series, anime, mangas, cómics, novelas, libros y recursos web en un solo lugar.',
		'work.lazylist.features.title': 'Funcionalidades Clave',
		'work.lazylist.features.f1': 'Estante Virtual de Portadas: Un estante virtual estético y con diseño claymórfico para lucir tus portadas.',
		'work.lazylist.features.f2': 'Resolución Automática de Metadatos: Obtené títulos y detalles de forma automática pegando una URL o buscando por título.',
		'work.lazylist.features.f3': 'Soporte Bilingüe: Traducido al español e inglés con un toggle de cliente.',
		'work.lazylist.features.f4': 'Autoguardado de Borradores: Guarda el borrador localmente para evitar pérdidas accidentales.',
		'work.lazylist.architecture.title': 'Arquitectura y Diseño',
		'work.lazylist.architecture.desc': 'El proyecto sigue los principios de Clean Architecture (Arquitectura Hexagonal) desacoplada en capas para facilitar el testeo unitario, simulación de red y mantenimiento del código.',
		'work.lazylist.stack.title': 'Stack Tecnológico',
		'work.lazylist.stack.fe': 'Frontend: Vanilla HTML5, CSS con diseño Claymorphic Puro y JavaScript estructurado en módulos.',
		'work.lazylist.stack.be': 'Backend: API REST en FastAPI (Python 3.14).',
		'work.lazylist.stack.db': 'Base de Datos: SQLite con SQLModel (ORM basado en Pydantic y SQLAlchemy).',
		'work.lazylist.stack.int': 'Integraciones: Clientes de API desacoplados para TMDB, AniList, Google Books, IGDB, ComicVine y YouTube.',
	},
};

export function t(key: string, lang: Lang, vars?: Record<string, string>): string {
	let text = translations[lang]?.[key] || translations['en']?.[key] || key;
	if (vars) {
		Object.entries(vars).forEach(([k, v]) => {
			text = text.replace(`{${k}}`, v);
		});
	}
	return text;
}
