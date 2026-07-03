import Image from "next/image"

const Skills = () => {
  return (
    <div id="skills" className="mx-auto mt-60 max-w-6xl px-6">
      <h1 className="text-center text-4xl font-bold text-neutral-900">
        Skills
      </h1>

      <h2 className="mt-10 text-xl font-semibold">Quality Assurance</h2>
      <div className="mt-10 flex w-full flex-wrap items-center gap-10">
        <div className="flex flex-col items-center">
          <h3 className="mt-2 font-medium">Manual Testing</h3>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mt-2 font-medium">Test Case Design</h3>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mt-2 font-medium">Test Execution</h3>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mt-2 font-medium">Regression Testing</h3>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mt-2 font-medium">Smoke Testing</h3>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mt-2 font-medium">Sanity Testing</h3>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-semibold">Automation Testing</h2>
      <div className="mt-10 flex w-full flex-wrap items-center gap-10">
        <div className="flex flex-col items-center">
          <h3 className="mt-2 font-medium">Playwright</h3>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mt-2 font-medium">Basic Test Automation</h3>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mt-2 font-medium">End-toEnd Testing</h3>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-semibold">Tools</h2>
      <div className="mt-10 flex w-full flex-wrap items-center gap-10">
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
      </div>
    </div>
  )
}

export default Skills
