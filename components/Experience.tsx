import { Briefcase } from "lucide-react"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const Experience = () => {
  return (
    <div id="experience" className="mx-auto mt-60 max-w-6xl px-6">
      <h1 className="text-center text-4xl font-bold text-neutral-900">
        Experience
      </h1>

      <div className="mt-10 flex w-full flex-col gap-6">
        <Item variant="outline" className="bg-white">
          <ItemMedia variant="icon">
            <Briefcase />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Software Developer</ItemTitle>
            <ItemDescription>Cashless Ai (Jan 2026 - Present)</ItemDescription>
            <ItemDescription>
              I am working as Junior software developer in Cashless Ai. Woking
              with technologies like Nextjs, Typescript, Redux toolkit etc.
            </ItemDescription>
          </ItemContent>
        </Item>

        <Item variant="outline" className="bg-white">
          <ItemMedia variant="icon">
            <Briefcase />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Web Development Intern</ItemTitle>
            <ItemDescription>
              Itransition Group (Jul 2025 - Sep 2025)
            </ItemDescription>
            <ItemDescription>
              Attended technical lectures on React.js, Git & GitHub, Regular
              Expressions (RegExp), and SQL. Developed and submitted multiple
              full-stack web applications, including: Inventory Management
              System, Collaborative Presentation Software etc.
            </ItemDescription>
          </ItemContent>
        </Item>

        <Item variant="outline" className="bg-white">
          <ItemMedia variant="icon">
            <Briefcase />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>SQA Engineer</ItemTitle>
            <ItemDescription>
              Bytebridge IT Solutions LLC (Dec 2023 - May 2025)
            </ItemDescription>
            <ItemDescription>
              Testing different kinds of apps of these companies both web and
              mobile version. These are investment app, e-commerce app,
              accounting app, employee management app etc.
            </ItemDescription>
          </ItemContent>
        </Item>

        <Item variant="outline" className="bg-white">
          <ItemMedia variant="icon">
            <Briefcase />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Frontend Developer Intern</ItemTitle>
            <ItemDescription>
              Bytebridge IT Solutions LLC (Aug 2023 - Nov 2023)
            </ItemDescription>
            <ItemDescription>
              I got a chance to work in production grade application, an
              accounting app. It's frontend is done in React. Redux is used for
              state management. I have learned how to integrate API to show
              data.
            </ItemDescription>
          </ItemContent>
        </Item>
      </div>
    </div>
  )
}

export default Experience
