export const GetGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )  }&limit=10&api_key=eFFcfAVk9W8StIL6ehtB8qwClJROKPbQ`;
    const rsp = await fetch(url);
    const { data } = await rsp.json();

    const getInfoGits = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })   

    return getInfoGits;
}