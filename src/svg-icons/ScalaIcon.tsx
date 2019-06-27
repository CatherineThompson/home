import React from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

const ScalaIcon = (props: SvgIconProps) =>
  <SvgIcon {...props} viewBox="0 0 256 416">
    <defs>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-1">
            <stop stopColor="#4F4F4F" offset="0%"></stop>
            <stop stopColor="#000000" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-2">
            <stop stopColor="#C40000" offset="0%"></stop>
            <stop stopColor="#FF0000" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
      <path d="M0,288 L0,256 C0,250.606222 116.376889,241.571556 192.199111,224 L192.199111,224 C228.828444,232.490667 256,242.968889 256,256 L256,256 L256,288 C256,301.024 228.828444,311.509333 192.199111,320 L192.199111,320 C116.376889,302.424889 0,293.390222 0,288" fill="url(#linearGradient-1)" transform="translate(128.000000, 272.000000) scale(1, -1) translate(-128.000000, -272.000000) "></path>
      <path d="M0,160 L0,128 C0,122.606222 116.376889,113.571556 192.199111,96 L192.199111,96 C228.828444,104.490667 256,114.968889 256,128 L256,128 L256,160 C256,173.024 228.828444,183.509333 192.199111,192 L192.199111,192 C116.376889,174.424889 0,165.390222 0,160" fill="url(#linearGradient-1)" transform="translate(128.000000, 144.000000) scale(1, -1) translate(-128.000000, -144.000000) "></path>
      <path d="M0,224 L0,128 C0,136 256,152 256,192 L256,192 L256,288 C256,248 0,232 0,224" fill="url(#linearGradient-2)" transform="translate(128.000000, 208.000000) scale(1, -1) translate(-128.000000, -208.000000) "></path>
      <path d="M0,96 L0,0 C0,8 256,24 256,64 L256,64 L256,160 C256,120 0,104 0,96" fill="url(#linearGradient-2)" transform="translate(128.000000, 80.000000) scale(1, -1) translate(-128.000000, -80.000000) "></path>
      <path d="M0,352 L0,256 C0,264 256,280 256,320 L256,320 L256,416 C256,376 0,360 0,352" fill="url(#linearGradient-2)" transform="translate(128.000000, 336.000000) scale(1, -1) translate(-128.000000, -336.000000) "></path>
    </g>
  </SvgIcon>

export default ScalaIcon