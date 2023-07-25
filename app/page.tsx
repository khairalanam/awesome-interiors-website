import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carii",
  description:
    "We are an interior design agency with a knack for awesome interior design",
};

export default function Home() {
  return <Header />;
}
