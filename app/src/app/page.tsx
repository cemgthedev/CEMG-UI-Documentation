import { Badge } from "@/components/simple/Badge";
import { Button } from "@/components/simple/Button";
import { Heading } from "@/components/simple/Heading";
import { Input } from "@/components/simple/Input";
import { Label } from "@/components/simple/Label";
import { Message } from "@/components/simple/Message";
import { SelectItem } from "@/components/simple/SelectItem";
import { Text } from "@/components/simple/Text";
import { Textarea } from "@/components/simple/Textarea";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Heading className="text-red-600">Heading</Heading>
      <Label className="text-blue-600">Label</Label>
      <Text className="text-green-600">Text</Text>
      <div className="w-2/5 flex flex-col items-center justify-center p-4 gap-4 ring-2 ring-red-500">
        <Message className="text-xl" style="success">Message</Message>
        <Message style="attention">Message</Message>
        <Message style="danger">Message</Message>
      </div>
      <div className="w-2/5 flex flex-col items-center justify-center p-4 gap-4 ring-2 ring-red-500">
        <Textarea placeholder="Placeholder" />
        <Textarea style='secondary'placeholder="Placeholder"/>
      </div>
      <div className="w-2/5 flex flex-col items-center justify-center p-4 gap-4 ring-2 ring-red-500">
        <Input placeholder="Placeholder" />
        <Input style='secondary'placeholder="Placeholder"/>
      </div>
      <div className="flex flex-col items-center justify-center p-4 gap-4">
        <Button>
          Button
        </Button>
        <Button style='secondary'>Button</Button>
        <Button style='dark'>Button</Button>
        <Button style='transparent'>Button</Button>
        <Button style='success'>Button</Button>
        <Button style='attention'>Button</Button>
        <Button style='danger'>Button</Button>
        <Button style='primary-outline'>Button</Button>
        <Button style='secondary-outline'>Button</Button>
        <Button style='dark-outline'>Button</Button>
        <Button style='success-outline'>Button</Button>
        <Button style='attention-outline'>Button</Button>
        <Button style='danger-outline'>Button</Button>
      </div>
      <div className="flex flex-col items-center justify-center p-4 gap-4">
        <Badge>
          Button
        </Badge>
        <Badge style='secondary'>Button</Badge>
        <Badge style='dark'>Button</Badge>
        <Badge style='transparent'>Button</Badge>
        <Badge style='success'>Button</Badge>
        <Badge style='attention'>Button</Badge>
        <Badge style='danger'>Button</Badge>
        <Badge style='primary-outline'>Button</Badge>
        <Badge style='secondary-outline'>Button</Badge>
        <Badge style='dark-outline'>Button</Badge>
        <Badge style='success-outline'>Button</Badge>
        <Badge style='attention-outline'>Button</Badge>
        <Badge style='danger-outline'>Button</Badge>
      </div>
      <div className="flex flex-col items-center justify-center p-4 gap-4">
        <SelectItem>
          Button
        </SelectItem>
        <SelectItem hoverStyle='secondary'>Button</SelectItem>
        <SelectItem hoverStyle='dark'>Button</SelectItem>
        <SelectItem hoverStyle='transparent'>Button</SelectItem>
        <SelectItem hoverStyle='primary-outline'>Button</SelectItem>
        <SelectItem hoverStyle='secondary-outline'>Button</SelectItem>
        <SelectItem hoverStyle='dark-outline'>Button</SelectItem>
      </div>
    </main>
  );
}
