import Link from 'next/link';

export default function ViewAllButton({ href, title }) {
  return (
    <div className="mt-6 mb-12">
      <Link href={href}>
        <a className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-sky-50 hover:text-sky-800">
          {title}
        </a>
      </Link>
    </div>
  );
}
