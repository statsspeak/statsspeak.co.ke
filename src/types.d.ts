interface Env {
	SS_CONTENT_DB: D1Database;
}

interface UserSession {
	userId: string;
	sessionId: string;
	email: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dict<T = any> = Record<string, T>;
type PropsWithChildren = Dict & {
	children: Snippet;
};
type Nullable<T> = T | null;
