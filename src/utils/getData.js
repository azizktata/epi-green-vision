export default async function getDataFromWP() {
    try {
        if(!process.env.BASE_URL){
            throw new Error('BASE_URL not found in .env file');
        }
        const res = await fetch(`${process.env.BASE_URL}`)
        const data = await res.json();
        if(!data){
            throw new Error('No data fetched');
        }
        return data;
    } catch (error) {
        return { error: error.message };
    }
}