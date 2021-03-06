var express = require( "express" );
var http = require( "http" );
var app = express();

app.use( express.static( __dirname ) );

// Endpoint only for infiniteScroll Example
app.get( "/users", function ( req, res )
{

    // Fake Response
    if ( req.query.p === "1" )
    {
        res.send(
            {
                "count": 35, "next_page": 2, "page": 1, "results": [{"first_name": "Michael", "last_name": "V", "email": "michael.v@nelsoncash.com", "id": 44 }, {"first_name": "Chris", "last_name": "Awesome", "email": "Chris@awesome.com", "id": 2 }, {"first_name": "banana", "last_name": "wkljwlkjqw", "email": "bananagram@example.com", "id": 19 }, {"first_name": null, "last_name": null, "email": "Chris@second.com", "id": 7 }, {"first_name": "Scott", "last_name": "Fergie", "email": "scottwferg@gmail.com", "id": 4 }, {"first_name": "kjhkjh", "last_name": "kjhkjh", "email": "checknew@example.com", "id": 20 }, {"first_name": "sdlkj", "last_name": "lkj", "email": "test@example.com", "id": 21 }, {"first_name": "lkjlkj", "last_name": "lkjlkj", "email": "test4@example.com", "id": 22 }, {"first_name": "kjhkjh", "last_name": "kjhkjh", "email": "test5@example.com", "id": 23 }, {"first_name": null, "last_name": null, "email": "test30@example.com", "id": 35 }, {"first_name": "jhgjhg", "last_name": "jhgjhg", "email": "test11@example.com", "id": 24 }, {"first_name": "kjhkjh", "last_name": "kjhkjh", "email": "test12@example.com", "id": 25 }, {"first_name": "kjhkjh", "last_name": "kjkjh", "email": "test13@example.com", "id": 26 }, {"first_name": "Chris", "last_name": "Awesome", "email": "chris.marshall@nelsoncash.com", "id": 27 }, {"first_name": "kjhkjh", "last_name": "kjhkjh", "email": "albums@example.com", "id": 28 }, {"first_name": "Chris", "last_name": "nc", "email": "chris@nelsoncash.com", "id": 10 }, {"first_name": null, "last_name": null, "email": "random@example.com", "id": 36 }, {"first_name": null, "last_name": null, "email": "test100@example.com", "id": 37 }, {"first_name": null, "last_name": null, "email": "test101@example.com", "id": 38 }, {"first_name": null, "last_name": null, "email": "test102@example.com", "id": 39 } ] }
        );
    }

    if ( req.query.p === "2" )
    {
        res.send(
            {
                "count": 35, "next_page": null, "page": 2, "results": [{"first_name": "Michael", "last_name": "v", "email": "michael.v@nelsoncash.com", "id": 44 }, {"first_name": "Chris", "last_name": "Awesome", "email": "Chris@awesome.com", "id": 2 }, {"first_name": "banana", "last_name": "wkljwlkjqw", "email": "bananagram@example.com", "id": 19 }, {"first_name": null, "last_name": null, "email": "Chris@second.com", "id": 7 }, {"first_name": "Scott", "last_name": "Fergie", "email": "scottwferg@gmail.com", "id": 4 }, {"first_name": "kjhkjh", "last_name": "kjhkjh", "email": "checknew@example.com", "id": 20 }, {"first_name": "sdlkj", "last_name": "lkj", "email": "test@example.com", "id": 21 }, {"first_name": "lkjlkj", "last_name": "lkjlkj", "email": "test4@example.com", "id": 22 }, {"first_name": "kjhkjh", "last_name": "kjhkjh", "email": "test5@example.com", "id": 23 }, {"first_name": null, "last_name": null, "email": "test30@example.com", "id": 35 }, {"first_name": "jhgjhg", "last_name": "jhgjhg", "email": "test11@example.com", "id": 24 }, {"first_name": "kjhkjh", "last_name": "kjhkjh", "email": "test12@example.com", "id": 25 }, {"first_name": "kjhkjh", "last_name": "kjkjh", "email": "test13@example.com", "id": 26 }, {"first_name": "Chris", "last_name": "Awesome", "email": "chris.marshall@nelsoncash.com", "id": 27 }, {"first_name": "kjhkjh", "last_name": "kjhkjh", "email": "albums@example.com", "id": 28 }, {"first_name": "Chris", "last_name": "nc", "email": "chris@nelsoncash.com", "id": 10 }, {"first_name": null, "last_name": null, "email": "random@example.com", "id": 36 }, {"first_name": null, "last_name": null, "email": "test100@example.com", "id": 37 }, {"first_name": null, "last_name": null, "email": "test101@example.com", "id": 38 }, {"first_name": null, "last_name": null, "email": "test102@example.com", "id": 39 } ] }
        );
    }

    res.end();
} );

app.get( "*.*", function( req, res, next )
{
    res.status( 404 ).send( "Not Found" );
} );

app.get( "*", function( req, res, next )
{
    res.status( 200 ).sendFile( __dirname + "/build/index.html" );
} );

var port = process.env.PORT || 3000;
http.createServer( app ).listen( port );
console.log( "Server running on " + port );