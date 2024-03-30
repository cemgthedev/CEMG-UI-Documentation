import { Navbar } from "@/components/composite/Navbar";
import { Select } from "@/components/composite/Select";
import { Button } from "@/components/simple/Button";
import { Heading } from "@/components/simple/Heading";
import { Input } from "@/components/simple/Input";
import { Text } from "@/components/simple/Text";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <Navbar className="sticky top-0">
        <Heading>LOGO</Heading>
        <Navbar.Menu reponsive>
          <Navbar.MenuItem style={'primary'}>
            <Text>Item 01</Text>
          </Navbar.MenuItem>
          <Navbar.MenuItem style={'secondary'}>
            <Text>Item 02</Text>
          </Navbar.MenuItem>
          <Navbar.MenuItem style={'dark'}>
            <Text>Item 03</Text>
          </Navbar.MenuItem>
          <Navbar.MenuItem>
            <Text>Item 04</Text>
          </Navbar.MenuItem>
          <Navbar.MenuItem>
            <Text>Item 05</Text>
          </Navbar.MenuItem>
        </Navbar.Menu>
        <Navbar.ResponsiveMenu>
          <Text>Perfil</Text>
          <Navbar.ResponsiveMenuItem>
            <Button style={'primary'} className="py-1">
              X
            </Button>
          </Navbar.ResponsiveMenuItem>
        </Navbar.ResponsiveMenu>
      </Navbar>
      <div
          className="h-[85vh] w-full bg-slate-200 flex flex-col justify-center items-center gap-4"
      >
        <Select style="secondary" className="w-1/2" defaultValue={"Item 02"}>
          <Select.Item>Item 01</Select.Item>
          <Select.Item>Item 02</Select.Item>
          <Select.Item>Item 03</Select.Item>
        </Select>
        <Input placeholder="Digite seu nome" className="w-1/2" />
      </div>      
    </main>
  );
}
