import { Button } from '../components/button';
import img from '../images/hero.jpg';
import '../style.css';

export default function HeroSection() {
  return (
    <div className="lg:mr-relative">
      <div className="mr-mx-auto mr-max-w-7xl mr-w-full mr-pt-16 mr-pb-20 mr-text-center lg:mr-py-48 lg:mr-text-left">
        <div className="mr-px-4 lg:mr-w-1/2 sm:mr-px-8 xl:mr-pr-16">
          <h1 className="mr-text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="mr-block xl:mr-inline">Data to enrich your</span>{' '}
            <span className="mr-block mr-text-pink-600 xl:mr-inline">
              online business
            </span>
          </h1>
          <p className="mr-mt-3 mr-max-w-md mr-mx-auto mr-text-lg mr-text-gray-500 sm:mr-text-xl md:mr-mt-5 md:mr-max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mr-mt-10 sm:mr-flex sm:mr-justify-center lg:mr-justify-start">
            <div className="mr-rounded-md mr-shadow">
              <Button className="mr-w-full">Get started</Button>
            </div>
            <div className="mr-mt-3 mr-rounded-md mr-shadow sm:mr-mt-0 sm:mr-ml-3">
              <Button variant="white" className="mr-w-full">
                Live demo
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-relative mr-w-full mr-h-64 sm:mr-h-72 md:mr-h-96 lg:mr-absolute lg:mr-inset-y-0 lg:mr-right-0 lg:mr-w-1/2 lg:mr-h-full">
        <img
          className="mr-absolute mr-inset-0 mr-w-full mr-h-full mr-object-cover"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}
