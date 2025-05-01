"use client";
import useStore from "../lib/store";

export default function Home() {
  const { bears, increase } = useStore();

  return (
    <div>
      <div>{bears}</div>
      <div onClick={() => increase(1)}>add</div>
      licz czas, jakis zegar i po zatwierdzeniu do jakiego taska to
    </div>
  );
}
