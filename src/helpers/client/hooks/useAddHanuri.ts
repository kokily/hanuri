import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { client } from './client';

export async function readHanuriAPI(id: string) {
  const response = await client.get<HanuriType>(`/hanuries/${id}`);
  return response.data;
}

export async function addHanuriAPI(payload: AddHanuriPayload) {
  const response = await client.post<HanuriType>('/hanuries/add', payload);
  return response.data;
}

export async function updateHanuriAPI({
  id,
  payload,
}: {
  id: string;
  payload: AddHanuriPayload;
}) {
  const response = await client.patch<HanuriType>(
    `/hanuries/update/${id}`,
    payload,
  );
  return response.data;
}

interface Props {
  id?: string;
}

export function useAddHanuri({ id }: Props) {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState<Array<string>>([]);
  const [thumbnail, setThumbnail] = useState('');
  const [year, setYear] = useState('2026');
  const [date, setDate] = useState('');

  // Data Query
  const { data } = useQuery({
    queryKey: ['updateHanuri'],
    queryFn: () => readHanuriAPI(id!),
    enabled: !!id,
  });

  // Data Mutations
  const addHanuriMutate = useMutation({ mutationFn: addHanuriAPI });
  const updateHanuriMutate = useMutation({ mutationFn: updateHanuriAPI });

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (text: string) => {
    setBody(text);
  };

  const onChangeTags = (nextTags: Array<string>) => {
    setTags(nextTags);
  };

  const onChangeThumbnail = () => {
    const upload = document.createElement('input');

    upload.setAttribute('type', 'file');
    upload.setAttribute('accept', 'image/*');
    upload.click();

    upload.addEventListener('change', async () => {
      const files = upload.files;

      if (!files) {
        return;
      }

      const file = files[0];
      const formData = new FormData();

      formData.append('file', file);

      try {
        const response = await client.post('/upload', formData);

        if (response.status === 200) {
          setThumbnail(response.data.url);
        } else {
          toast.error(response.status);
        }
      } catch (err: any) {
        console.log(err.error);
      }
    });
  };

  const onChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
  };

  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const onAddHanuri = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!id) {
      await addHanuriMutate.mutateAsync(
        {
          title,
          body,
          tags,
          thumbnail,
          year,
          date,
        },
        {
          onSuccess: (data) => {
            router.replace(`/hanuri/${data.id}`);
          },
        },
      );
    } else {
      await updateHanuriMutate.mutateAsync(
        {
          id,
          payload: {
            title,
            body,
            tags,
            thumbnail,
            year,
            date,
          },
        },
        {
          onSuccess: (data) => {
            router.replace(`/hanuri/${data.id}`);
          },
        },
      );
    }
  };

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setBody(data.body);
      setTags(data.tags);
      setThumbnail(data.thumbnail);
      setYear(data.year);
      setDate(data.date || '');
    }
  }, [data]);

  useEffect(() => {
    if (!id) {
      setTitle('');
      setBody('');
      setTags([]);
      setThumbnail('');
      setYear('2025');
      setDate('');
    }
  }, [id]);

  return {
    title,
    body,
    thumbnail,
    tags,
    year,
    date,
    onChangeTitle,
    onChangeBody,
    onChangeThumbnail,
    onChangeTags,
    onChangeYear,
    onChangeDate,
    onAddHanuri,
  };
}
