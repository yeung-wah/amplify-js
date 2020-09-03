import { AuthSession } from './common';

export type FetchSession<T> = () => Promise<AuthSession<T>>;
