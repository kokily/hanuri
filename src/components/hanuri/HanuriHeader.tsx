'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Props {
  id: string;
  date?: string;
  createdAt: string;
  title: string;
  tags: string[];
}

export function HanuriHeader(props: Props) {
  const router = useRouter();
  const { status } = useSession();
  const dateValue = props.date || props.createdAt;
  const target = new Date(dateValue);
  const targetDate = !isNaN(target.getTime())
    ? `${target.getFullYear()}. ${target.getMonth() + 1}. ${target.getDate()}.`
    : '';

  return (
    <div className="w-full max-w-[1200px] mx-auto px-2 sm:px-4">
      <div className="relative">
        <div className="flex justify-center">
          {targetDate && (
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              {targetDate}
            </span>
          )}
        </div>
        <h2 className="max-w-3xl mx-auto mt-4 text-center text-purple-900 h3 md:h2">
          {props.title}
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5 sm:flex sm:flex-colum justify-center">
          {props.tags.map((tag) => (
            <span
              key={`tag-${tag}`}
              className="flex text-blue-400 font-bold justify-center md:mr-4"
            >
              #{tag}{' '}
            </span>
          ))}
        </p>
      </div>
      {status === 'authenticated' && (
        <div className="text-center pt-4">
          <button
            className="
            bg-none text-blue-400 font-bold border border-collapse border-blue-400 rounded-lg px-2
            py-1 cursor-pointer transition-all hover:bg-teal-400 hover:text-teal-200 hover:border-teal-200 active:-translate-x-1
        "
            onClick={() => router.push(`/write/update/${props.id}`)}
          >
            수정
          </button>
        </div>
      )}
    </div>
  );
}
