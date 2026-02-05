class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          errorData.error ||
          `API Error: ${response.statusText}`,
      );
    }

    return response.json();
  }

  // Add post, put, delete methods as needed
}

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // Browser: use relative path
  return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"; // Server: use absolute path
};

export const apiClient = new ApiClient(`${getBaseUrl()}/api/v1`);
