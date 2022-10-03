import Mekanik from '../assets/Mekanik.png';
import Mesin from '../assets/Mesin.png';
import Harga from '../assets/Harga.png';
import Customer from '../assets/Customer.png';

const Adventage = () => {
  return (
    <div className="text-center font-bold text-lg mt-10">
      <div>
        <h1>Keuntungan Dan Keunggulan Bengkel Kami</h1>
      </div>
      <div className="flex justify-evenly items-center">
        <div>
          <div>
            <img src={Mekanik}></img>
          </div>
        </div>
        <div>
          <div>
            <img src={Mesin}></img>
          </div>
        </div>
        <div>
          <div>
            <img src={Harga}></img>
          </div>
        </div>
        <div>
          <div>
            <img src={Customer}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventage;
