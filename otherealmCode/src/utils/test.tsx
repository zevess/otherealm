import axios from "axios";


export const gameFetchTest = async (searchTitle: string) => {
    const fetchURL = 'https://api.igdb.com/v4/games';
    const requestData = `fields name, cover.url; search "${searchTitle}";`;

    console.log(fetchURL)

    const responce = await axios({
        url: fetchURL,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': 'eh3mw096f6d9njuykpzb1yxyv6jdjm',
            'Authorization': 'Bearer ukoaf6afcx87xrp2el5paufpxaaco3'
        },
        data: requestData
    })
    return responce.data;
    // const response = await axios.post(fetchURL)
    // return response.data
}
    
        