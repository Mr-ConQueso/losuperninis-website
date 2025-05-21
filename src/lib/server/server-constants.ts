import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(root, '../../../static/posts');

export const BLOGS_PATH = filePath;
export const LISTMONK_API = "https://listmonk.cheesylabs.net";
export const LISTMONK_USER = "cheesymonk";
export const LISTMONK_KEY = "7pyHceSJgZZCgYV06oVU2kYdRkFr5n3k";