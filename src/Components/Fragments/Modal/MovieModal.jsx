import InputField from "../InputField";
import Button from "../../Elements/Button";
import { useState, useEffect } from "react";
const MovieModal = ({ movie, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    kategori: "",
  });
  useEffect(() => {
    if (movie) {
      setFormData({
        id: movie.id,
        title: movie.title,
        image: movie.image,
        kategori: movie.kategori,
      });
    }
  }, [movie]);
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-[#181A1C] p-6 rounded-lg w-full max-w-md text-white">
        <div className="flex justify-between">
          <h2 className=" text-2xl">Edit Movie</h2>
          <button onClick={onClose} className="text-2xl cursor-pointer">
            &times;
          </button>
        </div>
        <div>
          <form action="" className="p-2">
            <InputField
              name="title"
              text="Edit Title"
              type="text"
              placeholder="Edit Title"
              value={formData.title}
            />
            <InputField
              name="image"
              text="Edit Image"
              type="text"
              placeholder="Edit Image URL"
              value={formData.image}
            />
            <InputField
              name="kategori"
              text="Edit Kategori"
              type="text"
              placeholder="Edit Kategori"
              value={formData.kategori}
            />
            <div className=" flex gap-2 mt-2 items-center justify-center">
              <Button
                type="button"
                children="Hapus Film"
                className="py-3 px-3 rounded-full bg-[#E7E3FC3B] hover:bg-[#E7E3FC3B] hover:bg-opacity-20 transition-colors font-normal"
              />
              <Button
                type="submit"
                children="Simpan Edit"
                className="py-3 px-3 rounded-full bg-[#3254FF] hover:bg-[#3254FF] hover:bg-opacity-20 transition-colors font-normal"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default MovieModal;
