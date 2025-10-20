import InputField from "../InputField";
import Button from "../../Elements/Button";
import { useState } from "react";
import { useMovies } from "../../../store/useMovies";
const AddMovieModal = ({ onClose }) => {
  const { addMovie } = useMovies();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    kategori: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.image || !formData.kategori) {
      alert("Semua field harus diisi!");
      return;
    }
    const success = await addMovie(formData);
    if (success) {
      alert("Tambah berhasil");
      onClose();
    } else {
      alert("Tambah gagal");
    }
  };
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-[#181A1C] p-6 rounded-lg w-full max-w-md text-white">
        <div className="flex justify-between">
          <h2 className=" text-2xl">Edit Movie</h2>
          <button onClick={onClose} className="text-2xl cursor-pointer">
            &times;
          </button>
        </div>
        <form action="" onSubmit={handleSubmit} className="p-2">
          <InputField
            name="title"
            text="Masukan Title"
            type="text"
            placeholder="Contoh: Avengers"
            value={formData.title}
            onChange={handleChange}
          />
          <InputField
            name="image"
            text="Masukan Image"
            type="text"
            placeholder="Contoh: https://..."
            value={formData.image}
            onChange={handleChange}
          />
          <InputField
            name="kategori"
            text="Masukan Kategori"
            type="text"
            placeholder="Contoh: Top, New, Trending"
            value={formData.kategori}
            onChange={handleChange}
          />
          <div className=" flex gap-2 mt-2 items-center justify-center">
            <Button
              type="submit"
              children="Tambah Movie"
              className="py-3 px-3 rounded-full bg-[#3254FF] hover:bg-[#3254FF] hover:bg-opacity-20 transition-colors font-normal"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddMovieModal;
