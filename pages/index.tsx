import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import VideoPanel from "./components/videoPanel";
import RobotController from "./components/RobotController";
import NotificationCard from "./components/NotificationSection";
import NotificationSection from "./components/NotificationSection";
import DataSection from "./components/DataSection";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main_column}>
        <div className={styles.main_row}>
          <VideoPanel />
          <VideoPanel />
          <VideoPanel />
        </div>
        <div className={styles.bottom_row}>
          <div className={styles.left_column}>
            <NotificationSection />
            <DataSection />
          </div>
          <div className={styles.right_column}>
            <RobotController />
          </div>
          {/* <NotificationSection />
            <DataSection />
            <RobotController /> */}
        </div>
      </main>
    </>
  );
}
