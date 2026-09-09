"use client";

export default function PrintButton() {
  return (
    <button className="rs-print" onClick={() => window.print()}>
      Print
    </button>
  );
}
