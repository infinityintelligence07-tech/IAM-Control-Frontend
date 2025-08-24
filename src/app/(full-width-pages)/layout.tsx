import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IAM Control",
  description: "Esse é o ERP do IAM, que centraliza todas as informações e processos, de todos os departamentos.",
};

export default function FullWidthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
