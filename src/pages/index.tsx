import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import userApi from "@/services/UserApi";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function Home() {

  const handleButtonClick = async()=>{
    console.log("button clicked");
    const response  = await userApi.buttonClicked();
  }
  

  return (
    <>
    <div className="checking" style={{fontFamily: "var(--font-geist-sans)", minWidth: "50%", minHeight: "20%"}}
              onClick={()=>{}}
    >
            click me 
    </div>
    </>
  );
}
