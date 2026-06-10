import { permanentRedirect } from 'next/navigation'

export default function LegacyContentPostPage() {
  permanentRedirect('/')
}
