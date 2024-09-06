export async function handleApiCall<T>(
  apiMethod: () => Promise<T>
): Promise<T | null> {
  try {
    const result = await apiMethod();
    return result;
  } catch (error) {
    console.error("API call error:", error);
    return null;
  }
}
