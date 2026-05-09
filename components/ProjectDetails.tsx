"use client"

import { ChevronLeft } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useParams } from "next/navigation"
import { projects } from "@/data/data"
import { Badge } from "./ui/badge"

const ProjectDetails = () => {
  const params = useParams<{ id: string }>()
  const project = projects.find((project) => project.id === Number(params.id))

  return (
    <div className="mx-auto mt-10 max-w-6xl px-6">
      <Link href="/">
        <Button
          size="lg"
          className="cursor-pointer bg-[#EA5252] p-6 hover:bg-[#EA5252]/90"
        >
          <ChevronLeft />
          Back to homepage
        </Button>
      </Link>

      {project && (
        <Card className="mx-auto mt-10 w-full mb-60">
          <div className="border-b-4 border-b-[#F48F68]">
            <img src={project.image} alt={project.title} />
          </div>
          <CardHeader>
            <CardTitle>{project?.title}</CardTitle>
            <CardDescription>{project.fullDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <h2 className="text-lg font-medium">Stack:</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((singleStack) => (
                <Badge variant="secondary">{singleStack}</Badge>
              ))}
            </div>
          </CardContent>
          <CardContent>
            <p>
              <span className="font-semibold">Live:</span>{" "}
              <Link
                target="_blank"
                className="text-blue-500 underline"
                href={project.live}
              >
                {project.live}
              </Link>
            </p>
            <p>
              <span className="font-semibold">Github:</span>{" "}
              <Link
                target="_blank"
                className="text-blue-500 underline"
                href={project.github}
              >
                {project.github}
              </Link>
            </p>
          </CardContent>
          <CardContent>
            <p>
              <span className="font-semibold">Challenges:</span>{" "}
              {project.challenges}
            </p>
          </CardContent>
          <CardContent>
            <p>
              <span className="font-semibold">Possible Improvements:</span>{" "}
              {project.improvements}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default ProjectDetails
