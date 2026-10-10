"use client";

import CountUp from "react-countup";

export default function StatValue({ value }: { value: string }) {
  const match = value.match(/^(\D*)([\d,]+)(\D*)$/);
  if (!match) return <>{value}</>;
  const [, prefix, digits, suffix] = match;
  const hasComma = digits.includes(",");
  return (
    <>
      {prefix}
      <CountUp end={Number(digits.replace(/,/g, ""))} separator={hasComma ? "," : ""} duration={2} enableScrollSpy scrollSpyOnce />
      {suffix}
    </>
  );
}
