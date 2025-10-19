const AddMovieModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
    onClick={onClose}
    >
      <div className="bg-[#181A1C] p-6 rounded-lg w-full max-w-md text-white">
        <div className="flex justify-between">
          <h2 className=" text-2xl">Edit Movie</h2>
          <button onClick={onClose} className="text-2xl cursor-pointer">
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddMovieModal;
