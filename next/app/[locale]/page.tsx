import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/fr'); // or whichever default locale you want
}
