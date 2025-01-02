import { ImageResponse } from '@vercel/og'

import { ogImageSchema } from '@/lib/validations/og'
import siteMetadata from '@/data/siteMetadata'

export const runtime = 'edge'

const interRegular = fetch(
  new URL('../../../assets/fonts/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

const interBold = fetch(new URL('../../../assets/fonts/Inter-Bold.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer()
)

// const interBold = fetch(
//   new URL('../../../assets/fonts/OpenSans-ExtraBold.ttf', import.meta.url)
// ).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
  try {
    const fontRegular = await interRegular
    const fontBold = await interBold
    // const fontBold = await interBold

    const url = new URL(req.url)
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
    const heading =
      values.heading.length > 140 ? `${values.heading.substring(0, 140)}...` : values.heading

    const { mode } = values
    const paint = mode === 'dark' ? '#fff' : '#000'

    // Dynamic font size calculation
    const getFontSize = (length: number) => {
      if (length < 40) return 'text-[100px]'
      if (length < 80) return 'text-[80px]'
      if (length < 120) return 'text-[60px]'
      return 'text-[50px]'
    }

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start"
          style={{
            color: paint,
            background: mode === 'dark' ? 'linear-gradient(90deg, #000 0%, #111 100%)' : 'white',
          }}
        >
          {siteMetadata.siteLogo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={
                siteMetadata.siteLogo.startsWith('/')
                  ? siteMetadata.siteUrl + siteMetadata.siteLogo
                  : siteMetadata.siteLogo
              }
              alt="Logo"
              width={50}
              height={50}
            />
          )}
          <div tw="flex flex-col flex-1 py-10">
            <div
              tw="flex text-xl uppercase font-bold tracking-tight"
              style={{ fontFamily: 'Inter', fontWeight: 'normal' }}
            >
              {values.type}
            </div>
            <div
              tw={`flex leading-[1.1] ${getFontSize(heading.length)} font-bold`}
              style={{
                fontFamily: 'Inter Bold',
                fontWeight: 'bold',
                marginLeft: '-3px',
              }}
            >
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl" style={{ fontFamily: 'Inter', fontWeight: 'normal' }}>
              {siteMetadata.siteUrl}
            </div>
            {siteMetadata.github && (
              <div
                tw="flex items-center text-xl"
                style={{ fontFamily: 'Inter', fontWeight: 'normal' }}
              >
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M30 44v-8a9.6 9.6 0 0 0-2-7c6 0 12-4 12-11 .16-2.5-.54-4.96-2-7 .56-2.3.56-4.7 0-7 0 0-2 0-6 3-5.28-1-10.72-1-16 0-4-3-6-3-6-3-.6 2.3-.6 4.7 0 7a10.806 10.806 0 0 0-2 7c0 7 6 11 12 11a9.43 9.43 0 0 0-1.7 3.3c-.34 1.2-.44 2.46-.3 3.7v8"
                    stroke={paint}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 36c-9.02 4-10-4-14-4"
                    stroke={paint}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div tw="flex ml-2">{siteMetadata.github.replace('https://', '')}</div>
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontRegular,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Inter Bold',
            data: fontBold,
            weight: 700,
            style: 'normal',
          },
        ],
      }
    )
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
