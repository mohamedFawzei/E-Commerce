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
  return process.env.NEXT_PUBLIC_API_URL || "";
};

export const apiClient = new ApiClient(getBaseUrl());
