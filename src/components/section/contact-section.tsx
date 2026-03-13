import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 my-20 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-xl font-medium">Hire Me</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />  
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Let's Make Something Great!
        </h2>
        <p className="mx-auto max-w-150 text-muted-foreground text-balance text-xl ">
          I'm available for freelance projects or internship at your startup. I can  help building and deploying a modern web platform, let's connect and turn your idea into a working product.
        </p>

        <div className="flex justify-center gap-5" >
          <a href="mailto:aryanjhaop@gmail.com">
            <button 
              className="bg-primary text-background py-1 px-6 rounded-sm hover:bg-primary/90 hover:cursor-pointer">
              Send an Mail
            </button>
          </a>
          <a href="https://drive.google.com/file/d/1F2kpmNFNopRr3D4VR059WMAnOUflqviJ/preview" target="_blank" >
            <button 
              className="outline-1 text-primary py-1 px-6 rounded-sm hover:bg-primary/10 hover:cursor-pointer">
              Resume
            </button>
          </a>

        </div>

      </div>
    </div>
  );
}

