const FooterLinks = (props) => {
  const { onclick, dropdown} = props;
return(
  <div className="flex flex-col gap-3">
            <div
              className="flex items-center justify-between cursor-pointer md:cursor-default"
              onClick={onclick}
            >
              <h5 className="font-bold text-xl">Genre</h5>
              <img
                src="/src/assets/image/arrow.png"
                alt=""
                className={`md:hidden w-7 h-7 transition-transform duration-300  ${
                  dropdown ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`flex max-md:flex-col gap-3 transition-all duration-300 md:flex md:gap-5 text-[#C1C2C4] ${
                dropdown ? "block" : "hidden"
              }`}
            >
              <div className="">
                <ul className="flex flex-col  gap-3">
                  <li>Horor</li>
                  <li>Komedi</li>
                  <li>Thriller</li>
                  <li>Anime</li>
                </ul>
              </div>
              <div className="">
                <ul className="flex  flex-col  gap-3">
                  <li>Perang</li>
                  <li>Romantis</li>
                  <li>Aksi</li>
                  <li>Britania</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col  gap-3">
                  <li>Horor</li>
                  <li>Komedi</li>
                  <li>Thriller</li>
                  <li>Anime</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-3">
                  <li>Drama</li>
                  <li>KDrama</li>
                </ul>
              </div>
            </div>
          </div>
)
};

export default FooterLinks;