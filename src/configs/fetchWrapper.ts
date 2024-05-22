export async function fetchWrapper<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json() as T;
}