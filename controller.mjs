// controller.mjs
import users from "./data.mjs";

const index = () => {
  console.log("--- Daftar Pengguna ---");
  // Tampilkan data menggunakan map()
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
  console.log("-----------------------\n");
};

const store = (user) => {
  // Tambahkan data menggunakan proses push
  users.push(user);
  console.log(`[Berhasil] Data ${user.nama} telah ditambahkan.`);
};

const destroy = () => {
  // Menghapus data paling akhir dari array
  const removedUser = users.pop();
  if (removedUser) {
    console.log(`[Berhasil] Data ${removedUser.nama} telah dihapus.`);
  } else {
    console.log(`[Gagal] Tidak ada data yang bisa dihapus.`);
  }
};

export { index, store, destroy };