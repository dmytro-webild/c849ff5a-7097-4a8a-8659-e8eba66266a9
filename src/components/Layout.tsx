import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="gridLines" heroBackground="lightRaysCorner">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Southern Blades"
      ctaButton={{
        text: "Get Quote",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="Southern Blades Landscape Services LLC"
      columns={[
        {
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Address: 5910 Rhonda Dr, Macon, GA 31216",
              href: "#",
            },
            {
              label: "Phone: (478) 954-7989",
              href: "tel:4789547989",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
