// main.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // Tambah minimal dua data
  store({ nama: 'Data 11', umur: 30, alamat: 'Jl. Data 11', email: 'data11@gmail.com' });
  store({ nama: 'Data 12', umur: 31, alamat: 'Jl. Data 12', email: 'data12@gmail.com' });

  // Tampilkan data
  console.log("\nMenampilkan data setelah penambahan:");
  index();

  // Hapus data
  destroy(); // Menghapus Data 12 (data terakhir)
  
  // Tampilkan data setelah dihapus untuk memastikan 
  console.log("\nMenampilkan data setelah penghapusan:");
  index();
};

main();