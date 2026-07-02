# Plan: Contacto funcional con API route

## Objetivo
Reemplazar el link `mailto:` del ContactCTA por un formulario funcional que envíe emails usando una API route en Astro + Resend, con deploy en Vercel.

---

## Prerrequisitos

- [x] Cuenta en [Resend](https://resend.com) — API key obtenida
- [x] Proyecto conectado a GitHub
- [ ] Cuenta en [Vercel](https://vercel.com) conectada al repo *(lo maneja el colega)*

---

## Paso 1: Configurar SSR con adapter de Vercel

```bash
npx astro add vercel
```

Esto instala `@astrojs/vercel` y modifica `astro.config.mjs` para usar modo server.

- [x] Ejecutar `npx astro add vercel`
- [x] Verificar que `astro.config.mjs` tenga `adapter: vercel()`
- [x] Verificar que el output sea `'server'`
- [x] Probar build: `astro build` (pasa correctamente — 22.74s, 0 errores)

---

## Paso 2: Crear la API route

Archivo: `src/pages/api/contact.ts`

- [x] Crear archivo `src/pages/api/contact.ts`
- [x] Endpoint POST que recibe `{ name, email, message }`
- [x] Validar datos (validación manual)
- [x] Responder con `200 Success` o `400 Bad Request`
- [ ] Probar local: `curl -X POST http://localhost:4321/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","message":"Hola"}'`

---

## Paso 3: Integrar Resend

- [x] Instalar `resend`: `npm install resend`
- [x] En la API route, importar `Resend` y enviar email
- [x] Usar `RESEND_API_KEY` como variable de entorno (segura para server-side)
- [x] Crear `.env.example` con `RESEND_API_KEY=`, `FROM_EMAIL=`, `TO_EMAIL=`
- [ ] Probar local con la API key real

---

## Paso 4: Modificar ContactCTA

Archivo: `src/components/ContactCTA.astro`

- [x] Reemplazar el link `mailto:` por un formulario HTML con fetch JS
- [x] Inputs: name, email, message
- [x] Botón de envío
- [x] Manejo de estados: enviando, éxito, error (con feedback visual)
- [x] Traducciones para los labels y mensajes (EN/ES)
- [x] Preservar el diseño actual (estilos, responsividad)

---

## Paso 5: Traducciones

Archivo: `src/i18n/translations.ts`

- [x] Agregar claves:
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
