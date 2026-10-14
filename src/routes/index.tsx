import { createFileRoute } from "@tanstack/react-router";
import { BakeryMenu } from "@/components/bakery-menu";
import { validateMenuSearch } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  validateSearch: validateMenuSearch,
  head: () => ({ meta: [
    { title: "Pão & Gourmet | Pães & cardápio artesanal" },
    { name: "description", content: "Explore o cardápio da Pão & Gourmet: pães artesanais, bolos, pães de queijo e bebidas. Sabores para todos os momentos." },
    { property: "og:title", content: "Pão & Gourmet | Pães & cardápio artesanal" },
    { property: "og:description", content: "Pães artesanais, receitas que acolhem e pequenos prazeres para todos os dias." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  const { style } = Route.useSearch();
  const navigate = Route.useNavigate();
  return <BakeryMenu page="bakery" style={style} onStyleChange={(value) => navigate({ search: { style: value }, resetScroll: false })} />;
}
