import {LISTMONK_API, LISTMONK_KEY, LISTMONK_USER} from "$lib/server/server-constants.js";

type EmailPayload = {
    subscriber_email: string;
    template_id: number;
    data?: Record<string, unknown>;
    content_type?: 'html' | 'text';
};

export async function sendConfirmationEmail(payload: EmailPayload): Promise<void> {
    const apiUrl = LISTMONK_API + '/api/tx';
    const authHeader = `Basic ${btoa(`${LISTMONK_USER}:${LISTMONK_KEY}`)}`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            ...payload,
            content_type: payload.content_type ?? 'html'
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to send email: ${response.status} ${errorText}`);
    }
}
