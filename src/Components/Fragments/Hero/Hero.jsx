import Button from "../../Elements/Button";
import Content from "./Content";

const Hero = () => {
  return (
    <main>
      <section>
        <div className="relative">
          <img
            src="/src/assets/heroimage/herobg.png"
            alt=""
            className="w-full h-full md:h-[80vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent"></div>
          <div className="absolute inset-1 flex flex-col justify-center text-white mt-10">
            <div className="w-1/2 ml-8 flex flex-col md:gap-3">
              <h1 className="text-base sm:text-3xl md:text-6xl font-bold">
                Duty After School
              </h1>
              <p className="max-md:line-clamp-2 max-sm:text-[12px] text-lg">
                Sebuah benda tak dikenal mengambil alih dunia. Dalam
                keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak
                tentara, termasuk siswa sekolah menengah. Mereka pun segera
                menjadi pejuang garis depan dalam perang.
              </p>
            </div>
            <div className="flex items-center justify-between gap-2 mt-6 ml-8">
              <div className="flex gap-2">
                <Button className="text-[10px] md:text-base px-3 md:w-30 bg-[#3254FF] rounded-full font-bold">
                  Mulai
                </Button>
                <Button
                  className=" flex px-1 md:px-3 gap-1 items-center bg-[#22282A] rounded-full text-[10px] md:text-base font-bold"
                  btn="&#9432; Selengkapnya"
                >
                  Selengkapnya
                </Button>
                <img
                  src="/src/assets/heroimage/18.png"
                  alt=""
                  className="ml-3 w-5 h-5 md:w-10 md:h-10"
                />
              </div>
              <div>
                <img
                  src="/src/assets/heroimage/volume.png"
                  alt=""
                  className="w-5 h-5 md:w-12 md:h-12 mr-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Content />
    </main>
  );
};
export default Hero;