import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="mx-auto my-60 max-w-6xl px-6">
      <div className="h-4 w-full border-t border-neutral-200 flex justify-between items-center">
        <div className="flex gap-2 mt-10">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
            className="max-h-8 dark:invert"
            alt="portfolio"
          />
          <span className="text-lg font-semibold tracking-tighter">
            Portfolio
          </span>
        </div>

        <div className="mt-4 flex gap-3 mt-10">
          <Link
            target="_blank"
            href="https://github.com/wali55"
            className="cursor-pointer"
          >
            <Image src="/github.png" alt="github" width={30} height={30} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/wali55/"
            className="cursor-pointer"
          >
            <Image src="/linkedin.png" alt="linkedin" width={30} height={30} />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/wali.ullah.3154284"
            className="cursor-pointer"
          >
            <Image src="/facebook.png" alt="facebook" width={30} height={30} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
