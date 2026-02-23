<script lang="ts">
	import { CONTACT_EMAIL, STEAM_URL } from '$lib/utils/constants.js';
	import { page } from '$app/state';

	import type { Dictionary } from '$lib/types/i18n.ts';

	let t = $derived(page.data.t as Dictionary);
	let lang = $derived(page.data.lang);
	const link = (path: string) => `/${lang}${path}`;
</script>

<div class="policy-content">
	<h2>Introducción</h2>
	<p>
		Esta Política de Privacidad describe cómo <a href="https://store.steampowered.com/privacy_agreement/" target="_blank" rel="noopener noreferrer">Steam</a> y
		<strong>Los Super Ninis</strong> (en adelante, <strong>“nosotros”</strong>) tratamos ciertos datos cuando juegas a
		<strong>Symbiosis</strong> (el <strong>“Juego”</strong>), distribuido a través de Steam.
	</p>
	<p>
		El objetivo de esta política es explicarte qué datos se recopilan, para qué se usan, con qué terceros se comparten y qué
		derechos tienes sobre tus datos.
	</p>

	<h2>Ámbito</h2>
	<p>Esta política aplica a:</p>
	<ol>
		<li>El uso del videojuego <strong>Symbiosis</strong> en PC a través de Steam.</li>
		<li>La telemetría/analítica de uso del Juego a través de <strong>Aptabase</strong>.</li>
		<li>El guardado en la nube del Juego mediante <strong>Steam Cloud</strong> (Valve).</li>
	</ol>

	<p>No aplica a:</p>
	<ol>
		<li>
			La cuenta de Steam, pagos, amigos, logros u otros servicios propios de Valve (consulta la política de privacidad de
			Valve/Steam).
		</li>
		<li>Webs o servicios de terceros enlazados desde el Juego.</li>
	</ol>

	<h2>Qué datos recopilamos en Symbiosis</h2>

	<h3>Datos de uso (Aptabase)</h3>
	<p>
		Cuando juegas a Symbiosis, recopilamos <strong>datos de uso</strong> para entender el rendimiento del Juego, detectar
		errores y mejorar la experiencia. Estos datos se recopilan mediante <strong>Aptabase</strong>.
	</p>
	<p>De forma general, esto puede incluir:</p>
	<ol>
		<li>Eventos de uso (por ejemplo: apertura del juego, pantallas visitadas, acciones dentro del juego).</li>
		<li>Marca temporal aproximada del evento.</li>
		<li>
			Metadatos técnicos del dispositivo/aplicación (por ejemplo: versión del juego, sistema operativo, arquitectura, idioma,
			resolución o identificadores técnicos no directamente identificativos).
		</li>
		<li>Información de fallos/errores (por ejemplo: códigos de error y contexto técnico).</li>
	</ol>
	<p>
		<strong>No buscamos recopilar datos personales directos</strong> como tu nombre real, correo, dirección postal o contenido
		de tus archivos. Si en algún caso un dato pudiera considerarse personal por el contexto, lo tratamos con las mismas
		precauciones descritas en esta política.
	</p>

	<h3>Datos de guardado (Steam Cloud / Valve)</h3>
	<p>
		Symbiosis utiliza <strong>Steam Cloud</strong> para sincronizar tus partidas guardadas entre dispositivos. Esto significa
		que los datos de guardado se almacenan y gestionan en la infraestructura de <strong>Valve</strong> asociada a tu cuenta de
		Steam.
	</p>
	<p>
		Nosotros no necesitamos conocer tu identidad real para que esta función opere. La gestión de estos datos (incluyendo
		retención y seguridad) depende de Steam/Valve y de tu configuración de Steam Cloud.
	</p>

	<h2>Para qué usamos los datos</h2>
	<p>Usamos los datos recopilados para:</p>
	<ol>
		<li>Analizar el uso del Juego (métricas agregadas) y priorizar mejoras.</li>
		<li>Detectar errores, problemas de rendimiento y estabilidad.</li>
		<li>Mejorar el equilibrio, la usabilidad y el contenido de Symbiosis.</li>
	</ol>

	<h2>Base de legitimación</h2>
	<p>
		Tratamos los datos de uso del Juego principalmente sobre la base de nuestro <strong>interés legítimo</strong> en mejorar
		Symbiosis y mantenerlo estable y seguro. Si en el futuro implementamos mecanismos de consentimiento u opciones de
		desactivación (“opt-out”), los reflejaremos en esta política y/o en el propio Juego.
	</p>

	<h2>Retención de datos</h2>
	<p>
		Conservamos los datos de analítica (Aptabase) durante el tiempo necesario para fines estadísticos y de mejora del Juego.
		Revisamos periódicamente la necesidad de conservarlos.
	</p>
	<p>
		Los datos de guardado en Steam Cloud se conservan según las políticas y configuración de Steam/Valve y las opciones de tu
		cuenta.
	</p>

	<h2>Servicios de terceros</h2>
	<p>Symbiosis utiliza los siguientes servicios de terceros:</p>
	<ol>
		<li>
			<strong>Steam / Valve</strong> (distribución del juego y Steam Cloud):
			<a href="https://store.steampowered.com/privacy_agreement/" target="_blank" rel="noopener noreferrer"
			>Política de privacidad de Steam</a
			>
		</li>
		<li>
			<strong>Aptabase</strong> (analítica de uso):
			<a href="https://aptabase.com/legal/privacy" target="_blank" rel="noopener noreferrer"
			>Política de privacidad de Aptabase</a
			>
		</li>
	</ol>
	<p>
		No vendemos tus datos. No compartimos los datos de analítica con terceros para marketing dirigido por nuestra parte.
	</p>

	<h2>Tus derechos</h2>
	<p>Dependiendo de tu jurisdicción, puedes tener derecho a:</p>
	<ol>
		<li>Acceder a tus datos.</li>
		<li>Rectificar datos inexactos.</li>
		<li>Solicitar la eliminación de datos (cuando aplique).</li>
		<li>Limitar u oponerte a ciertos tratamientos.</li>
		<li>Portabilidad de los datos (cuando aplique).</li>
	</ol>
	<p>
		Para ejercer estos derechos, contáctanos en <a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>. Ten en cuenta que la
		analítica puede estar agregada o pseudonimizada y puede que no siempre podamos vincularla a una persona concreta sin
		información adicional. Aun así, revisaremos tu solicitud y haremos lo razonable para ayudarte.
	</p>

	<h2>Privacidad de menores</h2>
	<p>
		No recopilamos de forma consciente información personal de menores. Si crees que un menor nos ha proporcionado datos
		personales, escríbenos a <a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a> e intentaremos eliminar esa información en
		la medida en que sea posible.
	</p>

	<h2>Cambios en esta política</h2>
	<p>
		Podemos actualizar esta Política de Privacidad. Si hacemos cambios, actualizaremos esta página para reflejar la nueva
		versión.
	</p>

	<h2>Contacto</h2>
	<p>
		Si tienes preguntas sobre esta Política de Privacidad o sobre cómo tratamos los datos en Symbiosis, contáctanos en
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.
	</p>

	<h2>Derechos de privacidad en California</h2>
	<p>
		Si eres residente de California, la ley puede otorgarte derechos adicionales. Para más información, visita
		<a href={link('/ccpa')}>esta página</a>.
	</p>
</div>

<style>
    /* Policy Content Styling */
    .policy-content {
        padding: 2rem;
        font-family: "Fredoka", sans-serif;
        color: var(--nini-black);
        line-height: 1.6;
        font-size: 1.1rem;
    }

    .policy-content h2 {
        font-family: "Luckiest Guy", cursive;
        font-size: 2rem;
        color: var(--nini-red);
        margin-top: 3rem;
        margin-bottom: 1rem;
        border-bottom: 2px dashed #ddd;
        padding-bottom: 0.5rem;
    }

    .policy-content h2:first-child {
        margin-top: 0;
    }

    .policy-content h3 {
        font-family: "Luckiest Guy", cursive;
        font-size: 1.5rem;
        color: var(--nini-blue);
        margin-top: 2rem;
        margin-bottom: 0.5rem;
    }

    .policy-content p {
        margin-bottom: 1rem;
    }

    .policy-content strong {
        color: var(--nini-red);
    }

    .policy-content a {
        color: var(--nini-blue);
        text-decoration: underline;
        font-weight: bold;
    }
    .policy-content a:hover {
        color: var(--nini-red);
    }

    .policy-content ol {
        list-style-type: decimal;
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;
        background: #f9f9f9;
        padding: 1rem 1rem 1rem 2.5rem;
        border-radius: 8px;
        border-left: 4px solid var(--nini-beige);
    }

    .policy-content li {
        margin-bottom: 0.5rem;
    }
    .policy-content li:last-child {
        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        .page-title {
            font-size: 5rem;
        }
        .policy-content {
            padding: 4rem;
        }
    }
</style>