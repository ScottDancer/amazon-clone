import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <div>
      <HeaderLogo>


      </HeaderLogo>
      <HeaderOptionAddress>
        <OptionLineOne>Hello,</OptionLineOne>
        <OptionLineTwo>Select Your Address</OptionLineTwo>
      </HeaderOptionAddress>
    </div>
  )
}

export default Header

const HeaderLogo = styled.div`
  height: 60px;
  background-color: #0f1111;
`
const HeaderOptionAddress = styled.div`

`
const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`

`
  
