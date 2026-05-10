import { BookOpen } from "lucide-react"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const Education = () => {
  return (
    <div id="education" className="mx-auto mt-60 max-w-6xl px-6">
      <h1 className="text-center text-4xl font-bold text-neutral-900">
        Education
      </h1>

      <div className="mt-10 flex w-full flex-col gap-6">
        <Item variant="outline" className="bg-white">
          <ItemMedia variant="icon">
            <BookOpen />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Research Student</ItemTitle>
            <ItemDescription>Shizuoka University, Japan (Oct 2018 - Mar 2019)</ItemDescription>
          </ItemContent>
        </Item>

        <Item variant="outline" className="bg-white">
          <ItemMedia variant="icon">
            <BookOpen />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Bachelor of Pharmacy</ItemTitle>
            <ItemDescription>East West University, Bangladesh (Jan 2012 - Jun 2016)</ItemDescription>
          </ItemContent>
        </Item>
      </div>
    </div>
  )
}

export default Education
