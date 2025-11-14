import Image from "next/image";
export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary bg-opacity-70">
      <div className="w-20 h-20  rounded-full animate-ping">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>
    </div>
  );
}
