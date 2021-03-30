const { REACT_APP_BACKEND_IP } = process.env;
import SearchResult from '../models/searchResult';

export class SearchResultService {
    static async saveSearchResult(
        tweetID: string,
        fullText: string,
        twittererID: string,
        searchTerm: string,
        user: string,
    ): Promise<Response> {
        const res = await fetch(`${REACT_APP_BACKEND_IP}/api/searchResult`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tweetID,
                fullText,
                twittererID,
                searchTerm,
                user,
            }),
        });
        return res;
    }

    static async getAllSearchResults(): Promise<SearchResult[]> {
        const res = await fetch(`${REACT_APP_BACKEND_IP}/api/searchResult`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return res.json();
    }

    static async getAllSearchResultsByUser(user: string): Promise<SearchResult[]> {
        const res = await fetch(`${REACT_APP_BACKEND_IP}/api/searchResults/searchByUser/${user}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return res.json();
    }

    static async getAllSearchResultsBySearchterm(searchTerm: string): Promise<SearchResult[]> {
        const res = await fetch(`${REACT_APP_BACKEND_IP}/api/searchResults/searchByTerm/${searchTerm}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return res.json();
    }
}