import axios from 'axios';

const apiKey = 'd2517a83-dcf2-4056-b008-77f82bf2e097';
const apiUrl = 'https://content.guardianapis.com/search';

export async function fetchNews(currentPage: number) {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                'page': currentPage,
                'api-key': apiKey,
            },
        });

        return response.data.response.results;
    } catch (error) {
        console.error('Ошибка при получении новостей:', error);
        return [];
    }
}
