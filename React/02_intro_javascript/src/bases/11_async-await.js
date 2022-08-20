const getImg = async () => {
	try {
		const apiKey = 'OoO0yChipM4Pv6dpRyxqlOc3sL0SgEKg';
		const response = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` );
		const { data } = await response.json();
		const { url } = data.images.original;
		const img = document.createElement( "img" );
		img.src = url;
		document.body.append( img );
	} catch ( error ) {
		console.error( error );
	}
};

getImg();
