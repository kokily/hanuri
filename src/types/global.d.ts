import type {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
} from 'react';
import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      token: string;
    };
  }
}

declare global {
  interface SignOptions {
    expiresIn?: string | number;
  }

  interface AuthPayload {
    username: string;
    password: string;
  }

  interface AddHanuriPayload {
    title: string;
    body: string;
    tags: string[];
    thumbnail: string;
    year: string;
  }

  interface ListHanuriesQuery {
    year: string;
    cursor?: string;
  }

  interface HanuriType {
    id: string;
    title: string;
    body: string;
    tags: string[];
    year: string;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
  }

  interface ListGalleryType {
    hanuries: Array<Hanuri>;
    onReadHanuri: (id: string) => void;
    setTarget: Dispatch<SetStateAction<HTMLElement | null | undefined>>;
  }

  interface AddHanuriProps {
    title: string;
    body: string;
    thumbnail: string;
    tags: Array<string>;
    year: string;
    onChangeTitle: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeBody: (text: string) => void;
    onChangeThumbnail: () => void;
    onChangeTags: (nextTags: Array<string>) => void;
    onChangeYear: (e: ChangeEvent<HTMLSelectElement>) => void;
    onAddHanuri: (e: SyntheticEvent) => void;
  }

  interface TagsProps {
    input: string;
    localTags: Array<string>;
    onRemoveTag: (tag: string) => void;
    onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
    onSetTags: (e: ChangeEvent<HTMLFormElement>) => void;
  }
}
