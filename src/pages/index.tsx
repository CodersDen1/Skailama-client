import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";

import { useRouter } from "next/router";
import Authentication from "@/pages/authentication";
import Dashboard from "@/pages/dashboard";
import Settings from "@/pages/settings";
import Projects from "@/pages/projects";
import TransScript from "@/pages/transcript";
import styles from "@/styles/Main.module.scss";

export default function Home() {

    const router = useRouter();
    const {page} = router.query;
    const RenderLayout = () => {
        switch (page) {
            case "authentication":  return <Authentication />;
            case "dashboard": return <Dashboard />;
            case "settings": return <Settings />;
            case "projects": return <Projects />;
            case "transcript": return <TransScript />;
            default: return <Authentication />;
        }
    };

  return (
    <div className={styles.Main}>
      {RenderLayout()}
    </div>
  );
}
