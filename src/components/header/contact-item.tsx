import { Icon, type IconName } from "../common/icon/Icon";

interface ContactItemProps {
  title: string;
  content: string;
  icon: IconName;
  bg: string;
}

export function ContactItem({ title, content, icon, bg }: ContactItemProps) {
  return (
    <li className="flex shrink-0">
      <div>
        <span
          className={`flex w-11 h-11 items-center justify-center rounded-2xl ${bg}`}
        >
          <Icon icon={icon} className="w-6 h-6 text-purple-700" />
        </span>
      </div>

      <div className="ml-3 flex-1 xl:ml-4">
        <h5 className="flex items-center text-base font-semibold text-purple-900">
          {title}
        </h5>
        <p className="mt-0.5 text-sm leading-relaxed text-purple-800/90">
          {content}
        </p>
      </div>
    </li>
  );
}
