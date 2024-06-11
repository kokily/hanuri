import { client } from '@/helpers/client/hooks/client';

export const getData = async (id: string): Promise<HanuriType> => {
  const response = await client.get(`/hanuries/${id}`);

  if (!response.data) {
    throw new Error('Failed to fetch data');
  }

  return response.data;
};
