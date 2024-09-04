import { footerProps } from "@lib/types";

export default function Footer({studentId, year, fullName}: footerProps) {
  return (
    <div className="mt-3">
      <hr />
      <p className="text-secondary text-center">Copyright {studentId} {year} {fullName}</p>
    </div>
  );
}