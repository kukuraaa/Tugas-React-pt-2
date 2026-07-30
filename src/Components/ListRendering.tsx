function ListRendering(){
    const products = [
    {
      id: 1,
      nama: "Cilok",
      harga: 5000,
    },
    {
      id: 2,
      nama: "Lego",
      harga: 350000,
    },
    {
      id: 3,
      nama: "Headset",
      harga: 250000,
    },
    {
      id: 4,
      nama: "Keychain",
      harga: 1200000,
    },
    {
      id: 5,
      nama: "Sepatu Roda",
      harga: 8500000,
    },
    {
      id: 6,
      nama: "Totebag",
      harga: 950000,
    },
    {
      id: 7,
      nama: "Tumbler",
      harga: 80000,
    },
    {
      id: 8,
      nama: "Sendal",
      harga: 650000,
    },
    {
      id: 9,
      nama: "Kamera",
      harga: 400000,
    },
    {
      id: 10,
      nama: "Tas",
      harga: 300000,
    },
  ];
  return(
    <div className="Rendering">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <h3>{product.nama}</h3>
          <p>Harga: Rp {product.harga}</p>

          <button>Edit</button>
          <button>Hapus</button>

          <hr />
        </div>
      ))}
    </div>

  );

}
export default ListRendering;