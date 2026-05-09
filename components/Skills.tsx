import Image from "next/image"

const Skills = () => {
  return (
    <div id="skills" className="max-w-6xl mx-auto mt-60 px-6">
      <h1 className="text-center text-4xl font-bold text-neutral-900">
        Skills
      </h1>
      <h2 className="mt-10 text-xl font-semibold">Frontend</h2>
      <div className="mt-10 flex w-full items-center gap-10 flex-wrap">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[#FADA00] p-1">
            <Image
              src="/javascript.png"
              alt="javascript"
              width={40}
              height={40}
            />
          </div>
          <h3 className="mt-2 font-medium">JavaScript</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[#1778D0] p-1">
            <Image
              src="/typescript.png"
              alt="typescript"
              width={40}
              height={40}
            />
          </div>
          <h3 className="mt-2 font-medium">TypeScript</h3>
        </div>
        <div>
          <Image src="/react.png" alt="react" width={50} height={50} />
          <h3 className="mt-2 font-medium">React</h3>
        </div>
        <div>
          <Image src="/next.png" alt="next" width={50} height={50} />
          <h3 className="mt-2 font-medium">Nextjs</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-white p-1">
            <Image src="/tailwind.png" alt="tailwind" width={35} height={35} />
          </div>
          <h3 className="mt-2 font-medium">Tailwind</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-white p-1">
            <Image src="/redux.png" alt="redux" width={35} height={35} />
          </div>
          <h3 className="mt-2 font-medium">Redux</h3>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-semibold">Backend</h2>
      <div className="mt-10 flex w-full items-center gap-10 flex-wrap">
        <div className="flex flex-col items-center">
          <div className="rounded-full p-1">
            <Image src="/node.png" alt="node" width={40} height={40} />
          </div>
          <h3 className="mt-2 font-medium">Node.js</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full p-1">
            <Image src="/express.png" alt="express" width={40} height={40} />
          </div>
          <h3 className="mt-2 font-medium">Express.js</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full p-1">
            <Image
              src="/postgresql.png"
              alt="postgresql"
              width={40}
              height={40}
            />
          </div>
          <h3 className="mt-2 font-medium">PostgreSQL</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full p-1">
            <Image src="/prisma.png" alt="prisma" width={40} height={40} />
          </div>
          <h3 className="mt-2 font-medium">Prisma</h3>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-semibold">Tools</h2>
      <div className="mt-10 flex w-full items-center gap-10 flex-wrap">
        <div className="flex flex-col items-center">
          <div className="rounded-full p-1">
            <Image src="/postman.png" alt="postman" width={40} height={40} />
          </div>
          <h3 className="mt-2 font-medium">Postman</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full p-1">
            <Image src="/github2.png" alt="github" width={40} height={40} />
          </div>
          <h3 className="mt-2 font-medium">Github</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full p-1">
            <Image src="/docker.png" alt="docker" width={40} height={40} />
          </div>
          <h3 className="mt-2 font-medium">Docker</h3>
        </div>
      </div>
    </div>
  )
}

export default Skills
