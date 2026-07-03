"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button"; 

const RESUME_PATH = "/resume.pdf";
const RESUME_FILENAME = "Mohammad_Waliullah_Resume.pdf";

const Hero = () => {
  const handleViewResume = () => {
    window.open(RESUME_PATH, "_blank", "noopener,noreferrer");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = RESUME_PATH;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              SQA Engineer
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="mt-10 flex h-full w-full flex-col items-center justify-center md:mt-0">
          <div>
            <Button
              size="lg"
              onClick={handleViewResume}
              className="mr-4 cursor-pointer bg-[#F48F68] p-6 hover:bg-[#F48F68]/90"
            >
              <Eye />
              View Resume
            </Button>
            <Button
              size="lg"
              onClick={handleDownloadResume}
              className="cursor-pointer bg-[#EA5252] p-6 hover:bg-[#EA5252]/90"
            >
              <Download />
              Download Resume
            </Button>
          </div>
          <div className="flex gap-3 mt-4">
            <Link target="_blank" href="https://github.com/wali55" className="cursor-pointer">
              <Image src="/github.png" alt="github" width={30} height={30} />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/wali55/" className="cursor-pointer">
              <Image src="/linkedin.png" alt="linkedin" width={30} height={30} />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/wali.ullah.3154284" className="cursor-pointer">
              <Image src="/facebook.png" alt="facebook" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;