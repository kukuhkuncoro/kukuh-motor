import { ClockIcon, MapIcon, PhoneIcon } from '@heroicons/react/outline';

const Info = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center">
        <div className="flex mt-7 items-center">
          <ClockIcon className="w-20" />
          <div>
            <h1 className="ml-2">Senin - Jumat: 07:30 - 17:00 WIB</h1>
            <h1 className="ml-2">Sabtu - Minggu: 08:00 - 15:00 WIB</h1>
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="flex mt-2 items-center">
            <MapIcon className="w-20" />
            <div>
              <h1 className="ml-2">
                Jl raya Dawe, kec. Sekar <br /> kab. Bojonegoro
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="flex mt-2 items-center">
            <PhoneIcon className="w-16" />
            <div>
              <h1 className="ml-2">
                Suroko <br />
                082335212104
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
