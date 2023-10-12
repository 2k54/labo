// page.tsx
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useCounter } from "../../hooks/useCounter";
import { Items } from "@/components/Items";
import { ItemDatas } from "../../datas/ItemDatas";

export default function Home() {
  const { count, increment, decrement } = useCounter();
  return (
    <main className={styles.main}>
      <Items items={ItemDatas} />
      <p>Count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </main>
  );
}
