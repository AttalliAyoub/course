import { User as FirebaseUser } from 'firebase/app';

export interface User {
    user?: FirebaseUser;
    uid: string;
    email: string;
    photoURL: string;
    displayName: string;
    phoneNumber: string,
    emailVerified: boolean,
}