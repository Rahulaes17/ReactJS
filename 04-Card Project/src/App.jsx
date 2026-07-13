import React from 'react'
import Card from './components/Card'


const App = () => {
  return (
    <div className='parent'>
      <Card img="https://imgs.search.brave.com/MLiW5IHWa5p8-QjsBFBAF3dSgthfXyz5V5muF-q7Umw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/NzY2LzIyMy9zbWFs/bC9hbWF6b24tbG9n/by1hbWF6b24taWNv/bi10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc" cname = "Amazon" time="5 Days ago" role = "Senior UI/UX Designer" about1="Part-Time" about2="Senior Level" location="Mumbai,India "salary="$120/hr"/>

      <Card img="https://imgs.search.brave.com/7oRMZ5ifuTywDSOtzsemEMjW7jsmHMLZeDMZPLycObU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc" cname = "Google" time="30 Days ago" role = "Graphic Designer" about1="Part-Time" about2="Flexible Schedule" location="Kochi,India "salary="$150-220k"/>

      <Card img="https://imgs.search.brave.com/O1ZntDF7eYF6i3j7hqiBDcZgA8yxbVyzt-9cWWZFZ1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWRyaWJiYmxlLWxv/Z28taWNvbi1zdmct/ZG93bmxvYWQtcG5n/LTQ5ODQxNy5wbmc_/Zj13ZWJwJnc9MTI4" cname = "Dribble" time="18 Days ago" role = "Senior Motion Designer" about1="Contract" about2="Remote" location="Chennai,India "salary="$85/hr"/>

      <Card img="https://imgs.search.brave.com/1nlWZr3ordaB_eDBNS2Vxle1C-OFeoMUU8d4OF5yKtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzA4L0ZpZ21hLUxv/Z28uc3Zn" cname = "Figma" time="5 Days ago" role = "UX Designer" about1="Full-time" about2="Office" location="Bangalore,India "salary="$200-250k"/>

      <Card img="https://imgs.search.brave.com/G4fmcAaAootV6KfWEAS-LTVIEyfMC0tB3CXP9PU45Zs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw" cname = "Apple" time="5 Days ago" role = "Software Designer" about1="Full-time" about2="Flexible Schedule" location="Delhi,India "salary="$85-120k"/>
    </div>
  )
}

export default App
