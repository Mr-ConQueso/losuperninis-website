import {LISTMONK_API, LISTMONK_KEY, LISTMONK_USER} from "$lib/server/server-constants.js";

type SubscriberAttributes = {
    city?: string;
    projects?: number;
    spoken_languages?: string[];
};

type NewSubscriber = {
    email: string;
    name: string;
    status?: 'enabled' | 'disabled';
    lists: number[];
    attribs?: SubscriberAttributes;
    preconfirm_subscriptions: boolean;
};

type SubscriberResponse = {
    data: {
        id: number;
        created_at: string;
        updated_at: string;
        uuid: string;
        email: string;
        name: string;
        attribs: SubscriberAttributes;
        status: string;
        lists: number[];
    };
};

export async function addSubscriber(subscriber: NewSubscriber): Promise<SubscriberResponse> {
    const apiUrl = LISTMONK_API + '/api/subscribers';
    const auth = btoa(`${LISTMONK_USER}:${LISTMONK_KEY}`);

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...subscriber,
            status: subscriber.status ?? 'enabled'
        })
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Failed to add subscriber: ${response.status} ${error}`);
    }

    return await response.json() as SubscriberResponse;
}
