export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
 }

export interface UserDoc extends User {
    username: string;
}
