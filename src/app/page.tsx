import Image from "next/image";

async function getData(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const _links = [
    {
      title: "FaceBook",
      link: "https://facebook.com",
      icon: "https://ik.imagekit.io/kqeqhqvaw/links%20page/facebook-logo.png?updatedAt=1697005330346",
      color: "hover:bg-blue-500",
    },
    {
      title: "Instagram",
      link: "https://instagram.com",
      icon: "https://ik.imagekit.io/kqeqhqvaw/links%20page/instagram-logo.png?updatedAt=1697005264757",
      color: "hover:bg-pink-500",
    },
    {
      title: "Twitter / X",
      link: "https://x.com",
      icon: "https://ik.imagekit.io/kqeqhqvaw/links%20page/twitter-logo.png?updatedAt=1697063084942",
      color: "hover:bg-sky-300",
    },
    {
      title: "YouTube",
      link: "https://youtube.com",
      icon: "https://ik.imagekit.io/kqeqhqvaw/links%20page/youtube-logo.png?updatedAt=1697005264566",
      color: "hover:bg-red-500",
    },
    {
      title: "Github",
      link: "https://github.com",
      icon: "https://ik.imagekit.io/kqeqhqvaw/links%20page/github-logo.png?updatedAt=1697005264633",
      color: "hover:bg-neutral-400",
    },
  ];

  const _linkPageData = {
    title: "Johnny Appleseed",
    subtitle: "Accountant & Bookkeeper",
    profile_image:
      "https://ik.imagekit.io/kqeqhqvaw/links%20page/black-avatar-3025348_1280.png?updatedAt=1697013274245",
  };

  const linkPageData = await getData(
    `${process.env.NEXT_PUBLIC_LINK_PAGE_DATA}`,
  );

  const links = await getData(`${process.env.NEXT_PUBLIC_LINKS}`);

  return (
    <main className="pb-16">
      <div className="flex min-h-screen w-full flex-col justify-center gap-4">
        <div className="flex flex-col items-center gap-4">
          <div className="full overflow-hidden rounded-full bg-white">
            <Image
              src={linkPageData[0].profile_image}
              width={200}
              height={200}
              className="aspect-square translate-y-4"
              alt="profile picture"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="text-xl uppercase text-white">{linkPageData.title}</p>
            <p className="text-md text-white">{linkPageData.subtitle}</p>
          </div>
        </div>
        {links.map((link: any, i: number) => (
          <a
            className="relative mx-auto flex w-full max-w-md justify-center gap-4 rounded-full border border-white p-2 px-4 text-center text-xl text-white transition hover:border-transparent hover:bg-white hover:text-black"
            href={link.link}
            target="_blank"
            key={i}
          >
            <div className="absolute bottom-2 left-2 top-2 flex aspect-square items-center overflow-hidden rounded-full bg-white p-1">
              <Image src={link.icon} width={30} height={30} alt="logo" />
            </div>
            <p className="flex items-center">{link.title}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
