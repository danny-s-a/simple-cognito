import decode from 'jwt-decode';

export function getUser(token: string, usernameKey: string = 'email'): string {
    const decodedToken = decode(token) as any;

    if (decodedToken[usernameKey]) {
        return decodedToken[usernameKey];
    }

    throw new Error(`Key "${usernameKey}" for username does not exist on token`);
}
