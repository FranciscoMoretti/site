import React from "react"
import { ImageResponse } from "@vercel/og"

import { ogImageSchema } from "@/lib/validations/og"

export const runtime = "edge"

const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

function PlainLogo({ size }) {
  const viewBoxSize = 136.51
  const scaleFactor = size / viewBoxSize

  const scaledWidth = viewBoxSize * scaleFactor
  const scaledHeight = viewBoxSize * scaleFactor

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      width={scaledWidth}
      height={scaledHeight}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_5" data-name="Layer 5">
          <path
            className="cls-1"
            fill="none"
            stroke="#005b8c"
            strokeWidth="42px"
            strokeMiterlimit="10"
            d="M96.78,111.91h0A19.85,19.85,0,0,0,116.66,92V44.53A19.91,19.91,0,0,0,96.75,24.62H89.18"
          />
          <path
            className="cls-1"
            fill="none"
            stroke="#005b8c"
            strokeWidth="42px"
            strokeMiterlimit="10"
            d="M51.28,24.62H42.71A19.92,19.92,0,0,0,22.79,44.53V92a19.89,19.89,0,0,0,19.88,19.91h0"
          />
          <g id="Head">
            <path
              className="cls-2"
              fill="#ffcc4a"
              d="M51.28,8.58v16H42.71A19.92,19.92,0,0,0,22.79,44.53V92a19.89,19.89,0,0,0,19.88,19.91h0v16H96.78v-16h0A19.85,19.85,0,0,0,116.66,92V44.53A19.91,19.91,0,0,0,96.75,24.62H89.18v-16"
            />
            <g id="Eyes">
              <circle
                className="cls-3"
                fill="#211f1f"
                stroke="#211f1f"
                strokeWidth="4px"
                cx="52.78"
                cy="59.34"
                r="5.65"
              />
              <circle
                className="cls-3"
                fill="#211f1f"
                stroke="#211f1f"
                strokeWidth="4px"
                cx="86.68"
                cy="59.34"
                r="5.65"
              />
            </g>
            <path
              id="Smile"
              className="cls-4"
              fill="none"
              stroke="#211f1f"
              strokeLinecap="round"
              strokeWidth="11px"
              d="M52.82,84a27.29,27.29,0,0,0,33.82,0"
            />
          </g>
          <rect className="cls-5" fill="none" width="136.51" height="136.51" />
        </g>
      </g>
    </svg>
  )
}

export async function GET(req: Request) {
  try {
    const fontBold = await interBold

    const url = new URL(req.url)
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
    const heading =
      values.heading.length > 140
        ? `${values.heading.substring(0, 140)}...`
        : values.heading

    const { mode } = values
    const paint = mode === "dark" ? "#fff" : "#000"

    const fontSize = heading.length > 100 ? "55px" : "80px"

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start"
          style={{
            color: paint,
            background:
              mode === "dark"
                ? "linear-gradient(90deg, #000 0%, #111 100%)"
                : "#FDF8EC",
          }}
        >
          <PlainLogo size={100} />
          <div tw="flex flex-col flex-1 py-10">
            <div
              tw="flex text-3xl uppercase font-bold tracking-tight"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              {values.type}
            </div>
            <div
              tw="flex leading-[1.1] text-[80px] font-bold tracking-tighter"
              style={{
                fontFamily: "Inter",
                fontWeight: "bolder",
                marginLeft: "-3px",
                fontSize,
              }}
            >
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div
              tw="flex text-xl"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              franciscomoretti.com
            </div>
            <div
              tw="flex items-center text-xl"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
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
              <div tw="flex ml-2">github.com/franciscomoretti/site</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            weight: 700,
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
