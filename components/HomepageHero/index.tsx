import Link from 'next/link';

type Props = {
  version: string;
  stars: number;
};

export function HomepageHero({ version, stars: initialStars }: Props) {
  const stars = 10
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-300 dark:to-gray-800"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSIxNDIiCiAgaGVpZ2h0PSI3MSIKICB2aWV3Qm94PSIwIDAgMTQyIDcxIgogIGZpbGw9Im5vbmUiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CiAgICA8cmVjdCB4PSIwLjUiIHk9IjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgZmlsbD0iI2ZmZiIgLz4KICAgIDxyZWN0IHg9IjcxLjUiIHk9IjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgZmlsbD0iI2ZmZiIgLz4KICA8L2c+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KICAgICAgPHJlY3Qgd2lkdGg9IjE0MiIgaGVpZ2h0PSI3MSIgZmlsbD0id2hpdGUiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+')] bg-bottom bg-repeat bg-[size:142px_71px] dark:bg-[url('data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSIxNDIiCiAgaGVpZ2h0PSI3MSIKICB2aWV3Qm94PSIwIDAgMTQyIDcxIgogIGZpbGw9Im5vbmUiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CiAgICA8cmVjdCB4PSIwLjUiIHk9IjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgZmlsbD0iIzExMSIgLz4KICAgIDxyZWN0IHg9IjcxLjUiIHk9IjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgZmlsbD0iIzExMSIgLz4KICA8L2c+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KICAgICAgPHJlY3Qgd2lkdGg9IjE0MiIgaGVpZ2h0PSI3MSIgZmlsbD0id2hpdGUiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+')]"></div>
      <div className="relative z-10 max-w-screen-xl mx-auto py-16 px-4 text-center">
        <div className="mt-6">
          <a
            className="badge"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Welcome to OpenDeepLearning🔥
          </a>
        </div>
        <h1 className="homepage-hero-headline">
          A better way to <br className="sm:hidden" />
          learn <br className="hidden sm:block" />
          Deep Learning <br className="sm:hidden" />
          knowledge.
        </h1>
        <p className="mt-5 text-xl text-gray-500 dark:text-gray-400">
            OpenDeepLearning is a free and open-source platform for learning deep learning.
        </p>
        <div className="mt-6 mb-5 flex justify-center space-x-4">
          <Link href="/docs/getting-started">
            <div className="inline-block py-3 px-6 rounded bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-lg transition-all duration-200 hover:shadow-2xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Get started <span className="inline-block transition-all duration-200">&rarr;</span>
            </div>
          </Link>
        </div>
        <div className="flex justify-center space-x-4 mb-12">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 px-2 bg-white bg-opacity-50 text-gray-600 text-lg dark:bg-gray-900 dark:text-gray-400"
          >
            GitHub <strong>☆{stars}</strong>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 px-2 bg-white bg-opacity-50 text-gray-600 text-lg dark:bg-gray-900 dark:text-gray-400"
          >
            Version <strong>{version}</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
