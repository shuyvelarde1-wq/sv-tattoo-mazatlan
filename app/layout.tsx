import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SV Tattoo Mazatlán | Tatuajes en Mazatlán",
  description:
    "Estudio de tatuajes en Mazatlán especializado en realismo, fineline y diseños personalizados. Agenda tu cita con Shuy Velarde.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}