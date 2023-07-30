import React from "react"
import { ImageResponse } from "@vercel/og"

import { thumbnailImageSchema } from "@/lib/validations/thumbnail"

export const runtime = "edge"

const interBold = fetch(
  new URL("../../../assets/fonts/OpenSans-ExtraBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
  try {
    const fontBold = await interBold

    const url = new URL(req.url)
    console.log(url.searchParams)

    const values = thumbnailImageSchema.parse(
      Object.fromEntries(url.searchParams)
    )

    console.log(Object.fromEntries(url.searchParams))
    const headingLines = [values.line1, values.line2, values.line3]

    const paint = "#fff"

    return new ImageResponse(
      (
        <div
          tw="flex relative justify-center flex-col p-12 w-full h-full"
          style={{
            color: paint,
            background: "#020D1C",
          }}
        >
          <div tw="flex flex-col h-full justify-center items-center text-white uppercase">
            {headingLines.map((headingRow, index) => (
              <span
                key={headingRow}
                tw={index == 1 ? "px-6 bg-[#005B8C] rounded-2xl" : ""}
              >
                <div
                  tw={`text-[${
                    index == 1 ? "120px" : "100px"
                  }] font-extrabold `}
                  style={{
                    fontFamily: "SansSerif",
                    fontWeight: "extrabold",
                    marginLeft: "-3px",
                  }}
                >
                  {headingRow}
                </div>
              </span>
            ))}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "SansSerif",
            data: fontBold,
            weight: 800,
            style: "normal",
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
