import Link from "next/link";

interface MobileVolunteerProps {
  year: string;
  onClose: () => void;
}

export function MobileVolunteer({ year, onClose }: MobileVolunteerProps) {
  return (
    <Link
      href={`/gallery/${year}`}
      onClick={onClose}
      className="rounded-lg bg-white/10 px-2 py-2 text-center text-sm font-medium text-purple-50 transition hover:bg-white/20 hover:text-white"
    >
      {year}
    </Link>
  );
}
