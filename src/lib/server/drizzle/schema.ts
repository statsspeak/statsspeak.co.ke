import { sql } from 'drizzle-orm';
import { text, integer, blob, sqliteTable} from 'drizzle-orm/sqlite-core';

export const identities = sqliteTable('identities', {
	id: blob('id', { mode: 'bigint'}).primaryKey(),
	email: text('email').unique().notNull(),
	passwordHash: text('password_hash').notNull(),
	created_at: integer('created_at', {
		mode: 'timestamp_ms'
	}).default(sql`CURRENT_TIMESTAMP`),
	last_updated_at: integer('last_updated_at', {
		mode: 'timestamp_ms'
	}).default(sql`CURRENT_TIMESTAMP`)
});

export const sessions = sqliteTable('sessions', {
	id: text('id').primaryKey(),
	identityId: integer("identity_id").notNull().references(() => identities.id),
	created_at: integer('created_at', {
		mode: 'timestamp_ms'
	}).notNull().default(sql`CURRENT_TIMESTAMP`),
	expires_at: integer('expires_at', {
		mode: 'timestamp_ms'
	}).notNull()
})

export const documents = sqliteTable('documents', {
	id: integer('id').primaryKey(),
	content: text('content', { mode: 'json' }),
	created_at: integer('created_at', {
		mode: 'timestamp_ms'
	}).default(sql`CURRENT_TIMESTAMP`),
	last_updated_at: integer('last_updated_at', {
		mode: 'timestamp_ms'
	}).default(sql`CURRENT_TIMESTAMP`)
});
