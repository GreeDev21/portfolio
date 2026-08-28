---
title: "LazyList · Your Personal Collection"
description: "A minimalist, touch-friendly web application to catalog books, games, movies, series, and more."
publishDate: "2026-08-27"
tags: ["FastAPI", "SQLite", "SQLModel", "Vanilla JS", "Clean Architecture"]
img: "/assets/lazy-list.png"
img_alt: "LazyList claymorphic library catalog dashboard showing media covers"
github: "https://github.com/GreeDev21/LazyList"
---

<p data-i18n="work.lazylist.intro">LazyList is a minimalist and tactile web application designed to catalog and manage your personal library of games, movies, series, books, and web resources in one place.</p>

<h2 data-i18n="work.lazylist.features.title">Core Features</h2>
<ul>
  <li data-i18n="work.lazylist.features.f1">Virtual Cover Shelf: A beautiful, claymorphic virtual shelf displaying your media covers.</li>
  <li data-i18n="work.lazylist.features.f2">Auto-Metadata Resolution: Fetch titles and details automatically by entering a URL or searching.</li>
  <li data-i18n="work.lazylist.features.f3">Bilingual Support: Localized in English and Spanish with a client toggle.</li>
  <li data-i18n="work.lazylist.features.f4">Local Draft Autosave: Autosaves content locally to prevent progress loss.</li>
</ul>

<h2 data-i18n="work.lazylist.architecture.title">Architecture & Design</h2>
<p data-i18n="work.lazylist.architecture.desc">The project follows the principles of Clean Architecture (Hexagonal Architecture), dividing the codebase into decoupled layers to facilitate unit testing, network mock-ups, and ease of maintenance.</p>

<h2 data-i18n="work.lazylist.stack.title">Tech Stack</h2>
<ul>
  <li data-i18n="work.lazylist.stack.fe"><strong>Frontend:</strong> Vanilla HTML5, CSS (Pure Claymorphic Design), and structured JS modules.</li>
  <li data-i18n="work.lazylist.stack.be"><strong>Backend:</strong> FastAPI (Python 3.14) REST API.</li>
  <li data-i18n="work.lazylist.stack.db"><strong>Database:</strong> SQLite with SQLModel (SQLAlchemy & Pydantic).</li>
  <li data-i18n="work.lazylist.stack.int"><strong>Integrations:</strong> Decoupled API clients for TMDB, AniList, Google Books, IGDB, ComicVine, and YouTube.</li>
</ul>
