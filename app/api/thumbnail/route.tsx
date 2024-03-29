import React from "react"
import { ImageResponse } from "next/og"

import { thumbnailImageSchema } from "@/lib/validations/thumbnail"

// Draft https://play.tailwindcss.com/VX1V9h8bhT

export const runtime = "edge"

const interBold = fetch(
  new URL("../../../assets/fonts/OpenSans-ExtraBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
  try {
    const fontBold = await interBold

    const url = new URL(req.url)

    const values = thumbnailImageSchema.parse(
      Object.fromEntries(url.searchParams)
    )

    const headingLines = [
      {
        text: values.line1,
        size: "90px",
      },
      {
        text: values.line2,
        size: values.line2.length < 12 ? "120px" : "100px",
      },
      { text: values.line3, size: "90px" },
    ]

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
          <div tw="flex flex-col h-full border-4  border-[#005B8C] justify-center items-center text-white uppercase">
            {headingLines.map((headingRow, index) => (
              <span
                key={headingRow.text}
                tw={index == 1 ? "px-6 bg-[#005B8C]  my-2" : ""}
              >
                <div
                  tw={`text-[${headingRow.size}] font-extrabold leading-[110px]`}
                  style={{
                    fontFamily: "SansSerif",
                    fontWeight: "extrabold",
                    marginLeft: "-3px",
                  }}
                >
                  {headingRow.text}
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
