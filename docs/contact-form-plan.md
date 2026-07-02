# Plan: Contacto funcional con API route

## Objetivo
Reemplazar el link `mailto:` del ContactCTA por un formulario funcional que envíe emails usando una API route en Astro + Resend, con deploy en Vercel.

---

## Prerrequisitos

- [ ] Cuenta en [Resend](https://resend.com) — API key obtenida
- [ ] Proyecto conectado a GitHub
- [ ] Cuenta en [Vercel](https://vercel.com) conectada al repo

---

## Paso 1: Configurar SSR con adapter de Vercel

```bash
npx astro add vercel
```

Esto instala `@astrojs/vercel` y modifica `astro.config.mjs` para usar modo server.

- [ ] Ejecutar `npx astro add vercel`
- [ ] Verificar que `astro.config.mjs` tenga `adapter: vercel()`
- [ ] Verificar que el output sea `'server'`
- [ ] Probar build: `astro build` (debe generar en `.vercel/output/`)

---

## Paso 2: Crear la API route

Archivo: `src/pages/api/contact.ts`

- [ ] Crear archivo `src/pages/api/contact.ts`
- [ ] Endpoint POST que recibe `{ name, email, message }`
- [ ] Validar datos (zod o validación manual)
- [ ] Responder con `204 Success` o `400 Bad Request`
- [ ] Probar local: `curl -X POST http://localhost:4321/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","message":"Hola"}'`

---

## Paso 3: Integrar Resend

- [ ] Instalar `resend`: `npm install resend`
- [ ] En la API route, importar `Resend` y enviar email
- [ ] Usar `RESEND_API_KEY` como variable de entorno (segura para server-side)
- [ ] Crear `.env.example` con `RESEND_API_KEY=`
- [ ] Probar local con la API key real

---

## Paso 4: Modificar ContactCTA

Archivo: `src/components/ContactCTA.astro`

- [ ] Reemplazar el link `mailto:` por un formulario HTML (`<form method="POST" action="/api/contact">`)
- [ ] Inputs: name, email, message
- [ ] Botón de envío
- [ ] Manejo de estados: enviando, éxito, error (con feedback visual)
- [ ] Traducciones para los labels y mensajes (EN/ES)
- [ ] Preservar el diseño actual (estilos, responsividad)

---

## Paso 5: Traducciones

Archivo: `src/i18n/translations.ts`

- [ ] Agregar claves:
  - `contact.name` — "Name" / "Nombre"
  - `contact.email` — "Email" / "Correo"
  - `contact.message` — "Message" / "Mensaje"
  - `contact.send` — "Send" / "Enviar"
  - `contact.sending` — "Sending..." / "Enviando..."
  - `contact.success` — "Message sent!" / "¡Mensaje enviado!"
  - `contact.error` — "Something went wrong" / "Algo salió mal"

---

## Paso 6: Deploy a Vercel

- [ ] Push a GitHub
- [ ] Importar repo en Vercel
- [ ] Agregar `RESEND_API_KEY` en Environment Variables de Vercel
- [ ] Deploy
- [ ] Verificar que la API route funcione en producción: `curl -X POST https://tudominio.vercel.app/api/contact`

---

## Verificación final

- [ ] El formulario envía mensajes correctamente
- [ ] Llega el email a la bandeja de entrada
- [ ] Los textos se traducen al cambiar idioma (EN/ES)
- [ ] El diseño se ve bien en mobile y desktop
- [ ] El resto del sitio sigue funcionando sin cambios
