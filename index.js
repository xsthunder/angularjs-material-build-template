const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use( serve(`${__dirname}/public/app`) );
app.use( serve(`${__dirname}/node_modules`) );
app.use( serve(`${__dirname}/public`) );

let {name,version} = require('./package.json');
//console.log(__dirname);

if(!module.parent){
	let port = 8080;
	if( process.argv.length>=3 ){
		let arg = process.argv[2];
		port = Number.parseInt( arg );
		if( !Number.isInteger(port) || !(port>0&&port<65536) ){
			console.error(`port not available ${arg}`);
			process.exit(1);
		}
	}
	console.log(`${name} ${version} listening on ${port}`);
	app.listen(port);
}
else{
  module.exports = {
		name:name,
		version:version,
		app:app
	}
}
