import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Project = ({project}: any) => {
  return (
    <Card className="relative mx-auto w-full pt-0">
          <div className="absolute inset-0 z-30 aspect-video border-b-4 border-b-[#F48F68]" />
          <img
            src={project.image}
            alt={project.title}
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              size="lg"
              className="mr-4 w-full cursor-pointer bg-[#F48F68] p-6 hover:bg-[#F48F68]/90"
            >
              Details
            </Button>
          </CardFooter>
        </Card>
  )
}

export default Project