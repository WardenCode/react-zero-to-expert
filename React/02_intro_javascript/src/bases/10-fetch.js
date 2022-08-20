const APIKEY = 'OoO0yChipM4Pv6dpRyxqlOc3sL0SgEKg';
const RANDOMGIFURL = 'api.giphy.com/v1/gifs/random';
const FULLURL = `https://${RANDOMGIFURL}?api_key=${APIKEY}`;

const request = fetch(FULLURL);

request
  .then(resp => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(err => console.error(err));