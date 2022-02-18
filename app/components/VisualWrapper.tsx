export function VisualWrapper({ children, color }: React.PropsWithChildren<{ color: string }>) {
  return <div style={{ padding: "2rem", margin: "2rem", border: `2px solid ${color}` }}>{children}</div>;
}
