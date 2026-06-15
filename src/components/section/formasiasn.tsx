export default function FormasiAsn(){
    const formasiPdfs = [
        {
            title: "Formasi ASN 2024 - Pemerintahan Kota Pariaman",
            file: "/pdf/pariaman2024.pdf",
        },
        {
            title: "Formasi ASN 2024 - Pemerintahan Kab. Padang Pariaman",
            file: "/pdf/padangpariaman2024.pdf",
        },
        {
            title: "Formasi ASN 2024 - Pemerintahan Kota Padang",
            file: "/pdf/padang2024.pdf",
        },
        {
            title: "Formasi ASN 2024 - Pemerintahan Kota Solok",
            file: "/pdf/solok2024.pdf",
        },
    ];
    return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-8 sm:px-6">
      
      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Formasi ASN Sumatra Barat 2024</h2>
        <p className="text-sm text-gray-500">
          Daftar dokumen PDF formasi terbaru
        </p>
      </div>

      {/* GRID PDF */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {formasiPdfs.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 p-4 hover:shadow-md transition"
          >
            <div className="mb-3">
              <h3 className="font-medium text-gray-800">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">
                PDF Document
              </p>
            </div>

            {/* ACTION BUTTON */}
            <a
              href={item.file}
              target="_blank"
              className="inline-flex items-center justify-center w-full rounded-lg bg-[#3C9379] px-3 py-2 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Lihat PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}