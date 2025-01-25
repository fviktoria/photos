import { PixelfedStatusType } from "@/lib/types/pixelfed";

export const pixelfedClient = (() => {
  const request = async <T>(endpoint: string, options: RequestInit = {}) => {
    const response = await fetch(
      `https://pixelfed.social/api/v1/accounts/${process.env.PIXELFED_ACCOUNT_ID}/${endpoint}`,
      {
        ...options,
        headers: {
          ...(options.headers || {}),
          Authorization: `Bearer ${process.env.PIXELFED_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(
        `Failed to fetch from Graph API: ${JSON.stringify({ error, endpoint })}`
      );
    }

    return response.json() as T;
  };

  const getStatuses = async () => {
    return request<PixelfedStatusType[]>("statuses");
  };

  return {
    request,
    getStatuses,
  };
})();
