"use client";
import useStore from "../lib/store";

export default function Home() {
  const { bears, increase } = useStore();

  return (
    <div>
      <div>sss</div>
      generuje liste taskow z poszczegolnymi czasami user dla siebie, admin dla wzytskich
    </div>
  );
}
