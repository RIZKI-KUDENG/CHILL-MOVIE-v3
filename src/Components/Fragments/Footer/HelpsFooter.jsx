const HelpsFooter = (props) => {
    const { onclickHelp, dropdownHelp} = props;
  return (
    <div className="flex flex-col gap-3">
      <div
        className="flex items-center justify-between cursor-pointer md:cursor-default"
        onClick={onclickHelp}
      >
        <h4 className="font-bold text-xl">Bantuan</h4>
        <img
          src="/src/assets/image/arrow.png"
          alt=""
          className={`md:hidden w-7 h-7 transition-transform duration-300  ${
            dropdownHelp ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`flex max-md:flex-col gap-3 transition-all duration-300 md:flex md:gap-5 text-[#C1C2C4] ${
          dropdownHelp ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-3">
          <li>FAQ</li>
          <li>Kontak Kami</li>
          <li>Privasi</li>
          <li>Syarat dan Ketentuan</li>
        </ul>
      </div>
    </div>
  );
};
export default HelpsFooter;