import { useState } from "react";

function FormValidation() {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("");
  const [produk, setProduk] = useState<{
    nama: string;
    harga: string;
    kategori: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (nama === "" || harga === "" || kategori === "") {
      alert("Semua field wajib diisi!");
      return;
    }
    setProduk({
      nama,
      harga,
      kategori,
    });
    setNama("");
    setHarga("");
    setKategori("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Produk</label>
          <br />
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Harga</label>
          <br />
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Kategori</label>
          <br />
          <input
            type="text"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Tambah Produk
        </button>
      </form>

      <hr />

      {produk && (
        <div>
          <h2>Data Produk</h2>
          <p>Nama : {produk.nama}</p>
          <p>Harga : Rp {produk.harga}</p>
          <p>Kategori : {produk.kategori}</p>
        </div>
      )}
    </div>
  );
}
export default FormValidation;