import { Icon } from '@/components/common/icon/Icon';

interface Props {
  title: string;
  content: string;
  icon: string;
  bg: string;
}

export function ContactItem({ title, content, icon, bg }: Props) {
  return (
    <li className="flex flex-shrink-0">
      <div>
        <span
          className={`flex items-center justify-center rounded-2xl w-11 h-11 ${bg}`}
        >
          <Icon icon={icon} className="w-6 h-6 text-purple-700" />
        </span>
      </div>

      <div className="flex-1 ml-3 xl:ml-4">
        <h5 className="flex items-center text-base font-semibold text-purple-900">
          {title}
        </h5>
        <p className="mt-0.5 text-sm text-purple-800 leading-relaxed text-opacity-90">
          {content}
        </p>
      </div>
    </li>
  );
}
