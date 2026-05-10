import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Mail, Phone, Smartphone } from "lucide-react"

const Contact = () => {
  return (
    <div id="contact" className="mx-auto mt-60 max-w-6xl px-6">
      <h1 className="text-center text-4xl font-bold text-neutral-900">
        Contact
      </h1>
      <div className="mt-10 flex w-full flex-col gap-6">
      <Item variant="outline" className="bg-white">
          <ItemMedia variant="icon">
            <Mail />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Email: walisantunu@gmail.com</ItemTitle>
          </ItemContent>
        </Item>

      <Item variant="outline" className="bg-white">
          <ItemMedia variant="icon">
            <Phone />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Mobile: +8801709934427</ItemTitle>
          </ItemContent>
        </Item>

      <Item variant="outline" className="bg-white">
          <ItemMedia variant="icon">
            <Smartphone />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>WhatsApp: +8801965470730</ItemTitle>
          </ItemContent>
        </Item>
        </div>
    </div>
  )
}

export default Contact
