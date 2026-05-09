import Image from "next/image"
import { Button } from "./ui/button"
import { Download, Eye } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
    <div id="home" className="max-w-6xl mx-auto mt-60 block w-full md:flex">
      <div className="w-full md:w-1/2">
        <div className="flex w-full items-center justify-center">
          <Image
            src="/profile-min.png"
            alt="profile"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="mt-6">
            <h2 className="mb-2 text-3xl font-bold text-neutral-900">
              Mohammad Waliullah
            </h2>
            <h3 className="text-xl font-medium text-neutral-500">
              Full Stack Developer
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        {/* A clearly visible button in the hero section that allows visitors to view and download your resume with a single click */}
        <div className="mt-10 flex h-full w-full flex-col items-center justify-center md:mt-0">
          <div>
            <Button
              size="lg"
              className="mr-4 cursor-pointer bg-[#F48F68] p-6 hover:bg-[#F48F68]/90"
            >
              <Eye />
              View Resume
            </Button>
            <Button
              size="lg"
              className="cursor-pointer bg-[#EA5252] p-6 hover:bg-[#EA5252]/90"
            >
              <Download />
              Download Resume
            </Button>
          </div>
          <div className="flex gap-3 mt-4">
            <Link target="_blank" href="https://github.com/wali55" className="cursor-pointer">
              <Image src="/github.png" alt="github" width={50} height={50} />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/wali55/" className="cursor-pointer">
              <Image
                src="/linkedin.png"
                alt="linkedin"
                width={50}
                height={50}
              />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/wali.ullah.3154284" className="cursor-pointer">
              <Image
                src="/facebook.png"
                alt="facebook"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
