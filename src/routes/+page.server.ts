import type {Actions} from './$types.ts';
import {addSubscriber} from '$lib/server/add-subscriber.ts';
import {sendConfirmationEmail} from '$lib/server/send-confirmation-email.ts';
import {_activeLocale} from "$lib/lang/i18n.ts";

type ActionResponse = {
    success: boolean;
    error?: string;
};

export const actions: Actions = {
    default: async ({ request }): Promise<ActionResponse> => {
        const data = await request.formData();
        const email = data.get('email');

        if (!email || typeof email !== 'string') {
            return { success: false, error: 'Email field is required.' };
        }

        try {
            await addSubscriber({
                email,
                name: 'Unknown',
                status: 'enabled',
                lists: [2],
                attribs: {
                    city: getLocation(),
                    spoken_languages: ["_activeLocale"]
                },
                preconfirm_subscriptions: true,
            });
            await sendConfirmationEmail({
                subscriber_email: email,
                template_id: 6
            });
            return { success: true };
        } catch (err: any) {
            return { success: false, error: err.message ?? 'Unexpected error' };
        }
    }
};


function getLocation() {
    return 'Unknown';
}