import ReactSvg from './svg/ReactSvg';
import JavaSvg from './svg/JavaSvg';
import TailwindSvg from './svg/TailwindSvg';
import AngularSvg from './svg/AngularSvg';
import NextJsSvg from './svg/NextJsSvg';
import AwsSvg from './svg/AwsSvg';

export default function LogoClouds() {
  return (
    <div className="my-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 ">
        <ReactSvg className="max-h-12" />
      </div>
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <JavaSvg className="max-h-12" />
      </div>
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <NextJsSvg className="max-h-12" />
      </div>
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <AwsSvg className="max-h-12" />
      </div>
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <AngularSvg className="max-h-12" />
      </div>
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <TailwindSvg />
      </div>
    </div>
  );
}
