// THIS FILE IS THE WRONG WAY TO DO THINGS
// IT SHOULD BE REMOVED ASAP

const development: Dict<string> = {
	POSTGRES_URL: 'postgres://postgres@127.0.0.1:5432/akizachama',
	LOGTAIL_TOKEN: '9EhrbME741NVkeJatguDjnBz'
};

const sandbox: Dict<string> = {
	
};

const production: Dict<string> = {
	
};

export const secretMap = {
	development,
	sandbox,
	production
};
