async function getMusicFromWebAPI(artist, music) {
    if (!artist || !music) return 'por favor informe o artista e o título da música'

    const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${music}`);
    const result = await response.json();
    return result.lyrics ?? 'Não foi possível encontrar uma letra de música com esses parametros';
}

export default getMusicFromWebAPI;