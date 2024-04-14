import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className = "pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="136" cy="125" r="120" /> 
    <rect x="2" y="255" rx="10" ry="10" width="280" height="20" /> 
    <rect x="186" y="301" rx="0" ry="0" width="2" height="8" /> 
    <rect x="4" y="295" rx="10" ry="10" width="280" height="88" /> 
    <rect x="3" y="400" rx="10" ry="10" width="95" height="30" /> 
    <rect x="119" y="400" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton
