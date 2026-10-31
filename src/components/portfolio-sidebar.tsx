import { Link, useRouterState } from "@tanstack/react-router";
import { Home, UserRound, FolderCode, Github, Linkedin, Mail, Shield, ArrowUpRight } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/portfolio";
import {
  Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger, useSidebar,
} from "@/components/ui/sidebar";

const pages = [
  { title: "Start", url: "/", icon: Home },
  { title: "Om mig", url: "/om-mig", icon: UserRound },
  { title: "Se projekten", url: "/projekt", icon: FolderCode },
  { title: "Kontakt", url: "/kontakt", icon: Mail },
] as const;

export function PortfolioSidebar() {
  const pathname = useRouterState({ select: (router) => router.location.pathname });
  const { setOpenMobile } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border py-5">
        <SidebarMenu><SidebarMenuItem>
          <SidebarMenuButton asChild size="lg" tooltip="Martin">
            <Link to="/" onClick={() => setOpenMobile(false)}>
              <Shield className="text-primary" />
              <span className="flex flex-col group-data-[collapsible=icon]:hidden"><span className="font-semibold">Martin</span><span className="text-xs text-muted-foreground">IT-säkerhetsstudent</span></span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem></SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="pt-6">
          <nav aria-label="Huvudmeny">
            <SidebarMenu className="gap-2">
              {pages.map((page) => (
                <SidebarMenuItem key={page.url}>
                  <SidebarMenuButton asChild tooltip={page.title} isActive={pathname === page.url} className="data-[active=true]:text-primary">
                    <Link to={page.url} onClick={() => setOpenMobile(false)} aria-current={pathname === page.url ? "page" : undefined}>
                      <page.icon /><span>{page.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="GitHub">
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpenMobile(false)}>
                    <Github /><span>GitHub</span><ArrowUpRight className="ml-auto group-data-[collapsible=icon]:hidden" />
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="LinkedIn">
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpenMobile(false)}>
                    <Linkedin /><span>LinkedIn</span><ArrowUpRight className="ml-auto group-data-[collapsible=icon]:hidden" />
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </nav>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarTrigger className="md:hidden" aria-label="Stäng menyn" />
        <p className="px-2 py-3 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">© {new Date().getFullYear()} Martin</p>
      </SidebarFooter>
    </Sidebar>
  );
}