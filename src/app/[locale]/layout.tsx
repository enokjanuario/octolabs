import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'
import '../globals.css'
import { Analytics } from '@vercel/analytics/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const messages: Record<string, Record<string, string>> = {
    pt: {
      title: 'Octodev | Desenvolvimento de Software',
      description: 'Desenvolvimento de software personalizado: aplicações web, mobile, integrações e consultoria tech.',
    },
    en: {
      title: 'Octodev | Software Development',
      description: 'Custom software development: web applications, mobile, integrations and tech consulting.',
    },
    es: {
      title: 'Octodev | Desarrollo de Software',
      description: 'Desarrollo de software personalizado: aplicaciones web, móviles, integraciones y consultoría tech.',
    },
  }

  const meta = messages[locale] || messages.pt

  return {
    title: meta.title,
    description: meta.description,
    keywords: 'software development, mobile app, web system, react, next.js',
    authors: [{ name: 'Octodev' }],
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/logo.png', type: 'image/png' },
      ],
      apple: '/logo.png',
      shortcut: '/favicon.svg',
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      locale: locale === 'pt' ? 'pt_BR' : locale === 'es' ? 'es_ES' : 'en_US',
      siteName: 'Octodev',
      images: ['/logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Octodev',
              description: 'Custom software development - Web, Mobile and Integrations',
              url: 'https://octodev.com.br',
              logo: 'https://octodev.com.br/logo.png',
              image: 'https://octodev.com.br/logo.png',
              telephone: '+55-31-99150-8940',
              email: 'ejrocha07@gmail.com',
              priceRange: '$$',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-31-99150-8940',
                contactType: 'sales',
                availableLanguage: ['Portuguese', 'English', 'Spanish'],
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Belo Horizonte',
                addressRegion: 'MG',
                addressCountry: 'BR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -19.9167,
                longitude: -43.9345,
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '30',
                bestRating: '5',
                worstRating: '1',
              },
              sameAs: [
                'https://www.linkedin.com/in/enokjrocha/',
                'https://github.com/enokjanuario',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          <div className="noise-overlay" />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
