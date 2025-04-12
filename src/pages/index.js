import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Thumbnail from "@/components/Thumbnail/Thumbnail";
import Aboutus from "@/components/Aboutus/Aboutus";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Thumbnail/>
      {/* <Aboutus/> */}
    </>
  );
}
