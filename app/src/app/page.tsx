import { CustomInput } from "@/components/composite/CustomInput";
import { CustomTextarea } from "@/components/composite/CustomTextarea";
import { Navbar } from "@/components/composite/Navbar";
import { Button } from "@/components/simple/Button";
import { Heading } from "@/components/simple/Heading";
import { Input } from "@/components/simple/Input";
import { Text } from "@/components/simple/Text";
import { Textarea } from "@/components/simple/Textarea";
import Image from "next/image";

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
          className="h-[85vh] w-full bg-slate-200 flex justify-center items-center gap-4"
      >
        <Input placeholder="Digite algo..."/>
        <CustomInput className="w-1/2" style={"secondary"}> 
          <CustomInput.Visual>
            <Image src="/next.svg" alt="..." width={32} height={32}/>
          </CustomInput.Visual>
          <CustomInput.Field id="input" placeholder="Digite algo..." />
        </CustomInput>

        <Textarea placeholder="Digite algo..."/>
        <CustomTextarea className="w-1/2" style={"secondary"}> 
          <CustomTextarea.Visual>
            <Image src="/next.svg" alt="..." width={32} height={32}/>
          </CustomTextarea.Visual>
          <CustomTextarea.Field id="input" placeholder="Digite algo..." />
        </CustomTextarea>
        <Button style={'secondary'}>Teste</Button>
      </div>      
    </main>
  );
}
