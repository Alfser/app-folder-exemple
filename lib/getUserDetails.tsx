
export default async function getUserDetails(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if(!res.ok) throw new Error('Não foi possível consultar esse usuário.')

    return res.json();
}
