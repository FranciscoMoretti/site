import { permanentRedirect } from 'next/navigation'

export default function LegacyContentPage() {
  permanentRedirect('/')
}
