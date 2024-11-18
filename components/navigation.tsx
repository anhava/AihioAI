'use client';

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Search, 
  Menu, 
  BookOpen, 
  Newspaper, 
  PenTool, 
  Bot, 
  Lightbulb,
  Wrench,
  LogIn,
  UserPlus,
  ChevronRight
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { LucideIcon } from "lucide-react";

interface NavigationItem {
  title: string;
  href?: string;
  icon: LucideIcon;
  items?: {
    title: string;
    href: string;
    description: string;
    icon: LucideIcon;
  }[];
}

const navigationItems: NavigationItem[] = [
  {
    title: "Articles",
    icon: BookOpen,
    items: [
      {
        title: "Guides",
        href: "/oppaat",
        description: "Comprehensive guides for AI development",
        icon: PenTool
      },
      {
        title: "News",
        href: "/uutiset",
        description: "Latest updates in AI technology",
        icon: Newspaper
      },
      {
        title: "Blog",
        href: "/blogi",
        description: "Insights and experiences from our experts",
        icon: Lightbulb
      }
    ]
  },
  {
    title: "AI Services",
    href: "/tekoalypalvelut",
    icon: Bot
  },
  {
    title: "AI Glossary",
    href: "/sanasto",
    icon: BookOpen
  },
  {
    title: "Tools",
    href: "/tyokalut",
    icon: Wrench
  }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
      )}
      role="banner"
    >
      <div className="mx-auto max-w-screen-2xl">
        <nav className="flex h-16 items-center justify-between px-4 lg:px-8" role="navigation">
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="flex items-center space-x-2"
              aria-label="AI Hub Home"
            >
              <Bot className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="font-bold text-xl">AI Hub</span>
            </Link>

            <DesktopNavigation items={navigationItems} pathname={pathname} />
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden lg:flex"
              aria-label="Search"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </Button>

            <ThemeToggle />

            <DesktopAuthButtons />
            <MobileNavigation items={navigationItems} />
          </div>
        </nav>
      </div>
    </header>
  );
}

function DesktopNavigation({ items, pathname }: { items: NavigationItem[], pathname: string }) {
  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null;
  
  return (
    <div className="hidden lg:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.title}>
              {item.items ? (
                <>
                  <NavigationMenuTrigger>
                    <item.icon className="h-4 w-4 mr-2" aria-hidden="true" />
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                <subItem.icon className="h-4 w-4" aria-hidden="true" />
                                {subItem.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {subItem.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.href!} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                      pathname === item.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4 mr-2" aria-hidden="true" />
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function DesktopAuthButtons() {
  return (
    <div className="hidden lg:flex gap-2">
      <Button variant="ghost" asChild className="gap-2">
        <Link href="/auth/login">
          <LogIn className="h-4 w-4" aria-hidden="true" />
          <span>Sign in</span>
        </Link>
      </Button>
      <Button asChild className="gap-2">
        <Link href="/auth/register">
          <UserPlus className="h-4 w-4" aria-hidden="true" />
          <span>Sign up</span>
        </Link>
      </Button>
    </div>
  );
}

function MobileNavigation({ items }: { items: NavigationItem[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-4">
          {items.map((item) => (
            <div key={item.title}>
              {item.items ? (
                <div className="space-y-3">
                  <div className="font-medium flex items-center gap-2">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                    {item.title}
                  </div>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="flex items-center gap-2 px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <subItem.icon className="h-4 w-4" aria-hidden="true" />
                      {subItem.title}
                      <ChevronRight className="h-4 w-4 ml-auto" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href={item.href!}
                  className="flex items-center gap-2 py-1 text-sm font-medium"
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  {item.title}
                  <ChevronRight className="h-4 w-4 ml-auto" aria-hidden="true" />
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 mt-4 border-t">
            <div className="space-y-3">
              <Link 
                href="/auth/login" 
                className="flex items-center gap-2 py-1 text-sm font-medium"
              >
                <LogIn className="h-4 w-4" aria-hidden="true" />
                Sign in
                <ChevronRight className="h-4 w-4 ml-auto" aria-hidden="true" />
              </Link>
              <Link 
                href="/auth/register" 
                className="flex items-center gap-2 py-1 text-sm font-medium"
              >
                <UserPlus className="h-4 w-4" aria-hidden="true" />
                Sign up
                <ChevronRight className="h-4 w-4 ml-auto" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
  let inThrottle: boolean;
  return ((...args: Parameters<T>): void => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }) as T;
}