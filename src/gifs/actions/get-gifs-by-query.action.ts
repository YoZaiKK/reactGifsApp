import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyApi<GiphyResponse>('/search', {
    params: {
      q: query,
      limit: 25,
    }
  });
  return response.data.data.map((g) => ({
    id: g.id,
    title: g.title,
    url: g.images.original.url,
    width: Number(g.images.original.width),
    height: Number(g.images.original.height),
  }))
}