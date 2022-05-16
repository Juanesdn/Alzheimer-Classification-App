import Appbar from '@/components/Appbar/Appbar';
import { tipsData } from '@/data/Data';

const Tips = () => {
  return (
    <>
      <Appbar title="Consejos" />
      <div className="mx-10 columns-2">
        {tipsData.map((tip) => (
          <a
            key={tip.id}
            href="#"
            className="mb-10 flex flex-col items-center rounded-lg border bg-white/80 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
          >
            <img
              className="h-56 w-full rounded-t-lg object-cover md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://source.unsplash.com/random/?alzheimer,doctor"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {tip.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {tip.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

Tips.isDashboard = true;

export default Tips;
