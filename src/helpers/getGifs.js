export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=rIMwmHRwOrDeUEuoppBcqxNeEan5Gl7l&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    console.log(data);
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height.url
    }));

    // console.log(gifs.map(img=>img.title));

    return gifs;
}