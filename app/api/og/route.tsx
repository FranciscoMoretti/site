import React from "react"
import { ImageResponse } from "next/og"

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

    const tags = values.tags ? values.tags.split("|") : []

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
            <div
              tw="mt-4 flex flex-row flex-wrap"
              style={{
                fontFamily: "Inter",
                fontWeight: "bolder",
                marginLeft: "-3px",
                fontSize,
              }}
            >
              {tags.map((tag) => (
                <div
                  tw="border-2 border-black rounded-full m-1 px-3 py-1 text-3xl font-bold text-black"
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div
              tw="flex text-2xl"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              franciscomoretti.com
            </div>
            <div
              tw="flex items-center text-xl"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              <PlainLogo size={80} />
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
