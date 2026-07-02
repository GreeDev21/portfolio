import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json();
		const { name, email, message } = body;

		// Validación básica
		if (!name || !email || !message) {
			return new Response(
				JSON.stringify({ error: 'Todos los campos son obligatorios' }),
				{ status: 400, headers: { 'Content-Type': 'application/json' } },
			);
		}

		if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
			return new Response(
				JSON.stringify({ error: 'Formato inválido' }),
				{ status: 400, headers: { 'Content-Type': 'application/json' } },
			);
		}

		if (name.length > 100 || email.length > 200 || message.length > 5000) {
			return new Response(
				JSON.stringify({ error: 'Algún campo excede el límite de caracteres' }),
				{ status: 400, headers: { 'Content-Type': 'application/json' } },
			);
		}

		await resend.emails.send({
			from: import.meta.env.FROM_EMAIL,
			to: import.meta.env.TO_EMAIL,
			subject: `Nuevo mensaje de ${name} — Portfolio`,
			html: `
				<h2>Nuevo mensaje desde el portfolio</h2>
				<p><strong>Nombre:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Mensaje:</strong></p>
				<p>${message}</p>
			`,
		});

		return new Response(
			JSON.stringify({ success: true }),
			{ status: 200, headers: { 'Content-Type': 'application/json' } },
		);
	} catch (error) {
		console.error('Error sending email:', error);
		return new Response(
			JSON.stringify({ error: 'Error al enviar el mensaje' }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } },
		);
	}
};
