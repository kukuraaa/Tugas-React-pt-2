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
    <div className="form-card">
      <h2>Tambah Produk</h2>

      <form className="product-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Nama Produk</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama produk"
          />
        </div>

        <div className="form-group">
          <label>Harga</label>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            placeholder="Masukkan harga"
          />
        </div>

        <div className="form-group">
          <label>Kategori</label>
          <input
            type="text"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            placeholder="Masukkan kategori"
          />
        </div>

        <button className="submit-btn" type="submit">
          Tambah Produk
        </button>

      </form>

      {produk && (
        <div className="result-card">
          <h3>Data Produk</h3>
          <p><b>Nama :</b> {produk.nama}</p>
          <p><b>Harga :</b> Rp {produk.harga}</p>
          <p><b>Kategori :</b> {produk.kategori}</p>
        </div>
      )}
    </div>
  );
}

export default FormValidation;