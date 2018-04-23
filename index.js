const express = require( 'express' );
const app = express();
app.use( express.static(`${__dirname}/public/app`) );
app.use( express.static(`${__dirname}/node_modules`) );
app.use( express.static(`${__dirname}/public`) );

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
	console.log(`app listening on ${port}`);
	app.listen(port);
}
else{
    module.exports = app;
}
