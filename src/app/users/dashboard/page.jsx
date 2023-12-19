import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  console.log(user);

  return (
    <>
      <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
        <h5>Wellcome, {user.name}</h5>
        <Image src={user.image} alt="..." width={250} height={250}></Image>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/collectio"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Comment
        </Link>
      </div>
    </>
  );
};

export default Page;
