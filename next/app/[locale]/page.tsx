export default function LocalHome({ params }: { params: { local: string } }) {
  return (
    <main>
      <h1>Welcome to locale: {params.local}</h1>
    </main>
  );
}
