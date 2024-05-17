import Avatar from "boring-avatars";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between border-b border-secondary px-4 py-4 items-center text-primary">
        <div>
          <Image
            width={48}
            height={48}
            src="/navLogo.png"
            alt="Navbar Logo"
            priority
          />
        </div>
        <div>
          <Avatar
            size={38}
            name="Maggie"
            variant="beam"
            colors={["#CCCC66", "#A6BF73", "#80B380", "#59A68C", "#339999"]}
          />
        </div>
      </div>
    </>
  );
}
