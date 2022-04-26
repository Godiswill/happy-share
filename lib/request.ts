export default async function request(url: string) {
    const res = await fetch(url);
    return await res.json();
}
