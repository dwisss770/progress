"use client";

import { useState } from "react";
import Image from "next/image";

import { Eye, X } from "lucide-react";

const dataTO = [
  {
    id: 1,
    platform: "Private Al-faiz",
    nama: "TO SKD CASN Part 21",
    tanggal: "21 Mei 2026",
    skor: 395,
    pgLulus: true,
    harga: "Rp15.000",
    screenshot: "/images/faiz21.png",
  },
  {
    id: 2,
    platform: "Private Al-faiz",
    nama: "TO SKD CASN Part 22",
    tanggal: "5 Juni 2026",
    skor: 443,
    pgLulus: true,
    harga: "Rp15.000",
    screenshot: "/images/faiz22.png",
  },
  {
    id: 3,
    platform: "Private Al-faiz",
    nama: "TO SKD CASN Part 23",
    tanggal: "12 Juni 2026",
    skor: 425,
    pgLulus: true,
    harga: "Rp15.000",
    screenshot: "/images/faiz23.png",
  },
  {
    id: 4,
    platform: "EduVid CPNS",
    nama: "Simulasi Nasional SKD CPNS 2026 #2",
    tanggal: "13 Juni 2026",
    skor: 401,
    pgLulus: true,
    harga: "Gratis",
    screenshot: "/images/eduvid1.png",
  },
  {
    id: 5,
    platform: "JadiASN",
    nama: "TO SKD CPNS 2026 Gratis (Part 1)",
    tanggal: "16 Juni 2026",
    skor: 451,
    pgLulus: true,
    harga: "Gratis",
    screenshot: "/images/jadiasn1.png",
  },
];

const platforms = [
  "Semua",
  "Private Al-faiz",
  "EduVid CPNS",
  "JadiASN",
  "ASN Institute",
  "tryout.co.id",
];

export default function Hero() {
    const [selectedPlatform, setSelectedPlatform] = useState("Semua");
    const filteredData =
        selectedPlatform === "Semua"
            ? dataTO
            : dataTO.filter(
                (item) => item.platform === selectedPlatform
            );

    const totalPengeluaran = dataTO.reduce((total, item) => {
        if (item.harga === "Gratis") return total;

        const nominal = Number(
            item.harga.replace("Rp", "").replace(/\./g, "")
        );

        return total + nominal;
    }, 0);

    const rataRataSkor = Math.round(
        dataTO.reduce((sum, item) => sum + item.skor, 0) /
            dataTO.length
        );

        const totalTO = dataTO.length;

        const totalLulusPG = dataTO.filter(
        (item) => item.pgLulus
    ).length;

    const [selectedTO, setSelectedTO] = useState<
      (typeof dataTO)[number] | null
    >(null);
      
  return (
    <div className="w-full rounded-2xl border border-gray-200 px-4 py-8 sm:px-6">
      <div className="mb-4">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkles h-3 w-3"
            aria-hidden="true"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
            <path d="M20 2v4"></path>
            <path d="M22 4h-4"></path>
            <circle cx="4" cy="20" r="2"></circle>
          </svg>
          Updates
        </div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Progress Tryout
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Pantau perkembangan hasil tryout dan tingkatkan performa setiap hari.
        </p>
      </div>
      <div className="group border-border/90 via-background relative mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-linear-to-br from-orange-500/5 to-amber-500/5 transition-all duration-300 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/5">
        <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-2xl bg-orange-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex flex-col items-start justify-between gap-8 p-7 sm:flex-row sm:items-center sm:p-10">
          {/* Profile Image */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-2xl" />

            <div className="bg-background relative h-48 w-48 overflow-hidden rounded-4xl border-4 border-white/50 shadow-xl">
              <Image
                src="/images/fif.jpeg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            <div className="border-background absolute -right-1 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-green-500">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </div>
          </div>
          {/* Content */}
          <div className="flex-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-3 py-1 text-[11px] font-semibold tracking-wider text-orange-500 uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500"></span>
              Latest Update
            </div>

            <div className="flex flex-col md:flex-row md:gap-2">
                <h2 className="max-w-2xl text-2xl font-bold tracking-tight transition-colors group-hover:text-orange-500 sm:text-3xl">
                    Afif Dwi Sasonda
                </h2>
                <p className="mb-5">Onic Esport ID</p>
            </div>

            <p className="text-muted-foreground mb-6 max-w-xl text-sm leading-relaxed text-justify">
              Pantau progres Try Out (TO) Anda secara lengkap, mulai dari hasil, perkembangan skor, hingga riwayat.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-muted-foreground/60 text-xs">
                5 days ago
              </span>

              <div className="flex gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-0.5 text-[12px] font-medium text-blue-500">
                  <span className="h-1 w-1 rounded-full bg-blue-500"></span>
                  release
                </span>

                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[12px] font-medium text-emerald-500">
                  <span className="h-1 w-1 rounded-full bg-emerald-500"></span>
                  launch
                </span>
              </div>
            </div>
          </div>

          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-green-400/20 blur-sm" />

            <div className="relative flex flex-col justify-center items-center h-30 w-60 overflow-hidden rounded-4xl border-4 border-white/90 shadow-xl">
                <h1 className="text-xl font-medium">Rata-rata Skor</h1>
                <h1 className="text-3xl font-bold">{rataRataSkor}</h1>
            </div>
          </div>
        </div>
      </div>

        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-xs text-gray-500">Total TO</p>
                <h3 className="mt-1 text-2xl font-bold">
                {totalTO}
                </h3>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-xs text-gray-500">Rata-rata Skor</p>
                <h3 className="mt-1 text-2xl font-bold">
                {rataRataSkor}
                </h3>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-xs text-gray-500">Lulus PG</p>
                <h3 className="mt-1 text-2xl font-bold text-emerald-600">
                {totalLulusPG}/{totalTO}
                </h3>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-xs text-gray-500">Total Pengeluaran</p>
                <h3 className="mt-1 text-2xl font-bold text-orange-500">
                Rp{totalPengeluaran.toLocaleString("id-ID")}
                </h3>
            </div>
        </div>

        <div className="mb-6 overflow-x-auto">
            <div className="flex w-max gap-2 pb-2">
                {platforms.map((platform) => (
                <button
                    key={platform}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`shrink-0 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    selectedPlatform === platform
                        ? "bg-[#3C9379] text-white shadow-md"
                        : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                >
                    {platform}
                </button>
                ))}
            </div>
        </div>
      {/* tabel */}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-[640px] w-full">
          <thead>
            <tr className="bg-gray-200">
                <th className="w-[25%] px-4 py-3 text-left">Nama TO</th>
                <th className="w-[15%] px-4 py-3 text-center">Skor</th>
                <th className="w-[15%] px-4 py-3 text-center">PG</th>
                <th className="w-[20%] px-4 py-3 text-center">Harga</th>
                <th className="w-[10%] px-4 py-3 text-center">Lihat</th>
            </tr>
            </thead>

          <tbody>
            {filteredData.length > 0 ? (
                filteredData.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                    <td className="px-4 py-4">
                    <div className="flex flex-col gap-1">
                        <span className="font-medium text-gray-900">
                        {item.nama}
                        </span>

                        <div className="flex flex-wrap items-center gap-2">
                        <span className="w-fit rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600">
                            {item.platform}
                        </span>

                        <span className="text-[11px] text-gray-500">
                            {item.tanggal}
                        </span>
                        </div>
                    </div>
                    </td>

                    <td className="px-4 py-4 text-center font-semibold">
                    {item.skor}
                    </td>

                    <td className="px-4 py-4 text-center">
                      <span
                          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                          item.pgLulus
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-red-50 text-red-700"
                          }`}
                      >
                          <span
                          className={`h-2 w-2 rounded-full ${
                              item.pgLulus
                              ? "bg-emerald-500"
                              : "bg-red-500"
                          }`}
                          />
                          {item.pgLulus ? "Lulus PG" : "Tidak Lulus PG"}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-center">
                      {item.harga}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => setSelectedTO(item)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-100"
                      >
                        <Eye size={18} />
                      </button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td
                    colSpan={5}
                    className="px-6 py-16 text-center"
                >
                    <div className="flex flex-col items-center gap-2">
                    <span className="text-lg font-medium text-gray-700">
                        Belum mengerjakan Tryout
                    </span>

                    <span className="text-sm text-gray-500">
                        Tidak ada data tryout pada platform ini.
                    </span>
                    </div>
                </td>
                </tr>
            )}
            </tbody>
        </table>
        {selectedTO && (
          <div
            className="fixed inset-0 z-70 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedTO(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b px-5 py-4">
                <div>
                  <h3 className="font-semibold">
                    {selectedTO.nama}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {selectedTO.platform}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedTO(null)}
                  className="rounded-lg p-2 hover:bg-gray-100"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Screenshot */}
              <div className="p-4">
                <img
                  src={selectedTO.screenshot}
                  alt={selectedTO.nama}
                  className="max-h-[70vh] w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}